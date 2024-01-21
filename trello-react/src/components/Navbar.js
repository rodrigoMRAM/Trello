function Navbar(){
    return(
        <div className="flex items-center flex-row  w-full h-12  bg-slate-700">
            <ul className="flex h-12 items-center ">
                <li>
                    <a className="text-white" href="">Trello</a>
                </li>
                <li>
                    <a className="text-white " href="">Tablas</a>
                </li>
                <li className="ml-8">
                    <a className="text-white " href="">Tablas</a>
                </li>
                <li className=" bg-blue-600 ml-8 py-1 rounded-md ">
                    <a className="text-white px-3 py-6 " href="">CREAR</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;