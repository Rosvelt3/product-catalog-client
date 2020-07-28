import React, { useState } from "react";
import { Form, FormControl, Row, Col, Button, Spinner } from "react-bootstrap";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const API = "https://product-catalog-server.herokuapp.com";

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (!form.checkValidity()) {
      e.stopPropagation();
    } else {
      sendEmail();
    }

    setValidated(true);
  };

  const sendEmail = async () => {
    setLoading(true);
    try {
      await fetch(`${API}/email`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "isaias0005@gmail.com",
          to: "isaias0005@gmail.com",
          subject: "Formulario de contacto - Catalogo",
          html: `
          <p><b>Nombre: </b>${name}</p>
          <p><b>Apellido: </b>${lastName}</p>
          <p><b>Email: </b>${email}</p>
          <p><b>Teléfono: </b>${phone}</p>
          <p><b>Mensaje: </b>${message}</p>
          `,
        }),
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  return (
    <>
      {loading ? (
        <Row className="justify-content-center py-5">
          <Spinner
            style={{ width: "5rem", height: "5rem" }}
            animation="border"
          />
        </Row>
      ) : (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row className="justify-content-center">
            <Col>
              <FormControl
                required
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa tu nombre.
              </Form.Control.Feedback>
            </Col>
            <Col>
              <FormControl
                required
                type="text"
                placeholder="Apellido"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa tu apellido.
              </Form.Control.Feedback>
            </Col>
          </Form.Row>
          <Form.Row className="justify-content-center pt-2">
            <Col>
              <FormControl
                required
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa tu correo.
              </Form.Control.Feedback>
            </Col>
            <Col>
              <FormControl
                required
                type="tel"
                placeholder="Teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa tu numero de teléfono.
              </Form.Control.Feedback>
            </Col>
          </Form.Row>
          <Form.Row className="pt-2">
            <Col xs={12}>
              <FormControl
                required
                as="textarea"
                placeholder="Mensaje"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa tu mensaje.
              </Form.Control.Feedback>
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
      )}
    </>
  );
};

export default ContactForm;
