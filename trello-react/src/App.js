import './App.css';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Tabla from './components/Tabla';
import Items from './components/Items';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="bar flex ">
      <SideBar></SideBar>
      <Tabla>
      </Tabla>
     
      </div>
    </div>
  );
}

export default App;
