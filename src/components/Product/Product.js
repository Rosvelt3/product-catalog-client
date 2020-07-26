import React, { useState, useEffect } from "react";
import { Container, Spinner, Row, Image, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";

import Navigation from "../Navigation";
import Footer from "../Footer";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const API = "http://localhost:1337";

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`${API}/productos/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  return (
    <>
      <Navigation />
      <Container>
        <Row className="justify-content-center py-5">
          {loading ? (
            <Spinner
              style={{ width: "5rem", height: "5rem" }}
              animation="border"
            />
          ) : (
            <Row>
              <Col>
                <Image
                  src={
                    product.imagen.url
                      ? API + product.imagen.url
                      : "https://via.placeholder.com/150x100"
                  }
                  thumbnail
                />
              </Col>
              <Col>
                <h1>{product.titulo}</h1>
                <p style={{ maxWidth: "25rem" }} class="text-break">
                  {product.descripcion}
                </p>
                <Link to="/catalogo">Volver al catálogo.</Link>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Product;
