import logo from "./img/cisa.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
            <Row className="justify-content-md-center">
              <Col md={4}>
                <img src={logo} className="App-logo" alt="logo" />
              </Col>

              <Col md={{ span: 4, offset: 4 }}>
                <ModalParametros />
              </Col>
            </Row>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Getproducts />
    </div>
  );
}

export default App;
