import React from "react";
import {
  Jumbotron,
  Form,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";

import Navigation from "../Navigation";
import Footer from "../Footer";

const Contact = () => {
  return (
    <>
      <Navigation />
      <Jumbotron className="text-center">
        <h1>¿Cómo podemos ayudarte?</h1>
        <h3>Envianos un mensaje</h3>
      </Jumbotron>
      <Container>
        <Row className="py-5">
          <Col xs={12} md={6}>
            <Form>
              <Form.Row className="justify-content-center">
                <Col>
                  <FormControl type="text" placeholder="Nombre" />
                </Col>
                <Col>
                  <FormControl type="text" placeholder="Apellido" />
                </Col>
              </Form.Row>
              <Form.Row className="justify-content-center pt-2">
                <Col>
                  <FormControl type="email" placeholder="Correo" />
                </Col>
                <Col>
                  <FormControl type="tel" placeholder="Telefono" />
                </Col>
              </Form.Row>
              <Form.Row className="pt-2">
                <Col xs={12}>
                  <FormControl as="textarea" placeholder="Mensaje" rows="5" />
                </Col>
              </Form.Row>
              <Form.Row className="pt-2">
                <Col xs={12}>
                  <Button
                    variant="outline-primary"
                    type="submit"
                    style={{ width: "100%" }}
                  >
                    Enviar
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
          <Col xs={12} md={4} className="m-auto pt-5 pt-md-0">
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
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
