import React from "react";

export default function Input({
  label,
  placeholder,
  type,
  name,
  value,
  setValue,
}) {
  return (
    <div className="form__control">
      <label htmlFor={name}>{label}</label>
      <div className="input_box">
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}
