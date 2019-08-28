import React from "react";
import "./index.scss";
import logo from "./logo.svg";
const NavBar = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1>Brews</h1>
    </header>
  );
};

export default NavBar;
