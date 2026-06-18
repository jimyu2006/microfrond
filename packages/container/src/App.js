import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {StylesProvider, createGenerateClassName} from "@material-ui/core";
import MarketingApp from "../components/MarketingApp";
import Header from "../components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </Router>
  );
};
