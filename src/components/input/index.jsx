import React from "react";
import "./index.css";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Input = ({
  title,
  type,
  placeholder,
  value,
  onChange,
  password,
  secure,
  secureHandler,
}) => {
  return (
    <div>
      <p className="input-title">{title}</p>
      <div className="input-main">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {password && (
          <button onClick={secureHandler}>
            {secure ? (
              <IoIosEye color="#9FA0A6" size={24} />
            ) : (
              <IoIosEyeOff color="#9FA0A6" size={24} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
export default Input;
