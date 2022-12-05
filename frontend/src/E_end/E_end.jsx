import React, {useEffect, useState} from "react";
import BtnSubmit from "../components/Button/Button";
import Rate from "../components/Rate/Rate";
import styles from "./E_end.module.css";
import {Link, useParams} from "react-router-dom";

export default function E_end() {
  const [rate, setRate] = useState(1);
  let {id} = useParams();
  const data = new FormData();
  data.append("star", rate.toString());
  const value = Object.fromEntries(data.entries());

  function sendRate(event) {
    let model = {
      method: "PUT",
      body: JSON.stringify(value),
      headers: {
        Authorization: localStorage.getItem("email"),
        'Content-Type': 'application/json',
      },
    };
    fetch("/api/posts/" + id + "/end", model)
      .then(() => {
        window.alert("평가가 완료되었습니다.")
      })
  };

  return (
    <>
      <div className={styles.container}>
        <Rate setRate={setRate}/>
        <br/>
        <br/>
        <br/>
        <p>거래 상대의 별점을 매겨주세요!</p>
      </div>
      <div className="button_row">
        <Link to="/home" onClick={sendRate}>
          <BtnSubmit>완료</BtnSubmit>
        </Link>
      </div>
      <div className="footer">&copy;{new Date().getFullYear()} Errand App</div>
    </>
  );
}
