import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Items(props) {
  // agregarPropsAlArray()
  const { id } = useParams();
  const [tablaId, setTablaId] = useState([]);
  const [tablas, setTablas] = useState([]);
  // Estado para almacenar la lista de elementos
  const [items, setItems] = useState([]);
  // Estado para almacenar el valor del nuevo elemento
  const [nuevoItem, setNuevoItem] = useState("");

  // Función para manejar el cambio en el input del nuevo elemento
  const handleInputChange = (e) => {
    setNuevoItem(e.target.value);
  };

  // Función para manejar la adición de un nuevo elemento a la lista
  const agregarItem = () => {
    if (nuevoItem.trim() !== "") {
      setItems([...items, nuevoItem]);
      setNuevoItem(""); // Limpiar el valor del input después de agregar el elemento
    }
  };

  const manejarSubmit = (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  };

  const [tabla, setTabla] = useState(""); // Estado para el elemento
  const [valor, setValor] = useState("");
  const manejarSubmit1 = (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  };

  const manejarCambios = (e) => {
    setTabla(e.target.value);
  };

  const addItem = () => {
    if (tabla.trim() !== "") {
      setValor(tabla);
      setTabla(""); // Limpiar el estado del elemento después de agregarlo
    }
  };


  useEffect(() => {
    traerItems(props.id)
  }, [props.id]);

  const [nombreTabla, setnombreTabla] = useState("");
  const createCard = async (propId) => {
    try {
      console.log(propId)
      const res = await fetch("http://127.0.0.1:8000/cardscreate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id_tablas: propId ,nombre: nuevoItem,  color: '2' }),
      });
      if (!res.ok) {
        throw new Error("Failed to create company");
      }

      // const updatedCompanies = tablas.filter(
      //   (tablasdev) => tablasdev
      // );
    // setTablas();
     
      setNuevoItem("")
      traerItems(propId);
      // listCompanies();

      // Después de crear la compañía, volvemos a listar las compañías actualizadas.
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarItems = async ()=>{

  }



  const traerItems = async (miid) => {
    try {
      if(miid != 0 && miid != undefined ){
        console.log(miid)
        const res1 = await fetch(`http://127.0.0.1:8000/cards/${miid}/`);
        const data1 = await res1.json();
        const miTabla = data1.map((val) =>  val);
        setItems(miTabla);
        console.log(items)

      }
    } catch (error) {
      console.log(error);
      
    }
  };



  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/card/delete/${itemId}/`,
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
      const updatedCompanies = items.filter(
        (tablasdev) => tablasdev.id !== itemId
      );
      setItems(updatedCompanies);
      setNuevoItem(" ")

    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };



  const [dragging, setDragging] = useState(false);

  const [valorPosicionId, setvalorPosicionId] = useState("")
  const [posicionId, setvalorPosicion] = useState("")
  const handleDragStart = (e, index ,posicion) => {
    e.dataTransfer.setData('text/plain', index);
    setvalorPosicionId(e.target.id)
    setvalorPosicion(posicion)
    console.log(posicion)

    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log(e.target.id)

    
  };

//DRAGGEDINDEX ES EL QUE SE MUEVE devuelve number
// DROPINDEX ES EL QUE ES REEMPLAZADO devuelve string
  const handleDrop = (e, dropIndex, nuevoId, posicionnueva) => {
    e.preventDefault();
    // console.log(posicionnueva)
    // console.log(e.target.id)
    // console.log(dropIndex)
    const draggedIndex = e.dataTransfer.getData('text/plain');
    // console.log(e)
    // console.log(draggedIndex)
    // console.log(typeof(dropIndex))
    const modificarPosicion = async (valorViejo) => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/update/${valorViejo}/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({posicion: posicionnueva}),
        });
        if (!res.ok) {
          throw new Error("Failed to create company");
        }
  

      } catch (error) {
        console.log(error);
      }
    };
    // modificarPosicion(valorPosicionId)
    const modificarPosicion2 = async (valorViejo) => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/update/${valorViejo}/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({posicion: posicionId}),
        });
        if (!res.ok) {
          throw new Error("Failed to create company");
        }
        
        
      } catch (error) {
        console.log(error);
      }
    };
    // modificarPosicion2(nuevoId)
    const pasos = async() =>{
      const newItems = [...items];
      const draggedItem = newItems[draggedIndex];
      
      // Remove the item from its original position
      newItems.splice(draggedIndex, 1);
      
      // Insert the item at the new position
      newItems.splice(dropIndex, 0, draggedItem);
      
      setItems(newItems);
      setDragging(false);
      traerItems(props.id)
    }
    const ejecutarCambios =async  ()=>{
      await pasos()
      await modificarPosicion(valorPosicionId)
      await  modificarPosicion2(nuevoId)
  
    }

    ejecutarCambios();
  };
  







  return (
    <>

      <div className="ListadeItems px-2">
        <ul className="">
          {items.map((item, index) => (
            <li info={index} id={item.id} className=" w-full bg-slate-800 mt-3 rounded-lg flex justify-between prueba break-all min-h-full pruebita"
            draggable
            onDragStart={(e) => handleDragStart(e, index, item.posicion)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index,item.id, item.posicion)} 
            key={index}>
              <p className="itemp">{item.nombre} </p>
              {/* <p>{item.id}</p> */}
              <button
              id={item.id + "h"}
              className="transition duration-150"
              onClick={() => handleDelete(item.id)}
              >
              <span class="material-symbols-outlined">delete</span>
            </button>
            </li>
          ))}
        </ul>
        <details className="mt-3 ">
          <summary className="hover:bg-sky-700 rounded-lg">+ Add Card</summary>
          <form method="POST" onSubmit={manejarSubmit}>
            <input
              type="text"
              className="rounded-lg  w-full bg-slate-800 mt-2"
              value={nuevoItem}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className=" mt-3 px-2 rounded- bg-slate-600 rounded-lg ml-2"
              onClick={()=>createCard(props.id)}
              // onClick={agregarItem}
            >
              Add
            </button>
          </form>
        </details>
      </div>
      
    </>
  );
}

export default Items;
