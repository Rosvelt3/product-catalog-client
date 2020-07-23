import React from "react";
import { Container } from "react-bootstrap";

import Navigation from "../Navigation";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Navigation />
      <Container className="text-center">
        <div style={{ marginTop: "20%" }}>
          <h1 className="text-danger display-1">Error 404</h1>
          <h2>Página no encontrada</h2>
          <Link to="/">Volver a la Página de inicio</Link>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
