import React from "react";
import { IoIosAddCircle } from "react-icons/io";

function Categorylist({ Key, location }) {
  return (
    <div key={Key}>
      <p>
        <IoIosAddCircle /> {location}
      </p>
    </div>
  );
}

export default Categorylist;
