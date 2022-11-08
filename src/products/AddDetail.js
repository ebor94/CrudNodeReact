import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import {AddDetail } from  "../data/products"



function LoadingButton(props) {
  //material, description, price, quantity, discount
 
    const [isLoading, setLoading] = useState(false);
    const [message, setMessage] = useState("Añadir Producto")
    const [variant, setVariant] = useState("danger")
  
    

  useEffect(() => {
      if (isLoading) {
        //console.log(props)
        AddDetail(props.code, props.name, props.price, props.quantity, 0)
          .then((res) => {
            setMessage(res);
            setVariant("success");
              setLoading(false);
              if (res === "REGISTRO ACTUALIZADO") {
                  setTimeout(props.handleClose(), 2000);
              }
                       
               
          });
          
    }
  }, [isLoading]);

    const handleClick = () => {
        setLoading(true)

    };

  return (
    <Button
      variant={variant}
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Espere…" : message}
    </Button>
  );
}


export default LoadingButton