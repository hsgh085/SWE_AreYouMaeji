import React from 'react';
import Categorylist from './Categorylist';
import { useState } from 'react';
import { IoIosBriefcase } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
function Category() {
    const [Category, setCategory] = useState([
        { Icon: <IoIosBriefcase />, location: "연세플라자" },
        { Icon: <IoIosBriefcase />, location: "장소" },
        { Icon: <IoIosAddCircle />, location: "구3학사" },
        { Icon: <IoIosAddCircle />, location: "신축" },
        { Icon: <IoIosAddCircle />, location: "학생회관" },
        { Icon: <IoIosAddCircle />, location: "매지리-카페" },
        { Icon: <IoIosAddCircle />, location: "매지리-음식점" },
        { Icon: <IoIosAddCircle />, location: "매지리-편의점" },
        { Icon: <IoIosAddCircle />, location: "매지리-ETC" },
        { Icon: <IoIosAddCircle />, location: "ETC" }
    ]);
    const list = []

    for (let i = 0; i < Category.length; i++) {
        let t = Category[i];
        list.push(
            <div >
                <Categorylist Icon={t.Icon} location={t.location} />

            </div >
        )

    }
    return (
        <div >{list}
        </div >

    );
}

export default Category;
