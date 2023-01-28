import React from 'react'
import { Button } from '../Button'
import { Cart } from './Cart'

export const CartList = ({ listTransactions, setListTransactions }) => {
  return (
    <>
    <div>
        <h2>Resumo Financeiro</h2>
        <Button className="" value="todos">Todos</Button>
        <Button  className="" value="entrada">Entradas</Button>
        <Button  className="" value="saida">Despesas</Button>
    </div>
    <div>
        <ul>
            {listTransactions.map((list, index) => (
                <Cart key={index} list={list} />
            ))}
        </ul>
    </div>
    </>
  )
}
