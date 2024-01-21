import { useEffect, useState } from "react";
import Items from "./Items";

function Tabla() {

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




    // Estado para almacenar la lista de elementos
    const [tablas, setTablas] = useState([]);
    console.log(tablas)
    // Estado para almacenar el valor del nuevo elemento
    const [nombreTabla, setnombreTabla] = useState('');

    // Función para manejar el cambio en el input del nuevo elemento
    const handleInputChange = (e) => {
        console.log(e)
        setnombreTabla(e.target.value);
    };

    // Función para manejar la adición de un nuevo elemento a la lista
    const agregarItem = () => {
        if (nombreTabla.trim() !== '') {
            setTablas([...tablas, nombreTabla]);
            setnombreTabla(''); // Limpiar el valor del input después de agregar el elemento
        }
    };


    const manejarSubmit = (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

        // Realizar la acción deseada con el valor del input

        // Puedes agregar lógica adicional aquí, como enviar datos al servidor, etc.

        // Limpiar el input después de enviar

    };




    return (
        <div className="wrapTablas flex flex-row">
            {tablas.length === 0 && <div className="  bg-slate-950 w-80 ml-4 h-fit rounded-lg pb-6	">
                <form className="pl-5 pt-5 " onClick={manejarSubmit}>
                    <input placeholder="Introduce nombre de Tabla" type="text" className=" bg-slate-500 rounded-lg text-white" onChange={handleInputChange} value={nombreTabla} name={nombreTabla} id="" />
                    <button type="submit" className=" bg-slate-600 rounded-sm ml-2 px-2" onClick={agregarItem} >+</button>
                </form>

            </div>}


            {tablas?.map((item, index) => (
                <>
                    <div className="  bg-slate-950 w-80 ml-4 h-fit rounded-lg pb-6">
                        <p className="text-white pl-5 pt-5 text-xl tracking-wider "> {item}</p>
                         <Items/>
                    </div>
                </>
            ))}
            {tablas.length === 0 ? "" : <div className="  bg-slate-950 w-80 ml-4 h-fit	rounded-lg pb-6">

                <form className="pl-5 pt-5 " onClick={manejarSubmit}>
                    <input placeholder="Introduce nombre de Tabla" type="text" className=" bg-slate-500 rounded-lg text-white" onChange={handleInputChange} value={nombreTabla} name={nombreTabla} id="" />
                    <button type="submit" className=" bg-slate-600 rounded-sm ml-2 px-2" onClick={agregarItem} >+</button>
                </form>
            </div>}




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
    )
}


export default Tabla;