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
    fetch(`http://ec2-3-38-226-253.ap-northeast-2.compute.amazonaws.com/api/posts`, model)
        .then((response) => response.json());
}

function handleDeletePost(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    const id = value.id;
    let model = {
        method: 'DELETE'
    };
    fetch(`/api/posts/` + id, model)
        .then((response) => response.json());
}

function Write() {

    return (
        <div className='Write'>
            <form onSubmit={handleSaveSubmit} method="post" id="formTable">
                <div>
                    <input type='text' id='title' name='title' placeholder='게시글dSSd' />
                </div>
                <div>
                    <input id='contents' name='contents' placeholder='게시글 내용' />
                </div>
                <div id="submit_btn">
                    <button type="submit">저장</button>
                    <input type="reset" />
                </div>
            </form>

            <form onSubmit={handleDeletePost} method="post" id="formTable">
                <div>
                    <input type='text' id='id' name='id' placeholder='ID' />
                </div>
                <button type="submit">지우기1</button>
            </form>
        </div>
    );
}

export default Write;