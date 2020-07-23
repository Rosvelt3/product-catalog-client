import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

import ProductCard from "./ProductCard";

const ProductList = ({ maxProducts }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { title: "Producto 1", description: "Descripcion de producto 1" },
      { title: "Producto 2", description: "Descripcion de producto 2" },
      { title: "Producto 3", description: "Descripcion de producto 3" },
      { title: "Producto 4", description: "Descripcion de producto 4" },
      { title: "Producto 5", description: "Descripcion de producto 5" },
      { title: "Producto 6", description: "Descripcion de producto 6" },
      { title: "Producto 7", description: "Descripcion de producto 7" },
      { title: "Producto 8", description: "Descripcion de producto 8" },
      { title: "Producto 9", description: "Descripcion de producto 9" },
      { title: "Producto 10", description: "Descripcion de producto 10" },
      { title: "Producto 11", description: "Descripcion de producto 11" },
      { title: "Producto 12", description: "Descripcion de producto 12" },
      { title: "Producto 13", description: "Descripcion de producto 13" },
      { title: "Producto 14", description: "Descripcion de producto 14" },
      { title: "Producto 15", description: "Descripcion de producto 15" },
      { title: "Producto 16", description: "Descripcion de producto 16" },
    ]);
  }, []);

  const renderProducts = () => {
    if (maxProducts) {
      return products
        .slice(0, maxProducts)
        .map((product, index) => (
          <ProductCard product={product} key={index}></ProductCard>
        ));
    } else {
      return products.map((product, index) => (
        <ProductCard product={product} key={index}></ProductCard>
      ));
    }
  };

  return (
    <Row className="justify-content-center justify-content-sm-center">
      {renderProducts()}
    </Row>
  );
};

export default ProductList;
