import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import Header_search from "../components/Header/Header_search";
import H_product from "../components/H_product/H_product";

function Home() {
  return (
    <div>
      <Header_search />
      <H_product />
      <Link to="/E_make">
        <nav class="nav">
          <ul class="nav__list">
            <div class="nav__btn">
              <a class="nav__link">
                <span class="nav__circle badge">
                  <BsFillPencilFill className="pencil" />
                </span>
              </a>
            </div>
          </ul>
        </nav>
      </Link>
    </div>
  );
}

export default Home;
//https://fontawesomeicons.com/pencil
