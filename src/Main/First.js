import React from 'react';
import './First.css'
import { Link } from "react-router-dom";


function First() {


    return (
        <div >
            <div class="first_sign-in">
                <img src="https://i.esdrop.com/d/f/uVJApfFjHN/Z9voVrRkN3.png" alt="" />
            </div>
            <Link to="/Termsofagree" >
                <img
                    className="first_kakao_logo"
                    src="https://i.esdrop.com/d/f/uVJApfFjHN/9Lm456HH7s.png" alt="" />
            </Link>
        </div >
    );
}

export default First;