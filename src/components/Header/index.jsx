import logo2 from "../../img/Nu Kenzie.png";
import { Button } from "../Button";

export const Header = ({ setHome }) => {
  return (
    <header>
      <img src={logo2} alt="" />
      <Button actionFunction={() => setHome(true)}>Início</Button>
    </header>
  );
};
