import { useState } from "react";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import "./styles/index.css";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  const [home, setHome] = useState(true);

  return (
    <div className="App">
      {home ? (
        <Landing setHome={setHome} />
      ) : (
        <Home
          setHome={setHome}
          setListTransactions={setListTransactions}
          listTransactions={listTransactions}
        />
      )}
    </div>
  );
}

export default App;
