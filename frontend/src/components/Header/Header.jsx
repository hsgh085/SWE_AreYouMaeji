import React from "react";
import "./Header_search.css";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header_mypage">
      <div className="iconalign">
        <BiChevronLeft
          className="backpage_mypage"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className="iconalign2">
        <Link to="/home">
          <img className="header_logo_mypage" src="/assets/logo.png" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
