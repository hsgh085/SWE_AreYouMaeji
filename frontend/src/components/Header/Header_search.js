import React from "react";
import "./Header_search.css";
import { Link } from "react-router-dom";
import { TiEquals } from "react-icons/ti";
import { SlUser } from "react-icons/sl";

function Header() {
  return (
    <div className="header">
      <Link to="/home">
        <img className="header_logo" src="/assets/logo.png" alt="" />
      </Link>
      s
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="header_nav">
        <Link to="/H_mypage">
          <div className="header_option">
            <SlUser className="header_optionLineTwo" />
          </div>
        </Link>
        <Link to="/H_category">
          <div className="header_option">
            <TiEquals className="header_optionLineTwo" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
