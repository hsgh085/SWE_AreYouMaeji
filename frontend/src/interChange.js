/*각종 페이지 주소 */
import './App.css';
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import E_first from "./E_first/E_first";
import E_second from "./E_second/E_second";

function InterChange() {
    const [state, setState] = useState();
    let { id } = useParams();
    useEffect(() => {
        if (id) {
            let model = {
                method: "GET",
                headers: {
                    Authorization: localStorage.getItem("email"),
                    'Content-Type': 'application/json',
                },
            };
            fetch(`/api/posts/` + id, model)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    setState(res.state)
                });

        }
    }, []);
    return (
        <>
            {
                state == 0
                ? <E_first/>
                : <E_second/>
            }
        </>
    )
}

export default InterChange;