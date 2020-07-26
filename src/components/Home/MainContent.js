import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProductList from "../ProductList";

const MainContent = () => {
  return (
    <>
      <Container>
        <section>
          <h2 className="text-center text-sm-left pt-5">
            Ultimos productos agregados
          </h2>
          <ProductList maxProducts={4} reverse />
        </section>
      </Container>
      <Jumbotron className="text-center my-5">
        <h1>¿Tienes alguna duda?</h1>
        <p>Contactanos y te responderemos rápidamente</p>
        <p>
          <Link to="/contacto">
            <Button>Contacto</Button>
          </Link>
        </p>
      </Jumbotron>
    </>
  );
};

export default MainContent;
