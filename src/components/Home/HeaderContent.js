import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeaderContent = () => {
  return (
    <Jumbotron className="text-center">
      <h1>Bienvenido a mi catalogo</h1>
      <p>Aqui en contraras todos los productos y cursos que necesitas</p>
      <p>
        <Link to="/catalogo">
          <Button>Ver Catalogo</Button>
        </Link>
      </p>
    </Jumbotron>
  );
};

export default HeaderContent;
