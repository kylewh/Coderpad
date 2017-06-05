import React from "react";
import { Route, Switch } from "react-router-dom";
/** Child Components */
import NavBtn from "./components/NavBtn";
import DashBoard from "../DashBoard/";
import WritePad from "../WritePad/";
import NewsFeed from "../NewsFeed/";
import "./Global.scss";

const App = () => {
  return (
    <div>
      <NavBtn />
      <Route exact path="/" component={DashBoard} />
      <Route path="/write" component={WritePad} />
      <Route path="/news" component={NewsFeed} />
    </div>
  );
};

export default App;
