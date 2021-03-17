import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Form from './Form/Form'
import ProductsList from './ProductsList/ProductsList'


function App() {
  return (
    <Router>

      <Switch>
        <Route path="/" exact render={() => <Form />} />
        <Route path="/products" exact render={() => <ProductsList />} />
      </Switch>

    </Router>
  );
}

export default App;
