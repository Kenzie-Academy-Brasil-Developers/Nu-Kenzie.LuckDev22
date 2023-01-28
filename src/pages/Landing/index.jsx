import React from "react";
import { Button } from "../../components/Button";
import logo from "../../img/Illustration.png";
import logo2 from "../../img/Nu Kenzie.png";

export const Landing = ({ setHome }) => {
  return (
    <section>
      <div>
        <img src={logo2} alt="" />
        <h1>Centralize o controle das suas finanças</h1>
        <span>de forma rápida e segura</span>
        <Button
          actionFunction={() => setHome(false)}
          children="Iniciar"
        ></Button>
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
    </section>
  );
};
