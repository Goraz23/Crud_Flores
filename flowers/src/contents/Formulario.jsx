import {  useState } from "react";

const Formulario = () => {
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

//   const handleSubmit = function (e) {
//     e.preventDefault();
//     const flor = JSON.stringify(lista);
//     console.log(flor);
//     axios
//       .post("http://localhost:3001/flores", flor, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then(function () {
//         console.log("Flor agregado");
//       })
//       .catch(function () {
//         console.error("Error");
//       });

    return (
      <>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="nombre">
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre de la flor"
            name="nombre"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="descrpcion">
            Descripcion:
          </label>
          <input
            id="descrpcion"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Descrpcion de la flor"
            name="descrpcion"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="email">
            Imagen:
          </label>
          <input
            id="imagen"
            type="imagen"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Imagen de la flor"
            name="imagen"
            onChange={handleChange}
          />
        </div>
      </>
    );
  };

export default Formulario;
