import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Items(props) {
  console.log(props)

  const marray = []
  marray.push(props)
  console.log(marray.length)
  // const [propsArray, setPropsArray] = useState([]);

  // // Función para agregar un nuevo set de props al array
  // const agregarPropsAlArray = (props) => {
  //   setPropsArray([...propsArray, props]);
  // };

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

    // Realizar la acción deseada con el valor del input

    // Puedes agregar lógica adicional aquí, como enviar datos al servidor, etc.

    // Limpiar el input después de enviar
  };

  const [tabla, setTabla] = useState(""); // Estado para el elemento
  const [valor, setValor] = useState("");
  const manejarSubmit1 = (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    // Realizar la acción deseada con el valor del input

    // Puedes agregar lógica adicional aquí, como enviar datos al servidor, etc.

    // Limpiar el input después de enviar
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

  // const [tableID, setTableID] = useState([]);
  // const listCompanies = async () => {
  //   try {
  //     const res = await fetch("http://127.0.0.1:8000/boards/");
  //     const data = await res.json();
  //     const datos = data.map((val) => {
  //       if (val.nombre == id) {
  //         setTableID(val.id);
  //       } else {
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    traerItems(props.id)
  }, [tablaId]);

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
  // const [itemss, setItemss] = useState([
  //   { id: 1, content: 'Item 1' },
  //   { id: 2, content: 'Item 2' },
  //   { id: 3, content: 'Item 3' },
  // ]);
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('text/plain', index);
    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

//DRAGGEDINDEX ES EL QUE SE MUEVE devuelve number
// DROPINDEX ES EL QUE ES REEMPLAZADO devuelve string
  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData('text/plain');
    console.log(typeof(draggedIndex))
    console.log(typeof(dropIndex))
    const newItems = [...items];
    const draggedItem = newItems[draggedIndex];

    // Remove the item from its original position
    newItems.splice(draggedIndex, 1);

    // Insert the item at the new position
    newItems.splice(dropIndex, 0, draggedItem);

    setItems(newItems);
    setDragging(false);
  };








  return (
    <>

      {/* <div className="nombreTabla flex mt-10">
              
                    <form className="mt-4 ml-4" onSubmit={manejarSubmit1}>
                    <input placeholder="Introduce nombre de Tabla" type="text" className=" bg-slate-500 rounded-sm text-white" onChange={manejarCambios} value={tabla} name="" id="" />
                    <button type="submit" className=" bg-slate-600 rounded-sm ml-2 px-2" onClick={addItem} >+</button>
                    </form> 
                    <p className="text-white pl-5 pt-5 text-xl tracking-wider "> {valor}</p>
                    </div> */}

      <div className="ListadeItems px-2">
        <ul className="">
          {items.map((item, index) => (
            <li info={index} className=" w-full bg-slate-800 mt-3 rounded-lg flex justify-between"
            draggable
            onDragStart={(e) => handleDragStart(e, index+1)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index+1)} 
            key={index}>
              <p className="itemp">{item.nombre} </p>
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
