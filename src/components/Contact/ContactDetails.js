import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactDetails = () => {
  return (
    <>
      <Row className="text-center">
        <Col sm={2}>
          <i className="fas fa-map-marker-alt"></i>
        </Col>
        <Col sm={10}>
          <span>Direccion</span>
        </Col>
      </Row>
      <Row className="text-center pt-3">
        <Col sm={2}>
          <i className="fas fa-phone-alt"></i>
        </Col>
        <Col sm={10}>
          <span>+1 000 0000</span>
        </Col>
      </Row>
      <Row className="text-center pt-3">
        <Col sm={2}>
          <i className="fas fa-envelope"></i>
        </Col>
        <Col sm={10}>
          <span>correo@mail.com</span>
        </Col>
      </Row>
    </>
  );
};

export default ContactDetails;
