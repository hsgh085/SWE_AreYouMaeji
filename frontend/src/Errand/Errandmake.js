import React from 'react';
import './Errandmake.css'
import { useState } from 'react';

function Errandmake() {
    const [category, setCategory] = useState([
        { id: "연플", title: "cu" },
        { id: "학교", title: "창조관" }
    ]);
    const lis = []

    for (let i = 0; i < category.length; i++) {
        let t = category[i];
        lis.push(

            <option value={t.id}>{t.title}</option>

        )

    }
    return (
        <div className='Errandmake'>
            <form>

                <div class="container">
                    <h3 class="main">상품명</h3>
                    <div class="col-3">
                        <input class="effect-1" type="text" placeholder="  Placeholder Text" name="productname" />
                        <span class="focus-border"></span>
                    </div>
                </div>
                <div class="container">
                    <h3 class="main">카테고리</h3>
                    <select class="selectbox" name="category">
                        {lis}
                    </select>
                </div>
                <div class="container">
                    <h3 class="main">상품 비용</h3>
                    <div class="col-3">
                        <input class="effect-1" type="text" placeholder="  Placeholder Text" name="price" />
                        <span class="focus-border"></span>
                    </div>
                </div>
                <div class="container">
                    <h3 class="main">심부름 비용</h3>
                    <div class="col-3">
                        <input class="effect-1" type="text" placeholder="  Placeholder Text" name="errand_price" />
                        <span class="focus-border"></span>
                    </div>
                </div>
                <div class="container">
                    <h3 class="main">심부름 내용</h3>
                    <div >
                        <textarea class="textarea" placeholder="심부름 내용을 입력해주세요" name="errandtext"></textarea>
                    </div>
                </div>
                <p><input type="submit" class="button" value="등록"></input></p>




            </form>
        </div >

    );
}

export default Errandmake;
