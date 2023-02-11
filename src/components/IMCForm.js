import React from "react";
import { useState } from "react";
import "../stylesheet/IMCForm.css";

const IMCForm = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [bmi, setBmi] = useState("");
  // const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    if (peso === "" || altura === "") {
      alert("Por favor ingrese un valor");
    } else {
      let bmi = peso / (altura * altura);
      setBmi(bmi.toFixed(2));
    }
  };

  const reiniciar = () => {
    /* setPeso(0);
    setAltura(0);
    setBmi(0); */
    window.location.reload();
  };
  return (
    <div className="contenedor-imc">
      <form onSubmit={handleChange}>
        <div className="cont-peso">
          <label htmlFor="peso">Peso</label>
          <input
            id="peso"
            type={"number"}
            min={"1"}
            max={"500"}
            placeholder="Kg"
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div className="cont-altura">
          <label htmlFor="altura">Altura</label>
          <input
            id="altura"
            type={"number"}
            step="any"
            min={"1"}
            max={"300"}
            placeholder="M"
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div className="btn">
          <button type="submit" className="botones calcular">
            Calcular IMC
          </button>
          <button className="botones reiniciar" onClick={reiniciar}>
            Reiniciar
          </button>
        </div>
        <p>Tu IMC es {bmi}</p>
      </form>
    </div>
  );
};

export default IMCForm;
