import React, { useEffect, useState } from "react";
import "./E_start.css";
import E_product from "../components/E_product/E_product";
import { useParams } from "react-router-dom";
import Header_do from "../components/Header/Header_do";
import { Link } from "react-router-dom";

function E_start() {
  let { id } = useParams();

  function handlePostMatched(event) {
    let model = {
      method: "PUT",
      headers: {
        Authorization: localStorage.getItem("email"),
        "Content-Type": "application/json",
      },
    };
    fetch(`/api/posts/` + id + `/matched`, model)
      .then((res) => {
        window.alert("심부름이 수락되었습니다.");
      });
  }

  return (
    <div>
      <Header_do />
      <header className="form-errand">
        {
          <E_product/>
        }
      </header>
      <div className="button_row">
        <Link to = "/home">
          <div className="button">취소</div>
        </Link>
        <Link to = {"/E_first/" + id}>
          <div className="button" onClick={handlePostMatched}>수락</div>
        </Link>
      </div>
      <div className="footer_">&copy;{new Date().getFullYear()} Errand App</div>
    </div>
  );
}

export default E_start;
