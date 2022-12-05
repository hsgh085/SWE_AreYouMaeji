import React, {useRef} from "react";
import "./Header_search.css";
import { Link } from "react-router-dom";
import { TiEquals } from "react-icons/ti";
import { SlUser } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

function Header() {
  const searchBar = useRef();
  function handleSearch(event){
    event.preventDefault();
    window.location.replace("/home/" + searchBar.current.value)
  }
  return (
    <div className="header">
      <Link to="/home">
        <img className="header_logo" src="/assets/logo.png" alt="" />
      </Link>
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search..."
          ref={searchBar}
        />
        <BiSearch
          className="header_searchIcon"
          type={"button"}
          onClick={handleSearch}
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
