import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

import Navigation from "../Navigation";
import Footer from "../Footer";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

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
            <ContactForm />
          </Col>
          <Col xs={12} md={4} className="m-auto pt-5 pt-md-0">
            <ContactDetails />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
