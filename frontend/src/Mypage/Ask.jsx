import React from 'react';


export default function Ask() {
    return (
        <div >
            ask 페이지
        </div>
    );
}


/*<>
    <link rel="stylesheet" href="../../scss/screens/mypage/dist/ask.css" />
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Errand App</title>
    <style
        dangerouslySetInnerHTML={{
            __html:
                "a { text-decoration: none; color: white; }a:visited { text-decoration: none; }a:hover { text-decoration: none; }a:focus { text-decoration: none; }a:hover, a:active { text-decoration: none; }\n        "
        }}
    />
    <br />
    <br />
    <div className="status-bar">
        <div className="status-bar__column">
            <span>
                <a href="mypage.html">
                    <i className="fa-solid fa-arrow-left" />
                </a>
            </span>
        </div>
    </div>
    <header className="ask_form">
        <h2>* 문의하기</h2>
        <br />
        <h5>
            {" "}
            &nbsp;문의사항이 있으실 경우 문의양식을 작성 하시거나, 하단의 전화번호로
            연락 부탁드립니다.
        </h5>
        <div className="settings__setting-column" />
    </header>
    <form className="contact_form">
        <div className="row">
            <label className="required" htmlFor="name">
                User Name:
            </label>
            <br />
            <input
                id="name"
                className="input"
                name="name"
                type="text"
                defaultValue=""
                size={30}
            />
        </div>
        <div className="row">
            <label className="required" htmlFor="email">
                Email:
            </label>
            <br />
            <input
                id="email"
                className="input"
                name="email"
                type="text"
                defaultValue=""
                size={30}
            />
        </div>
        <div className="row">
            <label className="required" htmlFor="message">
                Your message:
            </label>
            <br />
            <textarea
                id="message"
                className="input"
                name="message"
                rows={7}
                cols={30}
                defaultValue={""}
            />
            <br />
        </div>
        <input id="submit_button" type="submit" defaultValue="Send email" />
    </form>
    <footer className="ask">
        <i className="fa-solid fa-circle-question" />
        <span>문의하기 : </span>
        <span className="settings__setting-column">010-1234-5678</span>
    </footer>
    <div id="screensize">
        <span>Your screen is too big :( </span>
    </div>
</>*/