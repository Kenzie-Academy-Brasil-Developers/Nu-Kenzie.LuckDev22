import React from "react";
import { CartList } from "../../components/CartList";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { TotalValue } from "../../components/TotalValue";

export const Home = ({ setHome, listTransactions, setListTransactions,setFilter }) => {
  return (
    <>
      <Header setHome={setHome} />
      <section>
        <div>
         <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
       
       {listTransactions.length > 0 ? (
        <TotalValue listTransactions={listTransactions}/>
       ) : (
        <>
        </>
       )
       } 
        </div>
        <div></div>
      </section>
      <section>
        <CartList
          setHome={setHome}
          setListTransactions={setListTransactions}
          listTransactions={listTransactions}
          setFilter={setFilter}
        />
      </section>
    </>
  );
};
