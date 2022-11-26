import React from 'react';
import Header from '../component/Header/Header';
import List from '../component/List/List';
import { Link } from "react-router-dom";

function MyPage() {
    return (
        <div>
            <Header />
            <Link to="/ProfileSetting" >
                <List>
                    <p>프로필 수정</p>
                </List>
            </Link>
            <Link to="/ErrandDist" >
                <List>
                    <p>심부름내역</p>
                </List>
            </Link>
            <Link to="/CancelledErrand" >
                <List>
                    <p>취소된 심부름</p>
                </List>
            </Link>
            <Link to="/TermsOfService" >
                <List>
                    <p>공지사항</p>
                </List>
            </Link>
            <Link to="/Ask" >
                <List>
                    <p>문의하기</p>
                </List>
            </Link>
        </div>
    );
}

export default MyPage;