import "./App.css";
import IMCForm from "./components/IMCForm";
function App() {
  return (
    <div className="App">
      <div className="principal">
        <div className="text">
          <h1>Calculadora IMC</h1>
          <p>(indice de masa corporal)</p>
        </div>
        <IMCForm />
      </div>
    </div>
  );
}

export default App;
