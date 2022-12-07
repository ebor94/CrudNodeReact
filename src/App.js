import logo from "./img/cisa.png";
import "./App.css";
//import CompShowsBlogs from './blog/ShowBlogs';

import Getproducts from "./products/product";
import ModalParametros from "./modal/modalParametros";

function App() {

  
  return (
    <div className="App">
      <nav class="navbar navbar-default navbar-fixed-top">
        <img src={logo} className="App-logo" alt="logo" />
      </nav>
      <ModalParametros />
      <Getproducts />
    </div>
  );
}

export default App;
