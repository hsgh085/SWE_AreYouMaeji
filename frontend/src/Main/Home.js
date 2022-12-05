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