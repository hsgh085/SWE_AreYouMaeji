import React from 'react';
import './Errandongoingproduct.css'
import { useStateValue } from "./../StateProvider";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';




function Errandongoingproduct({ title, price, errand_price }) {
    const [{ product }, dispatch] = useStateValue();

    const navigate = useNavigate();

    const navigateToPurchase = () => {

        navigate("/main");
        window.location.reload();
    };

    return (
        <div className='Errandmake'>
            <form>

                <div class="container">
                    <h3 class="main">상품명</h3>
                    <div class="main">{title}</div>
                </div>
                <div class="container">
                    <h3 class="main">상품 비용</h3>
                    <div class="main">{price} 원</div>
                </div>
                <div class="container">
                    <h3 class="main">심부름 비용</h3>
                    <div class="main">{errand_price} 원</div>
                </div>
                <div class="container">
                    <h3 class="main">심부름 내용</h3>
                    <div class="main"> 자바스크립트와 웹 개발에 대한 지식을 전부 학습하고 난 다음 React 학습을 시작 하는 건 아주 이상적인 학습법입니다. 하지만 불행하게도 우리는 이상적인 세상에 살고 있지 않습니다. 자바스크립트를 모두 소화하고 난 다음 React를 시작하겠다고 마음먹으면 오히려 내상을 입을 수 있습니다. </div>
                </div>
                <div class="container">
                    <h3 class="main">고객</h3>
                    <div class="person_phonenumber"><i class="main"></i>  전화번호 ( 안심번호 ) : +8210-8765-4321</div>
                </div>
                <input type="button" class="button" value="취소" onClick={navigateToPurchase}></input>

                <input type="button" class="button" value="접수" onClick={navigateToPurchase}></input>

            </form >
        </div >
    );
}

export default Errandongoingproduct;