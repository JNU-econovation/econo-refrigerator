import "./Router.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Recommand/Sidebar";
import Recommand from "./Recommand/Recommand";
import Recipe from "./Recipe/Recipe.js";
import Search from "./Search/Search";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import Explore from "./Search/Explore";

const Router = ({ Page }) => {
  return (
    <BrowserRouter>
      <div className="initial">
        <Header />
        <Switch>
          <Route
            path="/recipe/:id"
            component={() => {
              return (
                <div className="contentsbody">
                  <Recipe />
                </div>
              );
            }}
          />
          <Route
            path="/search"
            component={() => {
              return (
                <div className="contentsbody">
                  <Sidebar />
                  <Search />
                </div>
              );
            }}
          />
          <Route
            path="/recommendation"
            component={() => {
              return (
                <div className="contentsbody">
                  <Sidebar />
                  <Recommand />
                </div>
              );
            }}
          />
          <Route path="/explore" component={() => <Explore />} />
          <Route
            exact
            path="/"
            component={() => {
              return (
                <div className="contentsbody">
                  <Home />
                </div>
              );
            }}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
