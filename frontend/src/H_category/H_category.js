import React, { useEffect, useState } from "react";
import Categorylist from "../components/Categorylist/Categorylist";

function H_category() {
  const [Category, setCategory] = useState([]);
  useEffect(() => {
    let model = {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("email"),
      },
    };
    fetch(`/api/cate`, model)
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);

  return (
    // <div>
    //     {
    //         Category.map(
    //           t => {
    //               return (
    //                 <Categorylist Key={t.id} location={t.context} />
    //               )
    //           }
    //         )
    //     }
    // </div>
    <div>
      <Categorylist Key="1" location="뚜레주르" />
      <Categorylist Key="2" location="봉마르쉐" />
      <Categorylist Key="3" location="프린트실" />
      <Categorylist Key="4" location="cu편의점" />
      <Categorylist Key="5" location="호아토스트" />
    </div>
  );
}

export default H_category;
