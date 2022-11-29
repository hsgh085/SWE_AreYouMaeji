import React, {useEffect, useState} from "react";
import {FaStar} from "react-icons/fa";
import styled from "styled-components";

const ARRAY = [0, 1, 2, 3, 4];

export default function Rate() {
    let id = 1;
    const [clicked, setClicked] = useState([false, false, false, false, false]);

    const [star, setStar] = useState([]);

    useEffect(() => {
        let model = {
            method: 'GET',
            headers: {
                Authorization: localStorage.getItem("email")
            }
        };
        fetch(`/api/member/stars`, model)
            .then((res) => res.json())
            .then((res) => setStar(res))
            .then(() => {
                let clickStates = [...clicked];
                for (let i = 0; i < 5; i++) {
                    clickStates[i] = i < star ? true : false;
                }
                setClicked(clickStates);
            });
    }, []);

    const handleStarClick = (index) => {
        let clickStates = [...clicked];
        for (let i = 0; i < 5; i++) {
            clickStates[i] = i < index ? true : false;
        }
        setClicked(clickStates);
    };

    const handleStarSubmit = (event) => {
        event.preventDefault();
        const data = new FormData();
        let cnt = 0;
        for (let i = 0; i < 5; i++)
            if (clicked[i]) cnt++;
        data.append("star", cnt.toString());
        const value = Object.fromEntries(data.entries());
        let model = {
            method: 'PUT',
            body: JSON.stringify(value),
            headers: {
                Authorization: localStorage.getItem("email"),
                'Content-Type': 'application/json'
            }
        };
        fetch(`/api/posts/` + id + '/end', model)
            .then((res) => res.json())
            .then((res) => {
                window.location.replace("/main");
            })
    };

    return (
        <>
            <button onClick={handleStarSubmit}>test</button>
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
        </>
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
