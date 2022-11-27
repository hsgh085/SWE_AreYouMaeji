import React, { useState } from "react";
import BtnSubmit from "../../component/Button/BtnSubmit";
import Header from "../../component/Header/Header";
import Radio from "../../component/Radio/Radio";
import RadioGroup from "../../component/Radio/RadioGroup";
import useUser from "../../hooks/use-user";
import styles from "./ProfileSetting.module.css";

export default function ProfileSetting() {
  const [loading, error, user] = useUser();
  const [form, setForm] = useState({
    nickname: `${user.nickname}`,
    phone_number: `${user.phone_number}`,
    gender: user.gender,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    //업데이트 제대로 되었는지 확인용
    alert(`
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
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.input}>
            <label className={styles.title} htmlFor="nickname">
              닉네임
            </label>
            <div className={styles.col - 3}>
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
            <div className={styles.col - 3}>
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
              <Radio name="gender" value="남자">
                남자
              </Radio>
              <Radio name="gender" value="여자">
                여자
              </Radio>
            </RadioGroup>
          </div>
        </div>
        <div className={styles.submit}>
          <BtnSubmit>수정하기</BtnSubmit>
        </div>
      </form>
    </>
  );
}
