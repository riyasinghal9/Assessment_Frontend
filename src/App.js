import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Admin from "./components/adminLogin/admin";
import Login from "./components/login/login";
import App1 from "./components/q&a/app1";
import App2 from "./components/result/app2";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/admin" component={Admin} />
        <Route path="/Exam" component={App1} />
        <Route path="/Result" component={App2} />
      </Switch>
    </Router>
  );
}
export default App;
