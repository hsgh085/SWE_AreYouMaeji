import React, {useEffect, useState} from 'react';
import './E_first.css'
import E_product from "../components/E_product/E_product"
import Header_do from '../components/Header/Header_do';
import {Link, useParams} from 'react-router-dom';


function E_first() {
    let isOk = false;
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

    function updateOk() {
        let model = {
            method: "PUT",
            headers: {
                Authorization: localStorage.getItem("email"),
            },
        };
        fetch(`/api/posts/` + id + '/ok', model)
            .then((res) => res.json());
        isOk = true
    }

    return (<div>
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
