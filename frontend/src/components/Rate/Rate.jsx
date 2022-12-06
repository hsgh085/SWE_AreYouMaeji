import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const ARRAY = [0, 1, 2, 3, 4];

export default function Rate({ setRate }) {
  const [clicked, setClicked] = useState([true, false, false, false, false]);
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
    setRate(clickStates.filter(Boolean).length);
  };

  return (
    <Stars>
      {setRate(clicked.filter(Boolean).length)}
      {ARRAY.map((el, idx) => {
        return (
          <FaStar
            key={idx}
            size="70"
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
