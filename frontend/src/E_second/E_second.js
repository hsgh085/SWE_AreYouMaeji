import React from 'react';
import './E_second.css'
import E_product from "../components/E_product/E_product";
import { Link } from 'react-router-dom';
import Header_do from '../components/Header/Header_do';


function E_second() {
    return (
        <div>
            <Header_do/>
            <div className="profile">
                <p className="name">김연세</p>
                <ul>
                    <li>
                        <p>전화번호</p>
                        <p>010-1234-5678</p>
                    </li>
                    <li>
                        <p>평점</p>

                    </li>
                </ul>
            </div>
            <div className="profile">
                <p className="name">김연세</p>
                <ul>
                    <li>
                        <p>전화번호</p>
                        <p>010-1234-5678</p>
                    </li>
                    <li>
                        <p>평점</p>

                    </li>
                </ul>
            </div>
            <div>
                <E_product title="편의점" price="4000" errand_price="4000" />
            </div>
            <div className="button_row">
                <Link to = "/home">
                    <div className="button">취소</div>
                </Link>
                <Link to = "/E_end">
                    <div className="button">완료</div>
                </Link>
            </div>
            <div className="footer">&copy;{new Date().getFullYear()} Errand App</div>
        </div>

    );


}

export default E_second;
