import React from "react";
import { NavBar } from "./nav/NavBar";
import { Route } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Redirect } from "react-router-dom";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";

export const KandyKorner = () => (
  <>
    <Route path="/login" render={(props) => <Login {...props} />} />
    <Route path="/register" render={(props) => <Register {...props} />} />

    <Route
      render={() => {
        if (localStorage.getItem("kandy_customer")) {
          return (
            <>
              <Route render={(props) => <NavBar {...props} />} />
              <Route
                render={(thisRoutePropObj) => (
                  <ApplicationViews {...thisRoutePropObj} />
                )}
              />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  </>
);
