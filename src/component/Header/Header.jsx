import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div className={styles.icons}>
        <IoIosArrowBack
          className={styles.backpage}
          onClick={() => {
            navigate(-1);
          }}
        />
        <Link to="/main">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
}
