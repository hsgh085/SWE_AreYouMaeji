import React, {useEffect, useState} from 'react';
import './Signup.css'
import {Link} from "react-router-dom";

function Signup() {
  function handleSaveMember(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("email", localStorage.getItem("email"));
    const value = Object.fromEntries(data.entries());
    let model = {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        Authorization: localStorage.getItem("email"),
        'Content-Type': 'application/json'
      }
    };
    if (data.get("phone_number") == "" ||  data.get("phone_number") == ""){
      window.alert("잘못된 입력.");
      return;
    }
    fetch(`/api/member`, model)
      .then((res) => res.json())
      .then((res) => {
        window.alert("회원가입 성공!");
        window.location.replace("/main")
      })
  };

  return (
    <form onSubmit={handleSaveMember} method="post" id="formTable">
      <div className='back'>
        <h1 className="form_sign-up">회원가입</h1>
        <div className="containersign">
          <h1 className="form_signup" name="email">{localStorage.getItem("email")}</h1>
        </div>
        <div class="containersign">
          <h2 className="form_signup">전화번호</h2>
          <div class="input-area">
            <input name="phone_number" type="text"/>
            <label for="input" class="placeholder">전화번호를 입력해주세요</label>
          </div>
        </div>
        <div class="containersign">
          <h2 className="form_signup">닉네임</h2>
          <div class="input-area">
            <input name="nickname" type="text"/>
            <label for="input" class="placeholder">닉네임을 입력해주세요</label>
          </div>
        </div>
        <div class="containersign">
          <h2 className="form_signup">성별</h2>
          <input type="radio" name="gender" value="1" defaultChecked/>남자
          <input type="radio" name="gender" value="2"/>여자
          <input type="radio" name="gender" value="3"/>미제공
        </div>
        <input type="image"
            className="kakao_logo"
            src="https://i.esdrop.com/d/f/uVJApfFjHN/9Lm456HH7s.png" alt=""
          />
      </div>
    </form>


  );


}

export default Signup;
