import React from 'react';
import './Errandongoing.css'
import { Link } from "react-router-dom";
import { useStateValue } from "./../StateProvider";
import Errandongoingproduct from "./Errandongoingproduct";

function Errandongoing({ title, price, errand_price }) {

    const [{ product }, dispatch] = useStateValue();

    return (

        <header class="form-errand">

            {product.map(item => (
                <Errandongoingproduct
                    title={item.title}
                    price={item.price}
                    errand_price={item.errand_price}
                />
            ))}
        </header>

    );

}

export default Errandongoing;
