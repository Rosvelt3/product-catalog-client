import React, { useState, useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";

import ProductCard from "./ProductCard";

const ProductList = ({ maxProducts, search = "", reverse }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = "https://product-catalog-server.herokuapp.com";

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(`${API}/productos`);
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        throw err;
      }
    };
    getProducts();
  }, []);

  const renderProducts = () => {
    let filteredProducts = [...products];

    if (!filteredProducts) return false;
    if (reverse) filteredProducts = filteredProducts.reverse();

    filteredProducts = filteredProducts
      .slice(0, maxProducts ? maxProducts : filteredProducts.length)
      .filter((product) => {
        const productTitle = product.titulo.toLowerCase().trim();
        const searchValue = search.toLowerCase().trim();

        if (searchValue && productTitle.includes(searchValue)) {
          return true;
        } else if (!searchValue) {
          return true;
        } else {
          return false;
        }
      });

    const renderedProducts = filteredProducts.map((product) => (
      <ProductCard product={product} key={product.id} API={API}></ProductCard>
    ));

    return renderedProducts.length > 0 ? (
      renderedProducts
    ) : (
      <h2 className="text-muted py-5 text-center">
        No se encuentran productos
      </h2>
    );
  };

  return (
    <Row className="justify-content-center">
      {loading ? (
        <Spinner style={{ width: "5rem", height: "5rem" }} animation="border" />
      ) : (
        renderProducts()
      )}
    </Row>
  );
};

export default ProductList;
