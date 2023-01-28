import React from "react";
import { FaTrash } from "react-icons/fa"
import { Button } from "../../Button";

export const Cart = ({ list, index }) => {
  return (
    <li key={index} className={list.type === "entrada" ? "entrada" : "saida"}>
      <div className="">
        <h2 className="titleDescrip">{list.description}</h2>
        <h3 className="type">{list.type}</h3>
      </div>
      <h3 className="value">R$ {list.value},00</h3>
      <Button><FaTrash/></Button>
    </li>
  );
};
