import React from "react";

export const Button = ({ actionFunction, children }) => {
  return <button onClick={() => actionFunction()}>{children}</button>;
};
