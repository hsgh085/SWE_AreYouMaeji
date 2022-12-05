import React, { useState } from "react";
//import BtnSubmit from "../../component/Button/BtnSubmit";
//import Header from "../../component/Header/Header";
//import Radio from "../../component/Radio/Radio";
//import RadioGroup from "../../component/Radio/RadioGroup";
//import useUser from "../../hooks/use-user";
import styles from "./M_profile.module.css";
import BtnSubmit from "../components/Button/Button";
import Header_nothing from "../components/Header/Header_nothing"
import Radio from "../components/Radio/Radio";
import RadioGroup from "../components/Radio/RadioGroup";
import useUser from "../components/hooks/use-user";
import { Link } from "react-router-dom";

export default function M_profile() {
  const [loading, error, user] = useUser();
  const [form, setForm] = useState({
    nickname: `${user.nickname}`,
    phone_number: `${user.phone_number}`,
    gender: user.gender,
  });
  const handleSubmit = () => {
    const data = new FormData();
    data.append("gender", form.gender);
    data.append("nickname", form.nickname);
    data.append("phone_number", form.phone_number);
    const value = Object.fromEntries(data.entries());
    let model = {
      method: "PUT",
      body: JSON.stringify(value),
      headers: {
        Authorization: localStorage.getItem("email"),
        "Content-Type": "application/json",
      },
    };
    fetch(`/api/member`, model)
      .then((res) => res.json())
      .then((res) => {
        window.alert("정보를 수정했습니다.");
        window.location.replace("/H_mypage");
      });
    //업데이트 제대로 되었는지 확인용
    // console.log(`
    // 닉네임: ${form.nickname}
    // 전화번호: ${form.phone_number}
    // 성별: ${form.gender}로 수정완료`);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <>
      <Header_nothing />
      <p className={styles.p_title}>프로필 수정</p>
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
                남성
              </Radio>
              <Radio name="gender" value="2">
                여성
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </form>
      <div className={styles.submit}>
        <Link to = "/H_mypage" onClick={handleSubmit}>
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
