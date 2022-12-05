import React, {useEffect, useState} from 'react';
import './Errandongoing.css'
import Errandongoingproduct from "./Errandongoingproduct";
import {useParams} from "react-router-dom";

function Errandongoing() {

  const [post, setPost] = useState([]);
  let {id} = useParams();

  useEffect(() => {
    let model = {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem("email")
      }
    };
    console.log(id)
    fetch(`/api/posts/` + id, model)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);

  return (
    <header class="form-errand">
      {
          <Errandongoingproduct
            postId = {post.postId}
            client_phone = {post.client_phone}
            client_nick = {post.client_nick}
            helper_phone = {post.helper_phone}
            helper_nick = {post.helper_nick}
            contents = {post.contents}
            destination = {post.destination}
            category = {post.category}
            product = {post.product}
            fee = {post.fee}
            cost = {post.cost}
          />
      }
    </header>

  );

}

export default Errandongoing;
