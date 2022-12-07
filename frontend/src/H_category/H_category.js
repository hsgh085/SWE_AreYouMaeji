import React, {useEffect, useState} from "react";
import Categorylist from "../components/Categorylist/Categorylist";
import Header_nothing from "../components/Header/Header_nothing"
import "./H_category.css";


function H_category(){
    const [Category, setCategory] = useState([]);
    useEffect(() => {
        let model = {
            method: 'GET',
            headers: {
                Authorization: localStorage.getItem("email")
            }
        };
        fetch(`/api/cate`, model)
          .then((res) => res.json())
          .then((res) => setCategory(res));
    }, []);

    return (
        <div>
            <Header_nothing />
            <p className="Ct_title">카테고리</p>
            <div className="Ct">
                {
                    Category.map(
                        t => {
                            return (
                                <div className="Ct1">
                                    <Categorylist Key={t.id} location={t.context} />
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    );
};

export default H_category;