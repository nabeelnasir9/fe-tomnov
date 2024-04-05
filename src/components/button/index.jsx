import React from "react";
import "./index.css";
const Button = ({ title, onClick, ...restProps }) => {
  return (
    <button className="button" onClick={onClick} {...restProps}>
      {title}
    </button>
  );
};
export default Button;
