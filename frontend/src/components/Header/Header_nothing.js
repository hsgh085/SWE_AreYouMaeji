import React from "react";
import "./Header_search.css";
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Header_nothing() {
  const navigate = useNavigate();
  return (
    <div className="header_nothing">
      <div className="iconalign">
        <BiChevronLeft
          className="backpage_mypage"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className="iconalign2_nothing">
        <Link to="/H_mypage">
          <img className="header_logo_nothing" src="/assets/logo.png" />
        </Link>
      </div>
    </div>
  );
}

export default Header_nothing;