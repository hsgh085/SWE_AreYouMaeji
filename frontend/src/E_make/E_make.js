import React, {useEffect, useRef} from 'react';
import './E_make.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function E_make() {
    const [category, setCategory] = useState([]);
    const form = useRef();
    let data = new FormData();
    useEffect(() => {
        let model = {
            method: 'GET',
            headers: {
                Authorization: localStorage.getItem("email")
            }
        };
        fetch(`/api/cate`, model)
          .then((res) => res.json())
          .then((res) => setCategory(res));
    }, []);

    function handleSavePost(event) {
        event.preventDefault();
        data.append("client_email", localStorage.getItem("email"));
        const value = Object.fromEntries(data.entries());
        let model = {
            method: 'POST',
            body: JSON.stringify(value),
            headers: {
                Authorization: localStorage.getItem("email"),
                'Content-Type': 'application/json'
            }
        };
        fetch(`/api/posts`, model)
          .then((res) => res.json())
          .then((res) => {
              window.alert("심부름이 등록되었습니다.");
              window.location.replace("/Home")
          })
    };

    function testFunc() {
        data = new FormData(form.current);
    }

    return (
        <div>
            <div className="Errandmake_">
                <form onSubmit={handleSavePost} onChange={testFunc} ref={form}>
                    <div className="container_">
                        <h3 className="main_">상품명</h3>
                        <div className="col-4_">
                            <input className="effect-1" type="text" placeholder="  상품명을 입력하세요." name="product" />
                            <span className="focus-border"></span>
                        </div>
                    </div>
                    <div className="container_">
                        <h3 className="main_">카테고리</h3>
                        <select className="selectbox_" name="category">
                            {
                            category.map(
                                t => {
                                    return (
                                    <option value={t.id}>{t.context}</option>
                                    )
                                }
                            )
                            }
                        </select>
                    </div>
                    <div className="container_">
                        <h3 className="main_">상품 비용</h3>
                        <div className="col-3_">
                            <input className="effect-1" type="text" placeholder="  상품 비용을 입력하세요." name="cost" />
                            <span className="focus-border"></span>
                        </div>
                    </div>
                    <div className="container_">
                        <h3 className="main_">심부름 비용</h3>
                        <div className="col-3_">
                            <input className="effect-1" type="text" placeholder="  심부름 비용을 입력하세요." name="fee" />
                            <span className="focus-border"></span>
                        </div>
                    </div>
                    <div className="container_">
                        <h3 className="main_">심부름 내용</h3>
                        <div >
                            <textarea className="textarea_" placeholder="심부름 내용을 입력해주세요." name="contents"></textarea>
                        </div>
                    </div>
                    <div className="container_">
                        <h3 className="main_">거래 장소</h3>
                        <div>
                            <textarea className="textarea_" placeholder="거래할 장소를 입력해주세요." name="destination"></textarea>
                        </div>
                    </div>
                </form>
                <div className='button_row'>
                    <input type="submit" className="button" value="등록" onClick={handleSavePost}></input>
                </div>
            </div >
            <div className="footer">&copy;{new Date().getFullYear()} Errand App</div>
        </div>
    );
}

export default E_make;
