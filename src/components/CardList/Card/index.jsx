import React from "react";
import { FaTrash } from "react-icons/fa";
import { Button } from "../../Button";
import "./index.css";

export const Card = ({ delCard, list, index }) => {
  return (
    <li key={index} className={list.type === "entrada" ? "entrada" : "saída"}>
      <div>
        <h2>{list.description}</h2>
        <h3>{list.type}</h3>
      </div>
      <h3>
        R$ {list.type === "saída" ? <span>-</span> : <></>}
        {list.value},00
      </h3>
      <Button className="trash" actionFunction={() => delCard(list.id)}>
        <FaTrash />
      </Button>
    </li>
  );
};
