import React from "react";

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


function Write() {

    return (
        <div className='Write'>
            <form onSubmit={handleSaveSubmit} method="post" id="formTable">
                <div>
                    <input type='text' id='title' name='title' placeholder='제목'/>
                </div>
                <div>
                    <input id='contents' name='contents' placeholder='게시글 내용'/>
                </div>
                <div id="submit_btn">
                    <button type="submit">등록하기</button>
                    <input type="reset"/>
                </div>
            </form>
           <a href="https://kauth.kakao.com/oauth/authorize?client_id=e1a79b41fcfcd1cdc53b674ddca7fe1f&redirect_uri=http://localhost/oauth/callback/kakao&response_type=code">test</a>
        </div>
    );
}

export default Write;