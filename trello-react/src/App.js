import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="bar flex ">
        <SideBar></SideBar>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
