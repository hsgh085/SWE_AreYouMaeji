import React, { useEffect, useState } from "react";
import "./E_start.css";
import E_product from "../components/E_product/E_product";
import { useParams } from "react-router-dom";
import Header_do from "../components/Header/Header_do";
import { Link } from "react-router-dom";

function E_start() {
  const [post, setPost] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    let model = {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("email"),
      },
    };
    //console.log(id);
    fetch(`/api/posts/` + id, model)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);

  return (
    <div>
      <Header_do />
      <header className="form-errand">
        {
          <E_product
          // postId={post.postId}
          // client_phone={post.client_phone}
          // client_nick={post.client_nick}
          // helper_phone={post.helper_phone}
          // helper_nick={post.helper_nick}
          // contents={post.contents}
          // destination={post.destination}
          // category={post.category}
          // product={post.product}
          // fee={post.fee}
          // cost={post.cost}
          />
        }
      </header>
      <div className="button_row">
        <Link to = "/home">
          <div className="button">취소</div>
        </Link>
        <Link to = "/E_first">
          <div className="button">수락</div>
        </Link>
      </div>
      <div className="footer">&copy;{new Date().getFullYear()} Errand App</div>
    </div>
  );
}

export default E_start;
