import logo from "./img/cisa.png";
import "./App.css";
//import CompShowsBlogs from './blog/ShowBlogs';

import Getproducts from "./products/product";
import ModalParametros from "./modal/modalParametros";

function App() {
  return (
    <div className="App">
      <nav class="navbar bg-danger navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
          </div>
        </div>
      </nav>
      <ModalParametros />
      <Getproducts />
    </div>
  );
}

export default App;
