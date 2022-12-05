import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { AddDetail } from "../data/products";
import { Getdetails } from "../data/products";
import ModalCart from "../modal/ModalCart";

function LoadingButton(props) {
  //material, description, price, quantity, discount

  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("Añadir Producto");
  const [variant, setVariant] = useState("danger");
  const [cart, Setcart] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isLoading) {
      //console.log(props)
      AddDetail(props.code, props.name, props.price, props.quantity, 0).then(
        (res) => {
          setMessage(res);
          setVariant("success");
          setLoading(false);
          if (res === "REGISTRO ACTUALIZADO") {
            Getdetails().then((cart) => Setcart(cart));
              setShow(true);
            setTimeout(props.handleClose(), 2000);
          
          }
        }
      );
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);
  };

  console.log("🚀 ~ file: AddDetail.js:40 ~ LoadingButton ~ cart", cart)
  console.log("🚀 ~ file: AddDetail.js:40 ~ LoadingButton ~ show", show)

  return (
    <fragment>
      <Button
        variant={variant}
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? "Espere…" : message}
      </Button>
      <ModalCart show={show} cart={cart} />
    </fragment>
  );
}

export default LoadingButton;
