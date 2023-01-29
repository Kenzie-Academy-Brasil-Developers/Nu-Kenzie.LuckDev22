import React from "react";
import { CardList } from "../../components/CardList";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { TotalValue } from "../../components/TotalValue";
import "./index.css";

export const Home = ({
  setHome,
  listTransactions,
  setListTransactions,
  setFilter,
}) => {
  return (
    <div className="homePage">
      <Header setHome={setHome} />
      <div className="corpo">
        <section>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />

          {listTransactions.length > 0 ? (
            <TotalValue listTransactions={listTransactions} />
          ) : (
            <></>
          )}
        </section>
        <section className="sectionCards">
          <CardList
            setHome={setHome}
            setListTransactions={setListTransactions}
            listTransactions={listTransactions}
            setFilter={setFilter}
          />
        </section>
      </div>
    </div>
  );
};
