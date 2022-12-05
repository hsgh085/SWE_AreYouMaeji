import React from 'react';
import './Headersearch.css'
import { Link } from "react-router-dom";
import { TiEquals } from "react-icons/ti";
import { SlUser } from "react-icons/sl";

function Header() {
    return (
        <div className='header'>
            <Link to="/main" >
                <img
                    className="header_logo"
                    src="https://i.esdrop.com/d/f/uVJApfFjHN/Z9voVrRkN3.png" alt=""
                />
            </Link>
s
            <div
                className="header_search">
                <input className="header_searchInput" type="text" placeholder="Search..." />
            </div>
            <div className="header_nav">
                <Link to="/MyPage" >
                    <div className="header_option">
                        <SlUser className='header_optionLineTwo' />

                    </div>
                </Link>
                <Link to="/Category" >
                    <div className="header_option">
                        <TiEquals className="header_optionLineTwo" />
                    </div>
                </Link  >

            </div>
        </div >


    );

}

export default Header;