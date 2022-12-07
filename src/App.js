import logo from "./img/cisa.png";
import "./App.css";
//import CompShowsBlogs from './blog/ShowBlogs';

import Getproducts from "./products/product";
import ModalParametros from "./modal/modalParametros";

function App() {

  
  return (
    <div className="App">
      <header className="App-header navbar navbar-default navbar-fixed-top">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ModalParametros />
      <Getproducts />
    </div>
  );
}

export default App;
