import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ setSearchValue }) => {
  const [searchText, setSearchText] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchValue(searchText);
  };

  return (
    <Form onSubmit={handleFormSubmit} className="mt-5">
      <Form.Row className="justify-content-center">
        <FormControl
          style={{ maxWidth: "30rem", width: "60%" }}
          className="mr-sm-2"
          type="text"
          placeholder="Buscar en catalogo"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button type="submit" variant="outline-primary">
          Buscar
        </Button>
      </Form.Row>
    </Form>
  );
};

export default SearchBar;
