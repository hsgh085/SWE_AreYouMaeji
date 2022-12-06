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
        getState()
        const loop = setInterval(() => {
            const curr = state
            getState()
            if (state == 8) {
                window.location.replace("/Home")
            }
            else if (state == 9) {
                window.location.replace("/Home")
            }
            if (curr != state){
                window.location.reload()
            }
            if (state >= 6){
                clearInterval(Number(localStorage.getItem("loop")))
            }
        }, 3000)
        localStorage.setItem("loop", loop.toString());
    }, []);

    function getState(){
        if (id) {
            let model = {
                method: "GET",
                headers: {
                    Authorization: localStorage.getItem("email"),
                    'Content-Type': 'application/json',
                },
            };
            fetch(`/api/posts/state/` + id, model)
                .then((res) => res.json())
                .then((res) => {
                    setState(res.state);
                })
                .catch(()=>{
                    clearInterval(Number(localStorage.getItem("loop")))
            });

        }
    }

    function switchPost() {
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
                return;
            case 8:
                window.alert("이미 취소된 거래입니다!");
                window.location.replace("/Home");
                return;
        }
    }

    return (
        <>
            {
                switchPost()
            }
        </>
    )
}

export default InterChange;