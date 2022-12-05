import React, { useState, useEffect } from "react";
import styles from "./M_cancel.module.css";
import Header_nothing from "../components/Header/Header_nothing"
import Report from "./Report";
import useUser from "../components/hooks/use-user";

export default function CancelledErrand() {
  const user = useUser();
  const [cancelLists, setCancelLists] = useState([]);

  useEffect(() => {
    let model = {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("email"),
        'Content-Type': 'application/json',
      },
    };
    fetch("/api/posts/cancel", model)
      .then((res) => res.json())
      .then((data) => {
        setCancelLists(data);
      });
  }, []);

  return (
    <>
      <Header_nothing />
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
    </>
  );
}
