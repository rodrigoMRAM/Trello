import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="flex items-center flex-row  w-full h-12  bg-slate-700">
            <ul className="flex h-12 items-center ">
                <li>
                    <a className="text-white" href="">Trello</a>
                </li>
                <li className="ml-8">
                <Link to="/mistablas" className="text-white " >Tablas</Link>
                </li>
                <li className=" bg-blue-600 ml-8 py-1 rounded-md ">
                    <Link to="/crear" className="text-white px-3 py-6 ">CREAR</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;