import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const ARRAY = [0, 1, 2, 3, 4];

export default function Rate() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  return (
    <Stars>
      {ARRAY.map((el, idx) => {
        return (
          <FaStar
            key={idx}
            size="30"
            onClick={() => handleStarClick(el)}
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
