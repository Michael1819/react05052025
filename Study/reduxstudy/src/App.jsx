import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./page/MainPage";
import DetailPage from "./page/DetailPage";
import TodoDetailPage from "./page/TodoDetailPage";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/detail/:id" component={TodoDetailPage} />
      <Route exact path="/all" component={DetailPage} />
      
    </Switch>
  );
}

export default App;


