import "./index.css"
import React from "react";

export function TotalValue({ listTransactions }) {
  const total = listTransactions.reduce((valorAtual, novoValor) => {
    if (novoValor.type === "entrada") {
      return Number(novoValor.value) + valorAtual;
    } else {
      return valorAtual - Number(novoValor.value);
    }
  }, 0);

  return (
    <div className="divTotalCard">
      <div className="totalValue">
        <h3>Valor total: </h3> <span>$ {total},00</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}
