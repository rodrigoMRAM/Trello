import { useEffect, useState } from "react";
import Items from "./Items";
import { useParams } from "react-router-dom";

function RelatedTables() {
  const { id } = useParams();

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
        body: JSON.stringify({ nombre: nombreTabla, identificacion: caca }),
      });

      if (!res.ok) {
        throw new Error("Failed to create company");
      }

      // Después de crear la compañía, volvemos a listar las compañías actualizadas.
      //   listCompanies();
    } catch (error) {
      console.log(error);
    }
  };
  // // Estado para almacenar la lista de elementos
  // const [items, setItems] = useState([]);
  // // Estado para almacenar el valor del nuevo elemento
  // const [nuevoItem, setNuevoItem] = useState('');

  // // Función para manejar el cambio en el input del nuevo elemento
  // const handleInputChange = (e) => {
  //     setNuevoItem(e.target.value);
  // };

  // // Función para manejar la adición de un nuevo elemento a la lista
  // const agregarItem = () => {
  //     if (nuevoItem.trim() !== '') {
  //         setItems([...items, nuevoItem]);
  //         setNuevoItem(''); // Limpiar el valor del input después de agregar el elemento
  //     }
  // };

  // const manejarSubmit = (e) => {
  //     e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  //     // Realizar la acción deseada con el valor del input

  //     // Puedes agregar lógica adicional aquí, como enviar datos al servidor, etc.

  //     // Limpiar el input después de enviar

  // };

  // const [tabla, setTabla] = useState(''); // Estado para el elemento
  // const [valor, setValor] = useState("")
  // const manejarSubmit1 = (e) => {
  //     e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  //     // Realizar la acción deseada con el valor del input

  //     // Puedes agregar lógica adicional aquí, como enviar datos al servidor, etc.

  //     // Limpiar el input después de enviar

  // };

  // const manejarCambios = (e) => {
  //     setTabla(e.target.value);
  // };

  // const addItem = () => {
  //     if (tabla.trim() !== '') {
  //         setValor(tabla)
  //         setTabla(''); // Limpiar el estado del elemento después de agregarlo
  //     }
  // };

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
    // Realizar la acción deseada con el valor del input

    // Puedes agregar lógica adicional aquí, como enviar datos al servidor, etc.

    // Limpiar el input después de enviar
  };

  //   OBTENER IDENTIFIACION

  const [caca, setcaca] = useState([]);
  const listCompanies = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/boards/");
      const data = await res.json();
      const wa = data.map((val) => {
        if (val.nombre == id) {
          setcaca(val.id);
        } else {
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  //   TRAER TABLAS DE LA BASE DE DATOS
  const [tablas, setTablas] = useState([]);
  const traerTablas = async () => {
    try {
      const res1 = await fetch(`http://127.0.0.1:8000/tablas/27/`);
      const data1 = await res1.json();
      const miTabla = data1.map((val) =>  val);
      console.log()
      setTablas(miTabla);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listCompanies();
    traerTablas();
  }, []);


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
      setcaca(updatedCompanies);
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
          <div className="  bg-slate-950 w-80 ml-4 h-fit rounded-lg pb-6">
            <p  className="text-white pl-5 pt-5 text-xl tracking-wider ">
              {" "}
              {item.nombre} <button
              id={item.id + "h"}
              className="transition duration-150"
              onClick={() => handleDelete(item.id)}
            >
              <span class="material-symbols-outlined">delete</span>
            </button>
            </p>
            <Items />
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

      {/* <div className="nombreTabla flex mt-10">
                {valor.length < 1 ?
                    <form className="mt-4 ml-4" onSubmit={manejarSubmit1}>
                    <input placeholder="Introduce nombre de Tabla" type="text" className=" bg-slate-500 rounded-sm text-white" onChange={manejarCambios} value={tabla} name="" id="" />
                    <button type="submit" className=" bg-slate-600 rounded-sm ml-2 px-2" onClick={addItem} >+</button>
                    </form> :
                    <p className="text-white pl-5 pt-5 text-xl tracking-wider "> {valor}</p>}
                    
                    
                    
                    </div>
                    <div className="ListadeItems px-2">
                    <ul className="">
                    
                    {items.map((item, index) => (
                        <li className=" w-full bg-slate-800 mt-3" key={index}><p className="itemp">{item}</p></li>
                        ))}
                        </ul>
                        <details className="mt-3 ">
                        <summary >+ Add Card</summary>
                        <form onSubmit={manejarSubmit}>
                        <input type="text" className=" w-full bg-slate-800 mt-2" value={nuevoItem} onChange={handleInputChange} />
                        <button type="submit" className=" mt-3 px-2 rounded- bg-slate-600 rounded-sm ml-2" onClick={agregarItem}>Add</button>
                        
                        </form>
                        </details>
                        
                    </div> */}
    </div>
  );
}

export default RelatedTables;
