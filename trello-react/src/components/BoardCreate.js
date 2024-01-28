import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TableCreate() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [newCompanyName, setNewCompanyName] = useState("");
  console.log(newCompanyName)
  const createCompany = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre: newCompanyName }),
      });
      navigate("/mistablas");

      if (!res.ok) {
        throw new Error("Failed to create company");
      }

      // Después de crear la compañía, volvemos a listar las compañías actualizadas.
      //   listCompanies();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    

    // Realizar acciones de envío de datos (puedes hacer una solicitud fetch aquí)

    // Actualizar el estado para indicar que el formulario ha sido enviado
  };

  return (
    <div className="wrapperTabla flex justify-center items-center w-full ">
      <div className="crearTabla px-32 py-52 h-fit flex bg-slate-950 rounded-lg items-center">
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col items-center"
        
        >
          <label htmlFor="tabla">Nombre de Tabla</label>
          <input
            name="nombre"
            className="mt-4 bg-slate-500 rounded-lg text-white"
            type="text"
            placeholder="Nombre de tabla"
            value={newCompanyName}
            onChange={(e) => setNewCompanyName(e.target.value)}
          />
          <button
            className=" mt-4 bg-blue-600  w-fit py-1 rounded-md "
            onClick={createCompany}
            type="submit"
          >
            Crear Tabla
          </button>
        </form>
      </div>
    </div>
  );
}

export default TableCreate;
