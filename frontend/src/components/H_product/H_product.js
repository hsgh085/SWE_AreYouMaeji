import React, { useEffect, useState } from "react";
import "../H_product/H_product.css";
import {useNavigate} from "react-router-dom";

const H_product = (props) => {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (props.query == null){
      let model = {
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem("email")
        }
      };
    fetch(`/api/posts`, model)
      .then((res) => res.json())
      .then((res) => setPost(res));
    }
    else {
      let model = {
        method: 'GET',
        headers: {
          key: "word",
          Authorization: localStorage.getItem("email")
        }
      };
      fetch(`/api/posts/search/` + props.query, model)
        .then((res) => res.json())
        .then((res) => setPost(res));
    }
  }, []);

  return (
    <div>
      {
        post.map(
          p => {
            return (
              <div className="product" key={p.postId} onClick={() => {
                navigate("/E_start/" + p.postId);
              }}>
                <div className="product_info">
                  <p className='product_title'>{p.product}</p>
                  <div className="product_price">
                    <div className="price_box">상품비용</div>
                    <div className="price"> &nbsp;{p.cost}원</div>
                  </div>
                  <div className="product_price">
                    <div className="price_box">심부름 비용</div>
                    <div className="price">&nbsp;{p.fee}원</div>
                  </div>
                  <div className="product_price">
                    <div className="price_box">배달장소</div>
                    <p> className="location">{p.destination}</p>
                  </div>
                </div>
              </div>
            )
          }
        )
      }
    </div>
  );
};

export default H_product;
