import React, {useEffect, useState} from "react";
import styles from "./M_list.module.css";
import Star from "./Star";
import Header_nothing from "../components/Header/Header_nothing"

export default function ErrandList() {
    const [errandLists, setErrandLists] = useState([]);
    useEffect(() => {
        let model = {
            method: "GET",
            headers: {
                Authorization: localStorage.getItem("email"),
                'Content-Type': 'application/json',
            },
        };
        fetch("/api/posts/my", model)
            .then((res) => res.json())
            .then((data) => {
                setErrandLists(data);
            });
    }, []);

    return (
        <>
            <Header_nothing/>
            <p className={styles.title}>심부름 내역</p>
            <ul>
                {errandLists.map((list) => (
                    <li className={styles.list} key={list.postId}>
                        <p className={styles.productName}>{list.product}</p>
                        <div className={styles.content}>
                            <div className={styles.text}>
                                <p className={styles.role}>상품 비용</p>
                                <p>{list.cost}원</p>
                            </div>
                            <div className={styles.text}>
                                <p className={styles.role}>심부름 비용</p>
                                <p>{list.fee}원</p>
                            </div>
                            <div className={styles.text}>
                                <p className={styles.role}>목적지</p>
                                <p>{list.destination}</p>
                            </div>
                        </div>
                        <Star postId={list.postId} star={list.star}/>
                    </li>
                ))}
            </ul>
            <div className={styles.footer}>&copy;{new Date().getFullYear()} Errand App</div>
        </>
    );
}
