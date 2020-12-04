import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './App.css';
import ProductList from './components/Products/ProductList';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductList}/>
        <Route path="/product/:productId" exact component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
