import React from 'react';
import './Signup.css'
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className='back'>

            <h1 className="form_sign-up">회원가입</h1>
            <div class="containersign">
                <h2 className="form_signup">아이디</h2>
                <div class="input-area">
                    <input name="username" type="text" />
                    <label for="input" class="placeholder">아이디를 입력해주세요</label>
                </div>
            </div>
            <div class="containersign">
                <h2 className="form_signup">전화번호</h2>
                <div class="input-area">
                    <input name="username" type="text" />
                    <label for="input" class="placeholder">전화번호를 입력해주세요</label>
                </div>
            </div>
            <div class="containersign">
                <h2 className="form_signup">학번</h2>
                <div class="input-area">
                    <input name="username" type="text" />
                    <label for="input" class="placeholder">학번을 입력해주세요</label>
                </div>
            </div>
            <div class="containersign">
                <h2 className="form_signup">성별</h2>
                <input type="button" class="button" value="남자" ></input>

                <input type="button" class="button" value="여자" ></input>
            </div><Link to="/main" >
                <img
                    className="kakao_logo"
                    src="https://i.esdrop.com/d/f/uVJApfFjHN/9Lm456HH7s.png" alt="" />
            </Link>
        </div>



    );


}

export default Signup;
