import { useState } from "react";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import "./styles/index.css";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Conta de luz", type: "saída", value: 150 },
  ]);

  const [home, setHome] = useState(true);
  const [filter, setFilter] = useState("todos");

  const cardsFiltrados = listTransactions.filter((cart) =>
    filter === "todos" ? true : cart.type === filter
  );

  return (
    <div className="App">
      {home ? (
        <Landing setHome={setHome} />
      ) : (
        <Home
          setHome={setHome}
          setListTransactions={setListTransactions}
          listTransactions={cardsFiltrados}
          setFilter={setFilter}
        />
      )}
    </div>
  );
}

export default App;
