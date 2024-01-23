import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { entre, salida } from "../effects/Fade";

function ListaTable() {
  const [companies, setCompanies] = useState([]);

  const listCompanies = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/boards/");
      const data = await res.json();
      const companyNames = data.map((val) => val);
      setCompanies(companyNames);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listCompanies();
  }, []);

  // ELIMINAR

  const handleDelete = async (tablaId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/delete/${tablaId}/`,
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
      const updatedCompanies = companies.filter(
        (company) => company.id !== tablaId
      );
      setCompanies(updatedCompanies);
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  const url = "/mistablas/";

  return (
    <div className="flex flex-wrap h-fit ">
      {companies.map((names) => (
        <>
          <div
            onMouseEnter={entre}
            info={names.id}
            onMouseLeave={salida}
            className="crearTabla px-24 py-24 h-fit flex bg-slate-950 rounded-lg decorat mr-10 mt-5 items-center "
          >
            <Link to={url + names.nombre} className="list-none" key={names.id}>
              {names.nombre}{" "}
            </Link>

            <button
              id={names.id + "h"}
              className="transition duration-150 opacity-0 "
              onClick={() => handleDelete(names.id)}
            >
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
        </>
      ))}
    </div>
  );
}

export default ListaTable;
