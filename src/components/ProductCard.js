import React from "react";
import { Col, Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Col className="pb-3 p-sm-3" xs={7} sm={6} md={4} lg={3}>
      <Card>
        <Card.Img
          variant="top"
          src="https://via.placeholder.com/150x100"
        ></Card.Img>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Link href="#">Ver Mas</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
