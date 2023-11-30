import axios from "axios";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Card({id, nombre, descripcion, imagen}) {

  
  const eliminarFlor = (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:3001/flores/${id}`)
      .then(function () {
        console.log("Eliminado con éxito");
      })
      .catch(function (error) {
        console.error('No se eliminó', error);
      });
  }

  return (
    <>
        <div >
          <div className="bg-white flex flex-col items-center rounded-3xl border border-indigo-900 p-2">
            <img
              src={imagen}
              alt=''
              className="w-30 h-30 object-cover rounded-xl bg-contain"
            />
            <h2 className="items items-center justify-center place-content-cente text-center">
              {nombre}
            </h2>
            <p className="items items-center justify-center place-content-cente text-center">
              {descripcion}
            </p>
            <div className="flex flex-row">

            <button
                className="btn btn-danger"
                onClick={(e)=>{eliminarFlor(e,id)}}
                
              >
                Eliminar
              </button>
            <button
              className="btn btn-success border border-yellow m-auto"
            >
              Editar
            </button>
            </div>
          </div>
        </div>
    </>
  );
      }
