import logo from "../../img/Nu Kenzie2.png";
import { Button } from "../Button";
import "./index.css";

export const Header = ({ setHome }) => {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="" />
        <Button className="btnHeader" actionFunction={() => setHome(true)}>
          Início
        </Button>
      </div>
    </header>
  );
};
