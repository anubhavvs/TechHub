import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container className='py-3'>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={Product} />
          <Route path='/cart/:id?' component={Cart} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
