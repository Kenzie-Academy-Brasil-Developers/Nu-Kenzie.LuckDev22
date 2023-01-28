import React from "react";

export const Button = ({ type, actionFunction, children }) => {
  return (
  <button type={type} onClick={() => actionFunction()}>{children}</button>
  );
};
