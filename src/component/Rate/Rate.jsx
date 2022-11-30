import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const ARRAY = [0, 1, 2, 3, 4];

export default function Rate({ setRate }) {
  const [clicked, setClicked] = useState([true, true, true, true, true]);
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
    setRate(clickStates.filter(Boolean).length);
  };

  // useEffect(() => {
  //   sendRate();
  //   console.log(clicked);
  // }, [clicked]);

  // const sendRate = () => {
  //   let score = clicked.filter(Boolean).length;
  //   console.log(score);
  //   fetch("", {
  //     method: "POST",
  //     Headers: {},
  //     body: JSON.stringify({
  //       star: score,
  //     }),
  //   });
  // };

  return (
    <Stars>
      {ARRAY.map((el, idx) => {
        return (
          <FaStar
            key={idx}
            size="50"
            onClick={() => {
              handleStarClick(el);
            }}
            className={clicked[el] && "yellowStar"}
          />
        );
      })}
    </Stars>
  );
}

const Stars = styled.div`
  display: flex;

  & svg {
    color: #182b58;
    cursor: pointer;
  }

  :hover svg {
    color: #efc45c;
  }

  & svg:hover ~ svg {
    color: #182b58;
  }

  .yellowStar {
    color: #efc45c;
  }
`;
