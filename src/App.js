import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Includes
import Header from './includes/Header'
import Footer from './includes/Footer'
// import { ApiKey, Url, iniGA, history } from './includes/Config'

// Pages
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import NoMatch from './pages/NoMatch'

// Contexts
import { LanguageContextProvider } from './Context/LanguageContext'
import { CartContextProvider } from './Context/CartContext'
import { ProductsContextProvider } from './Context/ProductsContext'

function App() {
  return (
    <LanguageContextProvider>
      <CartContextProvider>
        <ProductsContextProvider>
          <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/cart' component={Cart} />
                <Route path='/checkout' component={Checkout} />
                <Route path='/order-complete' component={Checkout} />
                <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Router>
        </ProductsContextProvider>
      </CartContextProvider>
    </LanguageContextProvider>
  );
}

export default App;
