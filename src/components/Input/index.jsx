import React from "react";

export const Input = ({ change, type, valor, placeholder, setFormData }) => {
  return (
    <input
      type={type}
      value={valor}
      onChange={(event) => setFormData({ change })}
      placeholder={placeholder}
    />
  );
};
