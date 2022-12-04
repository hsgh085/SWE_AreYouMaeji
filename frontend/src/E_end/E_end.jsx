import React, { useEffect, useState } from "react";
import BtnSubmit from "../components/Button/Button";
import Rate from "../components/Rate/Rate";
import styles from "./E_end.module.css";
import { Link } from "react-router-dom";

export default function E_end() {
  const [rate, setRate] = useState(1);

  const sendRate = () => {
    console.log(rate);
    fetch("", {
      method: "POST",
      Headers: {},
      body: JSON.stringify({
        star: rate,
      }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //업데이트 제대로 되었는지 확인용
    alert(`별점: ${rate}`);
    sendRate();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <Rate setRate={setRate} />
          <br/>
          <br/>
          <br/>
          <p>거래 상대의 별점을 매겨주세요!</p>
        </div>
        <div className="button_row">
            <Link to = "/home">
              <BtnSubmit>완료</BtnSubmit>
            </Link>
          </div>
      </form>
      <div className="footer">&copy;{new Date().getFullYear()} Errand App</div>
    </>
  );
}
