/*각종 페이지 주소 */
import './App.css';
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import E_first from "./E_first/E_first";
import E_second from "./E_second/E_second";
import E_start from "./E_start/E_start";
import E_end from "./E_end/E_end";

function InterChange() {
    const [state, setState] = useState();
    let {id} = useParams();
    useEffect(() => {
        if (id) {
            let model = {
                method: "GET", headers: {
                    Authorization: localStorage.getItem("email"), 'Content-Type': 'application/json',
                },
            };
            fetch(`/api/posts/` + id, model)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    setState(res.state);
                });

        }
    }, []);
    return (() => {
        switch (state) {
            case 0:
                return <E_start/>;
            case 1:
            case 2:
                return <E_first/>;
            case 3:
            case 4:
                return <E_second/>;
            case 5:
            case 6:
                return <E_end/>;
            case 7:
                window.alert("이미 완료된 거래입니다!");
                window.location.replace("/Home");
                break;
            case 8:
                window.alert("이미 취소된 거래입니다!");
                window.location.replace("/Home");
                break;
        }
    })
}

export default InterChange;