import React from "react";
import { Button } from "../Button";
import { Cart } from "./Cart";
import CartEmpty from "../../img/NoCard.png";

export const CartList = ({ listTransactions, setListTransactions, setFilter }) => {

  const delCart = (cartId) => {
    const newCart = listTransactions.filter((cart => cart.id !== cartId))
    setListTransactions(newCart)

}



  return (
    <>
      <div>
        <h2>Resumo Financeiro</h2>
        <Button className=""  actionFunction={() => setFilter("todos")} value="todos">
          Todos
        </Button>
        <Button className="" actionFunction={() => setFilter("entrada")} value="entrada">
          Entradas
        </Button>
        <Button className="" actionFunction={() => setFilter("saída")} value="saída">
          Despesas
        </Button>
      </div>
      <div>
        <ul>
          {listTransactions.length > 0 ? (
            <>
              {listTransactions.map((list, index) => (
                <Cart delCart={delCart} key={index} list={list} />
              ))}
            </>
          ) : (
            <>
              <h2>Você ainda não possui nenhum lançamento</h2>
              <img src={CartEmpty} alt="carrinho vazio" />
            </>
          )}
        </ul>
      </div>
    </>
  );
};
