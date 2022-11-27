import React from 'react';
import './Product.css'
import { useStateValue } from "./../StateProvider";
import { Link } from "react-router-dom";


function Product({ title, price, errand_price }) {
    const [{ product }, dispatch] = useStateValue();


    const errandProduct = () => {
        dispatch({
            type: "ERRAND_PRODUCT",
            item: {
                title: title,
                price: price,
                errand_price: errand_price,
            },
        });

    };



    return (
        <div className="product" onClick={errandProduct} >
            <div className="product_info">
                <p className='product_title'>{title}</p>
                <div className="product_price">
                    <div className="price_box">상품비용</div>
                    <div className="price"> &nbsp;  {price}원</div>
                </div>
                <div className="product_price">
                    <div className="price_box">심부름 비용</div>
                    <div className="price">&nbsp;{errand_price}원</div>
                </div>
                <div className="product_price">
                    <div className="price_box">배달장소</div>
                    <p className="location">창조관 474호</p>
                </div>
            </div>


        </div>
    );
}

export default Product; 