import React from "react";

import "./Header.scss";

const Header = ({title}) => {
  return (
    <header className="Header">
      <button className="back"></button>
      <h1 className="title">{title}</h1>
    </header>
  );
};

export default Header;
