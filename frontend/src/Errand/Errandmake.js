import React, {useEffect} from 'react';
import './Errandmake.css'
import { useState } from 'react';

function Errandmake() {
    const [category, setCategory] = useState([]);
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
        const data = new FormData(event.target);
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
              window.location.replace("/Errandongoing/" + res)
          })
    };


    return (
        <div className='Errandmake'>
            <form onSubmit={handleSavePost}>
                <div class="container">
                    <h3 class="main">상품명</h3>
                    <div class="col-3">
                        <input class="effect-1" type="text" placeholder="  Placeholder Text" name="product" />
                        <span class="focus-border"></span>
                    </div>
                </div>
                <div class="container">
                    <h3 class="main">카테고리</h3>
                    <select class="selectbox" name="category">
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
                <div class="container">
                    <h3 class="main">상품 비용</h3>
                    <div class="col-3">
                        <input class="effect-1" type="text" placeholder="  Placeholder Text" name="cost" />
                        <span class="focus-border"></span>
                    </div>
                </div>
                <div class="container">
                    <h3 class="main">심부름 비용</h3>
                    <div class="col-3">
                        <input class="effect-1" type="text" placeholder="  Placeholder Text" name="fee" />
                        <span class="focus-border"></span>
                    </div>
                </div>
                <div class="container">
                    <h3 class="main">심부름 내용</h3>
                    <div >
                        <textarea class="textarea" placeholder="심부름 내용을 입력해주세요" name="contents"></textarea>
                    </div>
                </div>
                <div className="container">
                    <h3 className="main">거래 장소</h3>
                    <div>
                        <textarea className="textarea" placeholder="거래할 장소를 입력해주세요" name="destination"></textarea>
                    </div>
                </div>
                <p><input type="submit" class="button" value="등록"></input></p>
            </form>
        </div >

    );
}

export default Errandmake;
