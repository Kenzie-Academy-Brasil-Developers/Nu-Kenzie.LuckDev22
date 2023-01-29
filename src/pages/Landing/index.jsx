import React from "react";
import { Button } from "../../components/Button";
import logo from "../../img/Illustration.png";
import logo2 from "../../img/Nu Kenzie.png";
import "./index.css"

export const Landing = ({ setHome }) => {
  return (
    <section className="container">
      <div className="divInfoLand">
        <img className="logoNu" src={logo2} alt="" />
        <h1>Centralize o controle das suas finanças</h1>
        <span>de forma rápida e segura</span>
        <Button className="buttonIniciar"
          actionFunction={() => setHome(false)}
          children="Iniciar"
        ></Button>
      </div>
      <div className="divLogo">
        <img src={logo} alt="" />
      </div>
    </section>
  );
};
