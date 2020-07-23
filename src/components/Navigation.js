import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import BrandImage from "../assets/brand.svg";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              alt="Logo"
              src={BrandImage}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Mi Catalogo
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} exact activeClassName="active" to="/">
              Inicio
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              exact
              activeClassName="active"
              to="/catalogo"
            >
              Catálogo
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              exact
              activeClassName="active"
              to="/contacto"
            >
              Contacto
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              exact
              activeClassName="active"
              to="/politicas"
            >
              Política de privacidad
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
