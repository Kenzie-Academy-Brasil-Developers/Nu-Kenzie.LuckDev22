import React from "react";

export const Button = ({ className, type, actionFunction, children }) => {
  return (
    <button className={className} type={type} onClick={() => actionFunction()}>
      {children}
    </button>
  );
};
