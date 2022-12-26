import './App.css';
import { Home } from './Pages/Home';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import MainForm from './pages/RegisterPage/mainForm';
import Cart from './pages/cart';
import ProductDetails from './pages/productDetails';
import ProductList from './pages/productList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/product' exact element={<ProductList/>}/>
          <Route path='/cart' exact element={<Cart/>}/>
          <Route path='/details/:id' element={<ProductDetails/>}/>
          <Route path='/register' exact element={<MainForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;