import React from "react";
import "./Input.scss";

interface InputProps {
  type?: "text" | "email" | "password";
  value?: string;
  placeholder?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  selectOptions?: string[];
}

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  placeholder,
  onChange,
  selectOptions,
}) => {
  return (
    <>
      {type === "text" || type === "email" || type === "password" ? (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="input"
        />
      ) : type === "select" && selectOptions ? (
        <select value={value} onChange={onChange} className="select">
          {selectOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : null}
    </>
  );
};

export default Input;
