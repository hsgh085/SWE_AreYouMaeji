import React, {useEffect, useState} from 'react';
import './E_second.css'
import E_product from "../components/E_product/E_product";
import {Link, useParams} from 'react-router-dom';
import Header_do from '../components/Header/Header_do';


function E_second() {
    let isEnd = false;
    const [post, setPost] = useState([]);
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
    }, []);

    function handleEnd(){
        let model = {
            method: "PUT",
            headers: {
                Authorization: localStorage.getItem("email"),
            },
        };
        fetch(`/api/posts/` + id + '/end', model)
            .then((res) => res.json());
        isEnd = true
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
                        {/*todo*/}
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
                        {/*todo*/}
                    </li>
                </ul>
            </div>
            <div>
                <E_product/>
            </div>
            <div className="button_row">
                <Link to="/home">
                    <div className="button">취소</div>
                </Link>
                {
                    isEnd
                        ? (
                            <div className="button">대기중</div>
                        )
                        : (
                            <Link to={"/E_end/" + id} onClick={handleEnd}>
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
