import React from "react";
import "../First/First.css";
import { Link } from "react-router-dom";

function First() {
  return (
    <div>
      <img class="first_sign-in" src="/assets/logo.png" alt="" />
      <div
        onClick={() =>
          window.location.replace(
            "https://kauth.kakao.com/oauth/authorize?client_id=e1a79b41fcfcd1cdc53b674ddca7fe1f&redirect_uri=http://localhost/oauth/callback/kakao&response_type=code"
          )
        }
      >
        <img
          className="first_kakao_logo"
          src="https://i.esdrop.com/d/f/uVJApfFjHN/9Lm456HH7s.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default First;
