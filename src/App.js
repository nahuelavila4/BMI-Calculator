import "./App.css";
import { useState } from "react";
import IMCForm from "./components/IMCForm";
function App() {
  const guardar = () => {
    console.log("guardar datos");
  };
  return (
    <div className="App">
      <div className="principal">
        <h1>Calculadora IMC</h1>
        <p>(indice de masa corporal)</p>
        <IMCForm />
      </div>
    </div>
  );
}

export default App;
