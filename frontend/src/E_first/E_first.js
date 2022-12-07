import React, {useEffect, useState} from 'react';
import './E_first.css'
import E_product from "../components/E_product/E_product"
import Header_do from '../components/Header/Header_do';
import {Link, useParams} from 'react-router-dom';


function E_first() {
    const [isOk, setBool] = useState(false);
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

    function updateOk() {
        let model = {
            method: "PUT",
            headers: {
                Authorization: localStorage.getItem("email"),
            },
        };
        fetch(`/api/posts/` + id + '/ok', model)
            .then(() => setBool(true));
    }

    return (
        <div>
            <Header_do/>
            <div className="profile_">
                <p className="name_">{post.client_nick}</p>
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
            <div className="profile_">
                <p className="name_">{post.helper_nick}</p>
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
                <Link to="/Home">
                    <div className="button">거절</div>
                </Link>
                {
                    isOk
                        ? (
                            <div className="button">대기중</div>
                        )
                        : (
                            <Link to={"/E_Post/" + id} onClick={updateOk}>
                                <div className="button">진행</div>
                            </Link>
                        )
                }
            </div>
            <div className="footer">&copy;{new Date().getFullYear()} Errand App</div>
        </div>

    );


}

export default E_first;
