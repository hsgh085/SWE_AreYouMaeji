import React, { useState, useEffect } from "react";
import styles from "./M_cancel.module.css";
import Header from "../components/Header/Header"
import Report from "./Report";
import useUser from "../components/hooks/use-user";

export default function CancelledErrand() {
  const user = useUser();
  const [cancelLists, setCancelLists] = useState([]);

  useEffect(() => {
    fetch("data/errandList.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터 받아옴");
        setCancelLists(data);
      });
    return () => {
      console.log("데이터 청소");
    };
  }, []);

  return (
    <>
      <Header />
      <p className={styles.title}>취소된 심부름</p>
      <ul>
        {cancelLists.map((list) => (
          <li className={styles.list} key={list.postId}>
            <p className={styles.productName}>{list.product}</p>
            <div className={styles.content}>
              <div className={styles.text}>
                <p className={styles.role}>상품 비용</p>
                <p>{list.cost}원</p>
              </div>
              <div className={styles.text}>
                <p className={styles.role}>심부름 비용</p>
                <p>{list.fee}원</p>
              </div>
              <div className={styles.text}>
                <p className={styles.role}>목적지</p>
                <p>{list.destination}</p>
              </div>
            </div>

            <Report postId={list.postId} userId={user.nickname} />
          </li>
        ))}
      </ul>
      <div className={styles.footer}>&copy;{new Date().getFullYear()} Errand App</div>
    </>
  );
}
