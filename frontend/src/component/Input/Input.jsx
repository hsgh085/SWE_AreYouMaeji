import React from "react";
import "./Input.css";

export default function Input({ title, value, name}) {
  return (
    <div className="container">
      <label className="title" htmlFor={name}>
        {title}
      </label>
      <div className="col-3">
        <input
          className="effect-1"
          type="text"
          id={name}
          name={name}
          value={value}
        />
        <span className="focus-border"></span>
      </div>
    </div>
  );
}
