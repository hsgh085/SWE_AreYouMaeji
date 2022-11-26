import React from 'react';
import './Headersearch.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { TiEquals } from "react-icons/ti";
import { SlUser } from "react-icons/sl";

function Header() {
    const [{ product }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/main" >
                <img
                    className="header_logo"
                    src="https://i.esdrop.com/d/f/uVJApfFjHN/Z9voVrRkN3.png" alt=""
                />
            </Link>

            <div
                className="header_search">
                <input className="header_searchInput" type="text" placeholder="Search..." />
                <SearchIcon className="header_searchIcon" />
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