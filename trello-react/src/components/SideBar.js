import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="w-72 pt-5 h-screen bg-slate-900">
      <Link
        to="/tabla"
        className="tablaTexto py-3 flex pl-4 w-full hover:bg-sky-700"
      >
        <span class="material-symbols-outlined">table_rows</span>
        <p className="ml-2">Tableros</p>
      </Link>
      <div className="tablaTexto pl-4 py-3 w-full flex hover:bg-sky-700">
        <span class="material-symbols-outlined">video_stable</span>
        <p className="ml-2">Plantillas</p>
      </div>
      <Link
        to="/"
        className="tablaTexto pl-12 py-3  w-full flex hover:bg-sky-700"
      >
        Inicio
      </Link>
    </div>
  );
}

export default SideBar;
