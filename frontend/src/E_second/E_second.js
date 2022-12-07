import React, {useEffect, useState} from 'react';
import './E_second.css'
import E_product from "../components/E_product/E_product";
import {Link, useParams} from 'react-router-dom';
import Header_do from '../components/Header/Header_do';
import {BsStarFill} from "react-icons/bs";

function E_second() {
    const [isEnd, setBool] = useState(false);
    const [post, setPost] = useState([]);
    const [rate, setRate] = useState(1);
    let {id} = useParams();

    useEffect(() => {
        let model = {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("email"),
                'Content-Type': 'application/json',
            },
        };
        fetch(`/api/posts/` + id, model)
            .then((res) => res.json())
            .then((res) => setPost(res));
        let model2 = {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("email"),
                'Content-Type': 'application/json',
            },
        };
        fetch("/api/member/stars", model2)
            .then((res) => res.json())
            .then((data) => {
                if (data == 0) data = 1;
                setRate(data);
                console.log(data);
                console.log("별점 데이터 받아옴");
            });
    }, []);

    function handleEnd() {
        let model = {
            method: "PUT",
            headers: {
                Authorization: localStorage.getItem("email"),
            },
        };
        fetch(`/api/posts/` + id + '/end', model)
            .then(() => setBool(true));

    }

    function handleCancel() {
        let model = {
            method: "PUT",
            headers: {
                Authorization: localStorage.getItem("email"),
            },
        };
        fetch(`/api/posts/` + id + '/cancelled', model);
    }

    return (
        <div>
            <Header_do/>
            <div className="profile">
                <p className="name">{post.client_nick}</p>
                <ul>
                    <li>
                        <p>전화번호</p>
                        <p>{post.client_phone}</p>
                    </li>
                    <li>
                        <p>평점</p>
                        <div className="star">
                            {Array(rate)
                                .fill(0)
                                .map((el, i) => (
                                    <BsStarFill key={i} size="25" color="#EFC45C"/>
                                ))}
                            {Array(5 - rate)
                                .fill(0)
                                .map((el, i) => (
                                    <BsStarFill key={i} size="25" color="#0A1931"/>
                                ))}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="profile">
                <p className="name">{post.helper_nick}</p>
                <ul>
                    <li>
                        <p>전화번호</p>
                        <p>{post.helper_phone}</p>
                    </li>
                    <li>
                        <p>평점</p>
                        <div className="star">
                            {Array(rate)
                                .fill(0)
                                .map((el, i) => (
                                    <BsStarFill key={i} size="25" color="#EFC45C"/>
                                ))}
                            {Array(5 - rate)
                                .fill(0)
                                .map((el, i) => (
                                    <BsStarFill key={i} size="25" color="#0A1931"/>
                                ))}
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <E_product/>
            </div>
            <div className="button_row">
                <Link to="/Home" onClick={handleCancel}>
                    <div className="button">취소</div>
                </Link>
                {
                    isEnd
                        ? (
                            <div className="button">대기중</div>
                        )
                        : (
                            <Link to={"/E_Post/" + id} onClick={handleEnd}>
                                <div className="button">완료</div>
                            </Link>
                        )
                }
            </div>
            <div className="footer">&copy;{new Date().getFullYear()} Errand App</div>
        </div>

    );


}

export default E_second;
