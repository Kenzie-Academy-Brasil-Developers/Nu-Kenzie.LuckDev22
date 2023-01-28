import React from "react";
import { Button } from "../Button";
import { Card } from "./Card";
import CardEmpty from "../../img/NoCard.png";

export const CardList = ({
  listTransactions,
  setListTransactions,
  setFilter,
}) => {
  const delCard = (cardId) => {
    const newCard = listTransactions.filter((card) => card.id !== cardId);
    setListTransactions(newCard);
  };

  return (
    <>
      <div>
        <h2>Resumo Financeiro</h2>
        <Button
          className=""
          actionFunction={() => setFilter("todos")}
          value="todos"
        >
          Todos
        </Button>
        <Button
          className=""
          actionFunction={() => setFilter("entrada")}
          value="entrada"
        >
          Entradas
        </Button>
        <Button
          className=""
          actionFunction={() => setFilter("saída")}
          value="saída"
        >
          Despesas
        </Button>
      </div>
      <div>
        <ul>
          {listTransactions.length > 0 ? (
            <>
              {listTransactions.map((list, index) => (
                <Card delCard={delCard} key={index} list={list} />
              ))}
            </>
          ) : (
            <>
              <h2>Você ainda não possui nenhum lançamento</h2>
              <img src={CardEmpty} alt="carrinho vazio" />
            </>
          )}
        </ul>
      </div>
    </>
  );
};
