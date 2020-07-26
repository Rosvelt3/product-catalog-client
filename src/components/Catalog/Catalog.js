import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Navigation from "../Navigation";
import Footer from "../Footer";
import ProductList from "../ProductList";

import SearchBar from "./SearchBar";

const Catalog = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Navigation />
      <Container>
        <SearchBar setSearchValue={setSearchValue} />
        <div className="pt-5">
          <ProductList search={searchValue} />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Catalog;
