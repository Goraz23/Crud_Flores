import Card from "../contents/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [datos, setDatos] = useState([]);
  const apiEndpoint = "http://localhost:3001/flores";

  useEffect(() => {
    axios
      .get(apiEndpoint)
      .then(function (response) {
        console.log("Respuesta exitosa:", response.data);
        setDatos(response.data);
      })
      .catch(function (error) {
        console.error("Error al hacer la solicitud:", error);
      });
  }, []);

  return (
    <>
      <div className="bg-cyan-100 h-full w-full">
        <br />
        <br />
        <br />
        <br />
        <div className="flex justify-end">
          <button className="bg-cyan-200 border-spacing-3 text-black px-3 py-1 font-bold uppercase mr-20 rounded-[100%] h-[10%]">
            <Link to={"/agregar"}>
              <box-icon name="add-to-queue"></box-icon>
            </Link>
          </button>
        </div>
        <div className="flex flex-center h-[40%] w-[80%]  gap-5 columns-2 p-4 m-auto">
          {datos.map((flor,index) => (
            <Card
              key={index}
              id={flor.id_flor}
              nombre={flor.nombre}
              descripcion={flor.descripcion}
              imagen={flor.imagen}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
