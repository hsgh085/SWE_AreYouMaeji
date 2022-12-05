import React, { useState } from "react";
import styles from "./Ask.module.css";
import BtnSubmit from "../../component/Button/BtnSubmit";
import Header from "../../component/Header/Header";
import { RiQuestionFill } from "react-icons/ri";

export default function Ask() {
  const [ask, setAsk] = useState("");
  const handleChange = (e) => {
    setAsk(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(ask);
    alert("문의가 정상적으로 접수되었습니다.");
  };
  return (
    <>
      <Header />
      <div className={styles.container}>
        <p>
          문의사항이 있으실 경우 문의양식을 작성 하시거나, 하단의 전화번호로
          연락 부탁드립니다.
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label htmlFor="ask">문의내용</label>
            <textarea
              name="ask"
              placeholder="문의내용을 입력해주세요"
              onChange={handleChange}
            ></textarea>
            <div className={styles.submit}>
              <BtnSubmit>문의하기</BtnSubmit>
            </div>
          </div>
        </form>
        <footer className={styles.footer}>
          <RiQuestionFill />
          <span>문의 전화번호 : 010-1234-5678</span>
        </footer>
      </div>
    </>
  );
}
