import React from "react";
import Header from "../../component/Header/Header";
import styles from './TermsOfService.module.css'

export default function TermsOfService() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <p className={styles.title}>공지사항</p>
        <article>
          <span className={styles.text}>저희 서비스는 영리적인 수수료를 매기고 있지 않습니다.</span>
          <br/>
          <span className={styles.text}>
            따라서 거래 중 발생하는 고객과 고객 간 소통 문제와 비용 책정 문제에
            대해서는 개입하고 있지 않습니다.
          </span>
          <br/>
          <span className={styles.text}>
            추후 거래 관련 서비스가 업데이트 될 경우 공지와 함께 안내
            드리겠습니다.
          </span>
          <br/>
          <span className={styles.text}>감사합니다.</span>
        </article>
      </div>
    </>
  );
}