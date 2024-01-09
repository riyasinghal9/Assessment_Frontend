var questions = [
  {
    key: "q1",
    ques: "What is ReactJS?",
    options: [
      {
        option: "Server-side framework",
        optionKey: "a",
      },
      {
        option: "user interface framework",
        optionKey: "b",
      },
      {
        option: "both a and b",
        optionKey: "c",
      },
      {
        option: "none of the above",
        optionKey: "d",
      },
    ],
    choosenAns: "b",
  },
  {
    key: "q2",
    ques: "What is Babel?",
    options: [
      {
        option: "Javascript compiler",
        optionKey: "a",
      },
      {
        option: "Javascript transpiler",
        optionKey: "b",
      },
      {
        option: "Javascript Interpreter",
        optionKey: "c",
      },
      {
        option: "None of these",
        optionKey: "d",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q3",
    ques: "What is Reconciliation?",
    options: [
      {
        option: "The process through which React deletes the DOM.",
        optionKey: "a",
      },
      {
        option:
          "The process through which React updates and deletes the component",
        optionKey: "b",
      },
      {
        option: "It is a process to set the state.",
        optionKey: "c",
      },
      {
        option: "The process through which React updates the DOM.",
        optionKey: "d",
      },
    ],
    choosenAns: "d",
  },
  {
    key: "q4",
    ques: "Which are the correct phases of component lifecycle?",
    options: [
      {
        option:
          "Mounting: getDerivedStateFromProps(); Updating: componentWillUnmount(); Unmounting: shouldComponentUpdate()",
        optionKey: "a",
      },
      {
        option:
          "Mounting: componentWillUnmount(); Updating: render(); Unmounting: setState()",
        optionKey: "b",
      },
      {
        option:
          "Mounting: componentDidMount(); Updating: componentDidUpdate(); Unmounting: componentWillUnmount()",
        optionKey: "c",
      },
      {
        option:
          "Mounting: constructor(); Updating: getDerivedStateFromProps(); Unmounting: render()",
        optionKey: "d",
      },
    ],
    choosenAns: "c",
  },
  {
    key: "q5",
    ques: "What is the state of React class component?",
    options: [
      {
        option: "A JavaScript method for sorting arrays. ",
        optionKey: "a",
      },
      {
        option: "A built-in object that stores component data.",
        optionKey: "b",
      },
      {
        option: "A CSS class used for component styling. ",
        optionKey: "c",
      },
      {
        option: "A React component's initial render method. ",
        optionKey: "d",
      },
    ],
    choosenAns: "b",
  },
  {
    key: "q6",
    ques: "What is the purpose of PropTypes in React? ",
    options: [
      {
        option: "To define the expected data types of component props. ",
        optionKey: "a",
      },
      {
        option: "To validate HTML syntax within JSX code. ",
        optionKey: "b",
      },
      {
        option: "To handle form validation in React applications",
        optionKey: "c",
      },
      {
        option: "To provide default values for component props. ",
        optionKey: "d",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q7",
    ques: "What is the purpose of React Fragments?",
    options: [
      {
        option:
          "To group multiple components within a single parent component.",
        optionKey: "a",
      },
      {
        option: "To create reusable CSS styles for React components.  ",
        optionKey: "b",
      },
      {
        option: "To optimize the rendering performance of React components.",
        optionKey: "c",
      },
      {
        option: "To handle asynchronous operations in React applications.  ",
        optionKey: "d",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q8",
    ques: "What is the purpose of Redux in React applications? ",
    options: [
      {
        option: "To handle form validation and submission.",
        optionKey: "a",
      },
      {
        option: "To manage and synchronize component states.",
        optionKey: "b",
      },
      {
        option: "To define the expected data types of component props. ",
        optionKey: "c",
      },
      {
        option: "To create reusable UI components.",
        optionKey: "d",
      },
    ],
    choosenAns: "b",
  },
  {
    key: "q9",
    ques: "What is the significance of the virtual DOM in React? ",
    options: [
      {
        option: "It renders components on the server side. ",
        optionKey: "a",
      },
      {
        option: "It optimizes React components for mobile devices.",
        optionKey: "b",
      },
      {
        option:
          "It provides an in-memory representation of the DOM for efficient updates. ",
        optionKey: "c",
      },
      {
        option: "It handles animations and transitions in React applications.",
        optionKey: "d",
      },
    ],
    choosenAns: "c",
  },
  {
    key: "q10",
    ques: "What is the purpose of the useParams hook in React Router?  ",
    options: [
      {
        option: "To handle form validation in React.js",
        optionKey: "a",
      },
      {
        option: "To retrieve query parameters from the URL ",
        optionKey: "b",
      },
      {
        option: "To extract URL parameters from a route ",
        optionKey: "c",
      },
      {
        option: "To manage the state of route transitions  ",
        optionKey: "d",
      },
    ],
    choosenAns: "c",
  },
  {
    key: "q11",
    ques: "Using which of the following command can prevent default behaviour at in react?",
    options: [
      {
        option: "preventDefault()",
        optionKey: "a",
      },
      {
        option: "avoidDefault()",
        optionKey: "b",
      },
      {
        option: "revokeDefault()",
        optionKey: "c",
      },
      {
        option: "None of the above",
        optionKey: "d",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q12",
    ques: "Identify the smallest building block of React JS",
    options: [
      {
        option: "Props",
        optionKey: "a",
      },
      {
        option: "Elements",
        optionKey: "b",
      },
      {
        option: "Components",
        optionKey: "c",
      },
      {
        option: "None of the above",
        optionKey: "d",
      },
    ],
    choosenAns: "c",
  },
  {
    key: "q13",
    ques: "Among the following which is used to create a class inheritance?",
    options: [
      {
        option: "Inherits",
        optionKey: "a",
      },
      {
        option: "Extends ",
        optionKey: "b",
      },
      {
        option: "Create ",
        optionKey: "c",
      },
      {
        option: "this",
        optionKey: "d",
      },
    ],
    choosenAns: "b",
  },
  {
    key: "q14",
    ques: "JSX allows us to write _____. ",
    options: [
      {
        option: "jQuery in React",
        optionKey: "a",
      },
      {
        option: "Angular Code in React",
        optionKey: "b",
      },
      {
        option: "MySQL in React ",
        optionKey: "c",
      },
      {
        option: "HTML in React",
        optionKey: "d",
      },
    ],
    choosenAns: "d",
  },
  {
    key: "q15",
    ques: "ECMAScript was created to standardize _____.",
    options: [
      {
        option: "TypeScript",
        optionKey: "a",
      },
      {
        option: "Java",
        optionKey: "b",
      },
      {
        option: "JSON",
        optionKey: "c",
      },
      {
        option: "JavaScript",
        optionKey: "d",
      },
    ],
    choosenAns: "d",
  },
  {
    key: "q16",
    ques: "In ES6 – A class is a type of ____.",
    options: [
      {
        option: "Basic datatype",
        optionKey: "a",
      },
      {
        option: "Derived datatype",
        optionKey: "b",
      },
      {
        option: "Variable",
        optionKey: "c",
      },
      {
        option: "Function",
        optionKey: "d",
      },
    ],
    choosenAns: "d",
  },
  {
    key: "q17",
    ques: "In ES6 – Which method refers to the parent class?",
    options: [
      {
        option: "parent()",
        optionKey: "a",
      },
      {
        option: "super()",
        optionKey: "b",
      },
      {
        option: "top()",
        optionKey: "c",
      },
      {
        option: "main()",
        optionKey: "d",
      },
    ],
    choosenAns: "b",
  },
  {
    key: "q18",
    ques: "Which is the correct arrow function to add two numbers?",
    options: [
      {
        option: "add = (a,b) => a+b;",
        optionKey: "a",
      },
      {
        option: "add = (a,b) => return a+b;",
        optionKey: "b",
      },
      {
        option: "add = (a,b) => { return a+b;}",
        optionKey: "c",
      },
      {
        option: "Both a. and b.",
        optionKey: "d",
      },
    ],
    choosenAns: "d",
  },
  {
    key: "q19",
    ques: "Which of the following is method is not a part of ReactDOM?",
    options: [
      {
        option: "ReactDOM.hydrate()",
        optionKey: "a",
      },
      {
        option: "ReactDOM.destroy()",
        optionKey: "b",
      },
      {
        option: "ReactDOM.createPortal()",
        optionKey: "c",
      },
      {
        option: "All of the mentioned",
        optionKey: "d",
      },
    ],
    choosenAns: "b",
  },
  {
    key: "q20",
    ques: "In which condition is the React.js Lifecycle method static getDerivedSateFromProps(props, state) is called?",
    options: [
      {
        option: "When the state of the component is updated",
        optionKey: "a",
      },
      {
        option: "When a component is created for the first time",
        optionKey: "b",
      },
      {
        option: "Both of the mentioned",
        optionKey: "c",
      },
      {
        option: "None of the mentioned",
        optionKey: "d",
      },
    ],
    choosenAns: "c",
  },
  {
    key: "q21",
    ques: "Which of the following is used to handle file operations in Node.js?",
    options: [
      {
        option: "fs",
        optionKey: "a",
      },
      {
        option: "path",
        optionKey: "b",
      },
      {
        option: "url",
        optionKey: "c",
      },
      {
        option: "querystring",
        optionKey: "d",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q22",
    ques: "Which of the following is a built-in module in Node.js?",
    options: [
      {
        option: "assert",
        optionKey: "a",
      },
      {
        option: "mysql",
        optionKey: "b",
      },
      {
        option: "redis",
        optionKey: "c",
      },
      {
        option: "mongoose",
        optionKey: "d",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q23",
    ques: "Which of the following is used to create a new HTTP server in Node.js?",
    options: [
      {
        option: "http.createServer()",
        optionKey: "a",
      },
      {
        option: "http.createServer",
        optionKey: "b",
      },
      {
        option: "http.newServer()",
        optionKey: "c",
      },
      {
        option: "http.newServer",
        optionKey: "d",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q24",
    ques: "Which of the following is used to create a child process in Node.js?",
    options: [
      {
        option: "child_process.fork()",
        optionKey: "a",
      },
      {
        option: "child_process.spawn()",
        optionKey: "b",
      },
      {
        option: "child_process.exec()",
        optionKey: "c",
      },
      {
        option: "child_process.execFile()",
        optionKey: "d",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q25",
    ques: "Which of the following is used to encrypt data in Node.js?",
    options: [
      {
        option: "crypto.createCipher()",
        optionKey: "a",
      },
      {
        option: "crypto.encrypt()",
        optionKey: "b",
      },
      {
        option: "crypto.hash()",
        optionKey: "c",
      },
      {
        option: "crypto.encode()",
        optionKey: "d",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q26",
    ques: "Which of the following is used to send email in Node.js?",
    options: [
      {
        option: "modemailer",
        optionKey: "a",
      },
      {
        option: "email.js",
        optionKey: "b",
      },
      {
        option: "sendmail",
        optionKey: "c",
      },
      {
        option: "all of the above",
        optionKey: "d",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q27",
    ques: "Which of the following is used to create debugging tools in Node.js?",
    options: [
      {
        option: "Node.js Inspector",
        optionKey: "a",
      },
      {
        option: "ndb",
        optionKey: "b",
      },
      {
        option: "Visual Studio Code Debugger",
        optionKey: "c",
      },
      {
        option: "all of the above",
        optionKey: "d",
      },
    ],
    choosenAns: "d",
  },
  {
    key: "q28",
    ques: "Which of the following is used to create package managers in Node.js?",
    options: [
      {
        option: "npm",
        optionKey: "a",
      },
      {
        option: "Yarn",
        optionKey: "b",
      },
      {
        option: "pnpm",
        optionKey: "c",
      },
      {
        option: "all of the above",
        optionKey: "d",
      },
    ],
    choosenAns: "d",
  },
  {
    key: "q29",
    ques: "Which module is used to serve static resources in Node.js?",
    options: [
      {
        option: "static",
        optionKey: "a",
      },
      {
        option: "node-resource",
        optionKey: "b",
      },
      {
        option: "http",
        optionKey: "c",
      },
      {
        option: "node-static",
        optionKey: "d",
      },
    ],
    choosenAns: "d",
  },
  {
    key: "q30",
    ques: "The parameters in order that a middleware function receives are:",
    options: [
      {
        option: "next, res, req",
        optionKey: "a",
      },
      {
        option: "req, res, next",
        optionKey: "b",
      },
      {
        option: "res, req, next",
        optionKey: "c",
      },
      {
        option: "none of the above",
        optionKey: "d",
      },
    ],
    choosenAns: "b",
  },
  {
    key: "q31",
    ques: "How many Node object methods are available?",
    options: [
      {
        option: "21",
        optionKey: "a",
      },
      {
        option: "18",
        optionKey: "b",
      },
      {
        option: "19",
        optionKey: "c",
      },
      {
        option: "20",
        optionKey: "d",
      },
    ],
    choosenAns: "b",
  },
  {
    key: "q32",
    ques: "What is the default scope in Node.js application?",
    options: [
      {
        option: "Global Function",
        optionKey: "a",
      },
      {
        option: "Local to object",
        optionKey: "b",
      },
      {
        option: "Local",
        optionKey: "c",
      },
      {
        option: "Global",
        optionKey: "d",
      },
    ],
    choosenAns: "c",
  },
  {
    key: "q33",
    ques: "Simple or complex functionality organized in a single or multiple JavaScript files which can be reused throughout your Node.js application is called ?",
    options: [
      {
        option: "Library",
        optionKey: "a",
      },
      {
        option: "Package",
        optionKey: "b",
      },
      {
        option: "Function",
        optionKey: "c",
      },
      {
        option: "Module",
        optionKey: "d",
      },
    ],
    choosenAns: "d",
  },
  {
    key: "q34",
    ques: "Which of the following is true about readable stream?",
    options: [
      {
        option: "Readable stream is used for read operation",
        optionKey: "a",
      },
      {
        option: "Output of readable stream can be input to a writable stream",
        optionKey: "b",
      },
      {
        option: "Both of the above",
        optionKey: "c",
      },
      {
        option: "None of the above",
        optionKey: "d",
      },
    ],
    choosenAns: "c",
  },
  {
    key: "q35",
    ques: "Which of the following Node object property returns the node immediately before a node?",
    options: [
      {
        option: "localName",
        optionKey: "a",
      },
      {
        option: "index",
        optionKey: "b",
      },
      {
        option: "previousSibling",
        optionKey: "c",
      },
      {
        option: "textContent",
        optionKey: "d",
      },
    ],
    choosenAns: "c",
  },
  {
    key: "q36",
    ques: "Which method of fs module is used to truncate a file?",
    options: [
      {
        option: "fs.delete(fd, len, callback)",
        optionKey: "a",
      },
      {
        option: "fs.remove(fd, len, callback)",
        optionKey: "b",
      },
      {
        option: "fs.ftruncate(fd, len, callback)",
        optionKey: "c",
      },
      {
        option: "None of the above",
        optionKey: "d",
      },
    ],
    choosenAns: "c",
  },
  {
    key: "q37",
    ques: "Which of the following code prints memory usage?",
    options: [
      {
        option: "console.log(process.memoryUsage());",
        optionKey: "a",
      },
      {
        option: "console.log('Current version: ' + process.memory());",
        optionKey: "b",
      },
      {
        option: "console.log('Current version: ' + process.getMemory());",
        optionKey: "c",
      },
      {
        option: "None of the above",
        optionKey: "d",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q38",
    ques: "Which of the following method resolves an ip address to an array of hostnames?",
    options: [
      {
        option: "dns.reverse(ip, callback)",
        optionKey: "a",
      },
      {
        option: "dns.resolve(hostname[, rrtype], callback)",
        optionKey: "b",
      },
      {
        option: "dns.resolve4(hostname, callback)",
        optionKey: "c",
      },
      {
        option: "None of the above",
        optionKey: "d",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q39",
    ques: "Transform stream is a type of duplex stream.",
    options: [
      {
        option: "true",
        optionKey: "a",
      },
      {
        option: "false",
        optionKey: "b",
      },
    ],
    choosenAns: "a",
  },
  {
    key: "q40",
    ques: "How many node types are there in total?",
    options: [
      {
        option: "11",
        optionKey: "a",
      },
      {
        option: "12",
        optionKey: "b",
      },
      {
        option: "13",
        optionKey: "c",
      },
      {
        option: "14",
        optionKey: "d",
      },
    ],
    choosenAns: "b",
  },
];

export default questions;
