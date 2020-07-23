import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="pt-5 pb-2">
      <Row>
        <Col xs={12} md={9} className="text-center text-md-left pb-1">
          &copy; {new Date().getFullYear()} Mi Catalogo. Todos los derechos
          reservados. <Link to="/politicas">Política de privacidad.</Link>
        </Col>
        <Col xs={12} md={3} className="text-center text-md-right">
          <a style={{ color: "#1778F2" }} href="#facebook">
            <i
              style={{ fontSize: "2rem" }}
              className="fab fa-facebook mr-2"
            ></i>
          </a>
          <a style={{ color: "#000000" }} href="#instagram">
            <i
              style={{ fontSize: "2rem" }}
              className="fab fa-instagram mr-2"
            ></i>
          </a>
          <a style={{ color: "#1DA1F2" }} href="#twitter">
            <i style={{ fontSize: "2rem" }} className="fab fa-twitter mr-2"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
