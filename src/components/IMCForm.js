import React from "react";
import { useState } from "react";
import "../stylesheet/IMCForm.css";

const valores_iniciales = {
  peso: "",
  altura: "",
  dia: "",
  hora: "",
  key: "",
};

const IMCForm = () => {
  const [input, setInput] = useState(valores_iniciales);

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  //   const handleSubmit = () => {};
  return (
    <div className="contenedor-imc">
      <div className="cont-peso">
        <label htmlFor="peso">Peso</label>
        <input
          id="peso"
          type={"number"}
          min={"1"}
          max={"500"}
          placeholder="Ingrese su peso"
          onClick={handleChange}
        />
      </div>
      <div className="cont-altura">
        <label htmlFor="altura">Altura</label>
        <input
          id="altura"
          type={"number"}
          min={"1"}
          max={"300"}
          placeholder="Ingrese su altura"
          onClick={handleChange}
        />
      </div>
      <div className="btn">
        <button
          className="calcular"
          disabled={input.peso === "" || input.altura === ""}
        >
          Calcular IMC
        </button>
      </div>
    </div>
  );
};

export default IMCForm;
