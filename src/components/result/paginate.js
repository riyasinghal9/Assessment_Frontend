import React, { useEffect, useState } from "react";
import "../../App.css";
import { getData } from "../../fetchNodeServices";

const CustomPagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  onSearchReset,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const visiblePageBlocks = 2;
  const [startBlock, setStartBlock] = useState(1);
  const [endBlock, setEndBlock] = useState(
    Math.min(totalPages, visiblePageBlocks)
  );

  useEffect(() => {
    setEndBlock(Math.min(totalPages, startBlock + visiblePageBlocks - 1));
  }, [startBlock, totalPages, visiblePageBlocks]);

  const getPageBlocks = () => {
    const pageBlocks = [];
    for (let i = startBlock; i <= endBlock; i++) {
      pageBlocks.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pageBlocks;
  };

  const handlePageChange = async (page) => {
    setCurrentPage(page);
    onPageChange(page);

    if (totalPages > visiblePageBlocks) {
      if (page <= totalPages - visiblePageBlocks + 1) {
        setStartBlock(page);
        setEndBlock(page + visiblePageBlocks - 1);
      } else {
        setStartBlock(totalPages - visiblePageBlocks + 1);
        setEndBlock(totalPages);
      }
    }

    onSearchReset(); // Reset search text when changing pages
    await getData("getUsers", {
      page: page,
      perPage: itemsPerPage,
    });
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {getPageBlocks()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default CustomPagination;
