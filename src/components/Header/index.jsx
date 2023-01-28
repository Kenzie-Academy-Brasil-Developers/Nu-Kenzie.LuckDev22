import logo from "../../img/Nu Kenzie2.png";
import { Button } from "../Button";

export const Header = ({ setHome }) => {
  return (
    <header>
      <img src={logo} alt="" />
      <Button actionFunction={() => setHome(true)}>Início</Button>
    </header>
  );
};
