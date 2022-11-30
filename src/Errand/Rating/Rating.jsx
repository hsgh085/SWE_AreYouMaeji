import React, { useEffect, useState } from "react";
import BtnSubmit from "../../component/Button/BtnSubmit";
import Header from "../../component/Header/Header";
import Rate from "../../component/Rate/Rate";
import styles from "./Rating.module.css";

export default function Rating() {
  const [rate, setRate] = useState();

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
      <Header />
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <Rate setRate={setRate} />
          <p>거래 상대의 별점을 매겨주세요!</p>
          <BtnSubmit>완료</BtnSubmit>
        </div>
      </form>
    </>
  );
}
