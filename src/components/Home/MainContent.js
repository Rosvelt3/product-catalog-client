import React from "react";
import { Container } from "react-bootstrap";

import ProductList from "../ProductList";

const MainContent = () => {
  return (
    <Container>
      <section>
        <h2 className="text-center text-sm-left pt-5">
          Ultimos cursos agregados
        </h2>
        <ProductList maxProducts={4} />
      </section>
      <section>
        <h2 className="text-center text-sm-left pt-5">
          Ultimos productos agregados
        </h2>
        <ProductList maxProducts={4} />
      </section>
    </Container>
  );
};

export default MainContent;
