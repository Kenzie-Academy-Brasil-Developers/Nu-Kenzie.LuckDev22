import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
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

    if (formData.description !== "" && formData.value !== "" && formData.type !== "") {
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
      <h1>{formData.description}</h1>
      <h1>{formData.type}</h1>
      <h1>{formData.value}</h1>
      <div>
        <Label htmlFor="description">Description</Label>
        <input
          type="text"
          value={formData.description}
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        ></input>
        <p>Ex.: Compra de roupas</p>
      </div>
      <div>
        <div className="divValue">
          <Label htmlFor="value">Valor</Label>
          <input
            type="number"
            value={formData.value}
            onChange={(event) =>
              setFormData({ ...formData, value: event.target.value })
            }
          ></input>
        </div>
        <div className="divSelect">
          <Label htmlFor="selectType">Tipo de Valor</Label>
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
      <button type="submit">Inserir valor</button>
    </form>
  );
};
