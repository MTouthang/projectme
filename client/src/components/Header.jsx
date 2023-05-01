/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../style/header.css";

const Header = () => {
  return (
    <header className="header">
      {/* <a href="#"> logo </a> */}
      <h2> child selector </h2>

      <nav>
        <ul>
          <li>
            <a href="https://pwskills.com/">01. About </a>
          </li>
          <li>
            <a href="#">02. Experience </a>
          </li>
          <li>
            <a href="#">03. Work </a>
          </li>
          <li>
            <a href="#">04. Contact </a>
          </li>
          <li>
            {" "}
            <button> light </button>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
