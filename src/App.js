import './App.css';
import { Home } from './Pages/Home';
import React from 'react';
import OrderCancellation from './Pages/orderCancellation';
import HelpCenter from './Pages/helpCenter.jsx';
import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import MainForm from './Pages/RegisterPage/mainForm';
import Cart from './Pages/cart';
import ProductDetails from './Pages/productDetails';
import ProductList from './Pages/productList';

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
          <Route path='/help' exact element={<HelpCenter/>}/>
          <Route path='/sp-cancel-order' exact element={<OrderCancellation/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;