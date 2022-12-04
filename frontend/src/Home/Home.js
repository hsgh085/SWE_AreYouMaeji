import React, { useState } from "react";
import "./Home.css";
import H_product from "../components/H_product/H_product";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import Header_search from "../components/Header/Header_search";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navigateToPurchase = () => {
    navigate("/E_start");
  };
  const [topics, setTopics] = useState([
    { id: 1, title: "제품1", price: 3000, errand_price: 500 },
    { id: 2, title: "제품2", price: 40050, errand_price: 400 },
    { id: 2, title: "제품2", price: 40050, errand_price: 400 },
    { id: 2, title: "제품2", price: 40050, errand_price: 400 },
    { id: 2, title: "제품2", price: 40050, errand_price: 400 },
    { id: 2, title: "제품2", price: 40050, errand_price: 400 },
    { id: 2, title: "제품2", price: 40050, errand_price: 400 },
  ]);
  const lis = [];

  for (let i = 0; i < topics.length; i++) {
    let t = topics[i];
    lis.push(
      <div className="home" onClick={navigateToPurchase}>
        <H_product
          title={t.title}
          price={t.price}
          errand_price={t.errand_price}
        />
      </div>
    );
  }
  return (
    <div>
      <Header_search />
      {lis}
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
