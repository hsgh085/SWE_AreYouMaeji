import React from "react";
import Home from "./Home";

function handleSaveSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    let model = {
        method: 'POST',
        body: JSON.stringify(value),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(`/api/posts`, model)
        .then((response) => response.json())
        .then(() => window.location.reload());
}

function handleTest(event) {
    event.preventDefault();
    let model = {
        method: 'GET',
        headers: {
            Authorization : localStorage.getItem("email")
        }
    };
    fetch(`/api/member/findAll`, model)
      .then((response) => response.json())
      .then((res) => console.log(res));
}


function Write() {

    return (
        <div className='Write'>
            <button onClick={handleTest}>testForAuth</button>
            <a href="https://kauth.kakao.com/oauth/authorize?client_id=e1a79b41fcfcd1cdc53b674ddca7fe1f&redirect_uri=http://localhost/oauth/callback/kakao&response_type=code">test</a>
        </div>
    );
}

export default Write;