import React from "react";
import { FaTrash } from "react-icons/fa";
import { Button } from "../../Button";

export const Card = ({ delCard, list, index }) => {
  return (
    <li key={index} className={list.type === "entrada" ? "entrada" : "saída"}>
      <div className="">
        <h2 className="titleDescrip">{list.description}</h2>
        <h3 className="type">{list.type}</h3>
      </div>
      <h3 className="value">
        R$ {list.type === "saída" ? <span>-</span> : <></>}
        {list.value},00
      </h3>
      <Button actionFunction={() => delCard(list.id)}>
        <FaTrash />
      </Button>
    </li>
  );
};
