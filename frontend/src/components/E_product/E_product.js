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
        <h3 class="main">상품명</h3>
        <div class="main">{post.product}</div>
      </div>
      <div className="container">
        <h3 className="main">상품 판매처</h3>
        <div className="main">{post.category}</div>
      </div>
      <div class="container">
        <h3 class="main">상품 비용</h3>
        <div class="main">{post.cost} 원</div>
      </div>
      <div class="container">
        <h3 class="main">심부름 비용</h3>
        <div class="main">{post.fee} 원</div>
      </div>
      <div class="container">
        <h3 class="main">심부름 내용</h3>
        <div class="main">{post.contents}</div>
      </div>
      <div class="container">
        <h3 class="main">거래 장소</h3>
        <div class="main">{post.destination}</div>
      </div>
      <div class="container">
        <h3 class="main">고객 : {post.client_nick}</h3>
        <div class="person_phonenumber">
          <i class="main"></i> 전화번호 ( 안심번호 ) : {post.client_phone}
        </div>
      </div>
    </div>
  );
}

export default E_product;
