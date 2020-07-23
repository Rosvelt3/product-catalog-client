import React, { useState } from "react";
import { Form, FormControl, Button, Container } from "react-bootstrap";

import Navigation from "../Navigation";
import Footer from "../Footer";
import ProductList from "../ProductList";

const Catalog = () => {
  const [productsCheck, setProductsCheck] = useState(true);
  const [coursesCheck, setCoursesCheck] = useState(true);

  return (
    <>
      <Navigation />
      <Container>
        <Form className="mt-5">
          <Form.Row className="justify-content-center">
            <FormControl
              style={{ maxWidth: "30rem", width: "60%" }}
              className="mr-sm-2"
              type="text"
              placeholder="Buscar en catalogo"
            />
            <Button variant="outline-primary">Buscar</Button>
          </Form.Row>
          <Form.Row className="justify-content-center pt-2">
            <Form.Check
              inline
              label="Productos"
              type="checkbox"
              checked={productsCheck}
              onChange={() => setProductsCheck(!productsCheck)}
            />
            <Form.Check
              inline
              label="Cursos"
              type="checkbox"
              checked={coursesCheck}
              onChange={() => setCoursesCheck(!coursesCheck)}
            />
          </Form.Row>
        </Form>
        <div className="pt-5">
          <ProductList />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Catalog;
