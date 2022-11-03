import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Addtocart from "./BtnAgregarProd"


function ProductList({ filteredProduct }) {
  console.log(filteredProduct);
  return (
    <div className="row">
      {filteredProduct.map(
        (
          {
            MATERIAL,
            DESCRIPCION,
            SUPERFICIE,
            TIPOLOGIA,
            FORMATO,
            CANTIDAD,
            TAMANO


          },
          index
        ) => {
          return (
            <Col key={index} xs={12} md={4} xl={4} className="mt-3">
              <Card>
              <Card.Title>{MATERIAL}</Card.Title>
              <Card.Title>{DESCRIPCION}</Card.Title>
                <Card.Body>
                {<Card.Img variant="top" className="card-img-top " src={`https://www.ceramicaitalia.com/temporada/${MATERIAL}.jpg`} />}
                <ListGroup variant="flush">
                    <ListGroup.Item>{SUPERFICIE}</ListGroup.Item>
                    <ListGroup.Item>{FORMATO}</ListGroup.Item>
                    <ListGroup.Item>{TIPOLOGIA}</ListGroup.Item>
                    <ListGroup.Item>{TAMANO}</ListGroup.Item>
                    <ListGroup.Item>Disponible {CANTIDAD}</ListGroup.Item>
                  </ListGroup>
                < Addtocart/>
                </Card.Body> 
              
              </Card>
            </Col>
          );
        }
      )}
    </div>
  );
}
export default ProductList;
