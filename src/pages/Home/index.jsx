import React from "react";
import { CartList } from "../../components/CartList";
import { Header } from "../../components/Header";

export const Home = ({ setHome, listTransactions, setListTransactions }) => {
  return (
    <>
      <Header setHome={setHome} />
      <section>
        <div>
          <form action="">formulario</form>
        </div>
        <div></div>
      </section>
      <section>
        <CartList
          setHome={setHome}
          setListTransactions={setListTransactions}
          listTransactions={listTransactions}
        />
      </section>
    </>
  );
};
