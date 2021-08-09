import React from 'react'
import Dashboard from "./components/Dashboard";
import {Route, Switch} from "react-router-dom";
import PiechartPage from "./components/PiechartPage";
import TableView from "./components/TableView"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Dashboard}></Route>
        <Route exact path="/piechart" component={PiechartPage}></Route>
        <Route exact path="/tableView" component={TableView}></Route>
      </Switch>
    </>
  );
}

export default App;
