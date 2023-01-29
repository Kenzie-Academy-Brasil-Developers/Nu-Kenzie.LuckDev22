import "./index.css";
import { useState } from "react";
import { Label } from "../Label";
import { v4 as id } from "uuid";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [formData, setFormData] = useState({
    description: "",
    type: "entrada",
    value: "",
  });

  const submit = (event) => {
    event.preventDefault();
    const newValue = { ...formData, id: id() };

    if (
      formData.description !== "" &&
      formData.value !== "" &&
      formData.type !== ""
    ) {
      setListTransactions([...listTransactions, newValue]);
    } else {
      alert("Campos sem preencher");
    }

    setFormData({
      description: "",
      type: "",
      value: "",
    });

    console.log(newValue);
  };

  return (
    <form onSubmit={submit} noValidate>
      <div className="divForm">
        <Label htmlFor="description">Description</Label>
        <input
          type="text"
          value={formData.description}
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
          placeholder="Digite aqui sua descrição"
        ></input>
        <p>Ex.: Compra de roupas</p>
      </div>

      <div className="divValueAndType">
        <div className="divValue">
          <Label htmlFor="value">Valor:</Label>
          <input
            type="number"
            value={formData.value}
            onChange={(event) =>
              setFormData({ ...formData, value: event.target.value })
            }
            placeholder="R$ 0000,00  "
          ></input>
        </div>
        <div className="divValue">
          <Label htmlFor="selectType">Tipo de Valor:</Label>
          <select
            onChange={(event) =>
              setFormData({ ...formData, type: event.target.value })
            }
          >
            <option disabled>Selecione o tipo</option>
            <option value="entrada">entrada</option>
            <option value="saída">saída</option>
          </select>
        </div>
      </div>
      <button className="btnAdd" type="submit">
        Inserir valor
      </button>
    </form>
  );
};
