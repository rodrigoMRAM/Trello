import { useEffect, useState } from "react";
import Items from "./Items";

function Tabla() {

  // Estado para almacenar la lista de elementos
  const [tablas, setTablas] = useState([]);
  // Estado para almacenar el valor del nuevo elemento
  const [nombreTabla, setnombreTabla] = useState("");

  // Función para manejar el cambio en el input del nuevo elemento
  const handleInputChange = (e) => {
    setnombreTabla(e.target.value);
  };

  // Función para manejar la adición de un nuevo elemento a la lista
  const agregarItem = () => {
    if (nombreTabla.trim() !== "") {
      setTablas([...tablas, nombreTabla]);
      setnombreTabla(""); // Limpiar el valor del input después de agregar el elemento
    }
  };

  const manejarSubmit = (e) => {
    e.preventDefault(); 

  };

  return (
    <div className="wrapTablas flex flex-row">
      {tablas.length === 0 && (
        <div className="  bg-slate-950 w-80 ml-4 h-fit rounded-lg pb-6	">
          <form className="pl-5 pt-5 " onClick={manejarSubmit}>
            <input
              placeholder="Introduce nombre de Tabla"
              type="text"
              className=" bg-slate-500 rounded-lg text-white"
              onChange={handleInputChange}
              value={nombreTabla}
              name={nombreTabla}
              id=""
            />
            <button
              type="submit"
              className=" bg-slate-600 rounded-sm ml-2 px-2"
              onClick={agregarItem}
            >
              +
            </button>
          </form>
        </div>
      )}

      {tablas?.map((item, index) => (
        <>
          <div className="  bg-slate-950 w-80 ml-4 h-fit rounded-lg pb-6">
            <p className="text-white pl-5 pt-5 text-xl tracking-wider ">
              {" "}
              {item}
            </p>
            <Items />
          </div>
        </>
      ))}
      {tablas.length === 0 ? (
        ""
      ) : (
        <div className="  bg-slate-950 w-80 ml-4 h-fit	rounded-lg pb-6">
          <form className="pl-5 pt-5 " onClick={manejarSubmit}>
            <input
              placeholder="Introduce nombre de Tabla"
              type="text"
              className=" bg-slate-500 rounded-lg text-white"
              onChange={handleInputChange}
              value={nombreTabla}
              name={nombreTabla}
              id=""
            />
            <button
              type="submit"
              className=" bg-slate-600 rounded-sm ml-2 px-2"
              onClick={agregarItem}
            ></button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Tabla;
