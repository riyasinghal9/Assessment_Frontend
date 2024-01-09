import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getData } from "../../fetchNodeServices";
import CustomPagination from "./paginate";

const StudentTable = () => {
  const [searchText, setSearchText] = useState("");
  const [topFilter, setTopFilter] = useState("5");
  const [currentPage, setCurrentPage] = useState(1);
  const [students, setStudents] = useState([]);

  const itemsPerPage = parseInt(topFilter); // Convert to number

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchReset = () => {
    setSearchText("");
  };

  const handleSearchChange = async (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    setCurrentPage(1);

    try {
      const result = await getData("getUsers", { search: newSearchText });

      if (Array.isArray(result)) {
        setStudents(result);
      } else {
        console.error("Unexpected result format:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchAllStudents = async () => {
    var result = await getData("getUsers");
    setStudents(result);
  };

  useEffect(() => {
    fetchAllStudents();
  }, []);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setTopFilter(selectedFilter);
    setCurrentPage(1); // Reset current page when changing the filter
  };
  const sortedAndFilteredStudents = students
    .filter(
      (student) =>
        student.name.toLowerCase().includes(searchText.toLowerCase()) ||
        student.phone.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => b.marks - a.marks);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // const currentItems =
  //   searchText !== ""
  //     ? sortedAndFilteredStudents
  //     : sortedAndFilteredStudents.slice(startIndex, endIndex);
  const currentItems =
    searchText !== ""
      ? sortedAndFilteredStudents.slice(0, parseInt(topFilter, 10))
      : sortedAndFilteredStudents.slice(startIndex, endIndex);

  return (
    <div>
      <TextField
        label="Search by Name or Phone"
        variant="outlined"
        id="outlined-basic"
        style={{ width: "400px", marginLeft: 10 }}
        margin="normal"
        value={searchText}
        onChange={handleSearchChange}
      />
      <FormControl
        style={{ marginLeft: "10px", minWidth: "80px", marginTop: 15 }}
      >
        <InputLabel id="demo-simple-select-label">Top</InputLabel>
        <Select label="Top" value={topFilter} onChange={handleFilterChange}>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="30">30</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Marks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>{student.marks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <center style={{ marginTop: 10 }}>
        <CustomPagination
          totalItems={sortedAndFilteredStudents.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onSearchReset={handleSearchReset}
        />
      </center>
    </div>
  );
};

export default StudentTable;
