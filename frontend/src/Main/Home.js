import React from 'react';
import './Home.css'
import Product from "./../Product/Product";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return (

        <div>
            <button onClick={() => window.location.replace("https://kauth.kakao.com/oauth/authorize?client_id=e1a79b41fcfcd1cdc53b674ddca7fe1f&redirect_uri=http://localhost/oauth/callback/kakao&response_type=code")}>
                login
            </button>
            <Product />
            <Link to="/make">
                <nav class="nav">
                    <ul class="nav__list">
                        <div class="nav__btn">
                            <a class="nav__link">
                                <span class="nav__circle badge">
                                    <BsFillPencilFill className='pencil' />
                                </span>
                            </a>
                        </div>
                    </ul>
                </nav>
            </Link>
        </div >

    );
}

export default Home;
//https://fontawesomeicons.com/pencil