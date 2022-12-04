import React, { useState } from "react";
//import BtnSubmit from "../../component/Button/BtnSubmit";
import styles from "./M_profile.module.css";
import BtnSubmit from "../components/Button/Button";
import Header from "../components/Header/Header";
import Radio from "../components/Radio/Radio";
import RadioGroup from "../components/Radio/RadioGroup";
import useUser from "../components/hooks/use-user";
import { Link } from "react-router-dom";

export default function M_profile() {
  const user = useUser();
  const [form, setForm] = useState({
    nickname: `${user.nickname}`,
    phone_number: `${user.phone_number}`,
    gender: user.gender,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    //업데이트 제대로 되었는지 확인용
    console.log(`
    닉네임: ${form.nickname}
    전화번호: ${form.phone_number}
    성별: ${form.gender}로 수정완료`);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <>
      <Header />
      <div className={styles.p_title}>프로필 수정</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.input}>
            <label className={styles.title} htmlFor="nickname">
              닉네임
            </label>
            <div className={styles.col3}>
              <input
                className={styles.inputText}
                type="text"
                id="nickname"
                name="nickname"
                value={form.nickname}
                onChange={handleChange}
              />
              <span className={styles.focusBorder}></span>
            </div>
          </div>
          <div className={styles.input}>
            <label className={styles.title} htmlFor="phone_number">
              전화번호
            </label>
            <div className={styles.col3}>
              <input
                className={styles.inputText}
                type="text"
                id="phone_number"
                name="phone_number"
                value={form.phone_number}
                onChange={handleChange}
              />
              <span className={styles.focusBorder}></span>
            </div>
          </div>
          <div className={styles.input}>
            <label className={styles.title} htmlFor="gender">
              성별
            </label>
            <RadioGroup value={form.gender} onChange={handleChange}>
              <Radio name="gender" value="1">
                남자
              </Radio>
              <Radio name="gender" value="2">
                여자
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </form>
      <div className={styles.submit}>
        <Link to="/H_mypage">
          <BtnSubmit>수정하기</BtnSubmit>
        </Link>
      </div>
      <div className={styles.footer}>
        &copy;{new Date().getFullYear()} Errand App
      </div>
      {/*footer css는 mypage 참조 */}
    </>
  );
}
