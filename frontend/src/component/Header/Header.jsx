import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <BiChevronLeft className='backpage' onClick={() => { navigate(-1); }} />
            <Link to="/main" >
                <img
                    className="header_logo"
                    src="https://i.esdrop.com/d/f/uVJApfFjHN/Z9voVrRkN3.png" alt=""
                />
            </Link>

        </div >


    );

}

export default Header;