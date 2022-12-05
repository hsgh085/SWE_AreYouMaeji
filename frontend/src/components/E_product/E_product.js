import React, {useEffect, useState} from "react";
import "./E_product.css";
import {useParams} from "react-router-dom";

function E_product() {
  const [post, setPost] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    let model = {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("email"),
      },
    };
    fetch(`/api/posts/` + id, model)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);
  return (
    <div className="Errandmake">
      <input type="text" name="id" value={post.postId} hidden/>
      <div class="container">
        <span class="main">상품명 : </span>
        <span class="main">{post.product}</span>
      </div>
      <div className="container">
        <span className="main">상품 판매처 : </span>
        <span className="main">{post.category}</span>
      </div>
      <div class="container">
        <span class="main">상품 비용 : </span>
        <span class="main">{post.cost} 원</span>
      </div>
      <div class="container">
        <span class="main">심부름 비용 : </span>
        <span class="main">{post.fee} 원</span>
      </div>
      <div class="container">
        <span class="main">심부름 내용 : </span>
        <span class="main">{post.contents}</span>
      </div>
      <div class="container">
        <span class="main">거래 장소 : </span>
        <span class="main">{post.destination}</span>
      </div>
      <div class="container">
        <span class="main">고객 : {post.client_nick}</span>
      </div> 
      <div class="container">
        <span class="main"> 전화번호 ( 안심번호 ) : {post.client_phone}</span>
      </div>
    </div>
  );
}

export default E_product;
