import React from 'react';
import './Errandongoingproduct.css'

function Errandongoingproduct(
  {postId, client_phone, client_nick, category, fee, cost, destination, contents, product}
) {


  function handlePostMatched(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    let model = {
      method: 'PUT',
      headers: {
        Authorization: localStorage.getItem("email"),
        'Content-Type': 'application/json'
      }
    };
    fetch(`/api/posts/` + data.get("id")+ `/matched`, model)
      .then((res) => res.json())
      .then((res) => {
          window.alert("!!!!");//????????????????
          window.location.replace("/main");//????????????????
      })
  }

  return (
    <div className='Errandmake'>
      <form onSubmit={handlePostMatched}>
        <input type="text" name="id" value={postId} hidden/>
        <div class="container">
          <h3 class="main">상품명</h3>
          <div class="main">{product}</div>
        </div>
        <div className="container">
          <h3 className="main">상품 판매처</h3>
          <div className="main">{category}</div>
        </div>
        <div class="container">
          <h3 class="main">상품 비용</h3>
          <div class="main">{cost} 원</div>
        </div>
        <div class="container">
          <h3 class="main">심부름 비용</h3>
          <div class="main">{fee} 원</div>
        </div>
        <div class="container">
          <h3 class="main">심부름 내용</h3>
          <div class="main">{contents}</div>
        </div>
        <div class="container">
          <h3 class="main">거래 장소</h3>
          <div class="main">{destination}</div>
        </div>
        <div class="container">
          <h3 class="main">고객 : {client_nick}</h3>
          <div class="person_phonenumber"><i class="main"></i> 전화번호 ( 안심번호 ) : {client_phone}</div>
        </div>
        <input type="button" class="button" value="취소" onClick={() => window.location.replace("/main")}></input>
        <input type="submit" class="button" value="접수"></input>
      </form>
    </div>
  );
}

export default Errandongoingproduct;