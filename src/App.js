import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Contact from "./components/Contact/Contact";
import Policies from "./components/Policies/Policies";
import NotFound from "./components/NotFound/NotFound";
import Product from "./components/Product/Product";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogo" component={Catalog} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/politicas" component={Policies} />
        <Route exact path="/producto/:id" component={Product} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
