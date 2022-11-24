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

function handleTest(event) {
    event.preventDefault();
    fetch(`/api/member/findAll`)
      .then((response) => response.json())
      .then((res) => console.log(res));
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
            <button onClick={handleTest}>testForAuth</button>
        </div>
    );
}

export default Write;