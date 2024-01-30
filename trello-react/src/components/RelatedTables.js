import { useEffect, useState } from "react";
import Items from "./Items";
import { useParams } from "react-router-dom";

function RelatedTables() {


  const { id } = useParams();
  const [userID, setUserID] = useState([]);
  const [tablas, setTablas] = useState([]);
  useEffect(() => {

    listCompanies();
    traerTablas(userID)
  }, [userID]);

  const [companies, setCompanies] = useState([]);
  const [newCompanyName, setNewCompanyName] = useState("");
  // Estado para almacenar la lista de elementos

  // Estado para almacenar el valor del nuevo elemento
  const [nombreTabla, setnombreTabla] = useState("");
  const createTable = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/tablascreate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre: nombreTabla, identificacion: userID }),
      });
      if (!res.ok) {
        throw new Error("Failed to create company");
      }

      // const updatedCompanies = tablas.filter(
      //   (tablasdev) => tablasdev
      // );
    // setTablas();
     

      traerTablas(userID);
      // listCompanies();

      // Después de crear la compañía, volvemos a listar las compañías actualizadas.
    } catch (error) {
      console.log(error);
    }
  };


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
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario
     agregarItem();
     traerTablas();
    // Realizar la acción deseada con el valor del input

    // Puedes agregar lógica adicional aquí, como enviar datos al servidor, etc.

    // Limpiar el input después de enviar
  };

  //   OBTENER IDENTIFIACION

  
 
  const listCompanies = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/boards/");
      const data = await res.json();
      const datos = data.map((val) => {
        if (val.nombre == id) {
          setUserID(val.id);
          
        } else {
        }
        
      });
    } catch (error) {
      console.log(error);
    }
  };


  //   TRAER TABLAS DE LA BASE DE DATOS
  
  const traerTablas = async (miid) => {
    try {
      if(miid != 0 && miid != undefined ){
        console.log(miid)
        const res1 = await fetch(`http://127.0.0.1:8000/tablas/${miid}/`);
        const data1 = await res1.json();
        const miTabla = data1.map((val) =>  val);
        setTablas(miTabla);
        console.log(miTabla)

      }
    } catch (error) {
      console.log(error);
      
    }
  };




  const handleDelete = async (tablaId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/tabla/delete/${tablaId}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // Puedes agregar otras cabeceras según tus necesidades, como la autenticación
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete company");
      }

      // Actualizar la lista de empresas después de la eliminación
      const updatedCompanies = tablas.filter(
        (tablasdev) => tablasdev.id !== tablaId
      );
      setTablas(updatedCompanies);

    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  return (
    <div className="wrapTablas flex flex-row">
      {tablas.length === 0 && (
        <div className="  bg-slate-950 w-80 ml-4 h-fit rounded-lg pb-6	">
          <form method="POST" className="pl-5 pt-5 " onSubmit={manejarSubmit}>
            <input
              placeholder="Introduce nombre de Tabla"
              type="text"
              className=" bg-slate-500 rounded-lg text-white"
              onChange={handleInputChange}
              value={nombreTabla}
              id=""
            />
            <button
              type="submit"
              className=" bg-slate-600 rounded-sm ml-2 px-2"
              onClick={createTable}
              //   onClick={agregarItem}
            >
              +
            </button>
          </form>
        </div>
      )}

      {tablas?.map((item) => (
        <>
          <div className="  bg-slate-950  w-72 ml-4 h-fit rounded-lg pb-6">
            <p  className="text-white pl-5 pt-5  text-2xl tracking-wider ">
              {" "}
              {item.nombre} <button
              id={item.id + "h"}
              className="transition duration-150"
              onClick={() => handleDelete(item.id)}
            >
              <span class="material-symbols-outlined">delete</span>
            </button>
            </p>
            <Items id={item.id}/>
          </div>
        </>
      ))}
      {tablas.length === 0 ? (
        ""
      ) : (
        <div className="  bg-slate-950 w-80 ml-4 h-fit	rounded-lg pb-6">
          <form method="POST" className="pl-5 pt-5 " onClick={manejarSubmit}>
            <input
              placeholder="Introduce nombre de Tabla"
              type="text"
              className=" bg-slate-500 rounded-lg text-white"
              onChange={handleInputChange}
              value={nombreTabla}
              id=""
            />
            <button
              type="submit"
              className=" bg-slate-600 rounded-sm ml-2 px-2"
              onClick={createTable}
            >
              +
            </button>
          </form>
        </div>
      )}

    </div>
  );
}

export default RelatedTables;
