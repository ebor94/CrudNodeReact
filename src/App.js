import logo from "./img/cisa.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
//import CompShowsBlogs from './blog/ShowBlogs';

import Getproducts from "./products/product";
import ModalParametros from "./modal/modalParametros";

function App() {
  return (
    <div className="App">
      <Navbar fixed="top" sticky="top" bg="danger">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
        </Container>
        <ModalParametros />
      </Navbar>
      <Getproducts />
    </div>
  );
}

export default App;
