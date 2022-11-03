import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
 import { getPrice } from "../data/products";

function ProductPrice(props) {
    const [show, setShow] = useState(false);
    const [price, setPrice] = useState(0)
    const target = useRef(null);
    const code = props.MATERIAL;
    const viewPrice = async () => {
         getPrice(code).then((price) => {
           setPrice(price);
           setShow(!show);
         });
        
    }
  return (
    <>
      <Button
        variant="secondary"
        className="rounded-0"
        size="sm"
        ref={target}
        onClick={viewPrice}
      >
        Ver Precio
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            ${price}
          </Tooltip>
        )}
      </Overlay>
    </>
  );
}

export default ProductPrice;