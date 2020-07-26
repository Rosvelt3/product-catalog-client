import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product, API }) => {
  return (
    <Col className="pb-3 p-sm-3" xs={7} sm={6} md={4} lg={3}>
      <Card>
        <Card.Img variant="top" src={product.imagen.url ? API + product.imagen.url : "https://via.placeholder.com/150x100"}></Card.Img>
        <Card.Body>
          <Card.Title>{product.titulo}</Card.Title>
          <Card.Text className="text-truncate">{product.descripcion}</Card.Text>
          <Card.Link as={Link} to={"/producto/" + product.id}>
            Ver Mas
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
