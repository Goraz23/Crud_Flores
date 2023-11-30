import { Form, Link } from "react-router-dom";
import Formulario from "../contents/formulario";
import axios from "axios";
import { useState } from "react";
function agregar() {
  const [lista, setLista] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
  });

  const handleChange = function (e) {
    setLista({
      ...lista,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    const flor = JSON.stringify(lista);
    console.log(flor);
    axios
      .post("http://localhost:3001/flores", flor, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function () {
        console.log("Flor agregada");
      })
      .catch(function () {
        console.error("Error");
      });
  };

  return (
    <>
      <div className="ml-20 mt-20 ">
        <h1 className="font-black text-4xl text-green-950"> Nueva flor </h1>
        <p className="mt-4">Llena los campos para poner la flor que desees</p>
      </div>
      <div className="flex justify-end mr-20">
        <button className="bg-green-950 text-white px-3 py-1 font-bold uppercase rounded-2xl">
          <Link to="/">Regresar</Link>
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-2 mb-10">
        <Form method="post" onSubmit={handleSubmit}>
          <Formulario />
          <input
            className="mt-2 w-full rounded-xl h-[120%] bg-green-800 upperccase font-bold text-white text-lg"
            value="Registrar flor"
            onChange={handleSubmit}
          />
          <button type="submit"></button>
        </Form>
      </div>
    </>
  );
}

export default agregar;
