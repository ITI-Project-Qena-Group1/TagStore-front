import './App.css';
import { Home } from './Pages/Home';
import React from 'react';
import OrderCancellation from './Pages/orderCancellation';
import HelpCenter from './Pages/helpCenter.jsx';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainForm from './Pages/RegisterPage/mainForm';
import Cart from './Pages/cart';
import ProductDetails from './Pages/productDetails';
import ProductList from './Pages/productList';
import authContext from './context/AuthContext';
import langContext from './context/LangContext';
import languagesObject from './Translations/languageObject';


function App() {
  const [isLogged, setIsLogged] = React.useState(false);
  const [selectedLang, setSelectedLang] = React.useState("en");
  const langObj = languagesObject;
  return (
    <authContext.Provider
      value={{
        isLogged: isLogged,
        setIsLogged: setIsLogged
      }}
    >
      <langContext.Provider
        value={{
          state: {
            lang: langObj[selectedLang],
            selectedLang: selectedLang
          },
          setSelectedLang: setSelectedLang,
        }}
      >
        <div className="App">
          <Router>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/product' exact element={<ProductList />} />
              <Route path='/cart' exact element={<Cart />} />
              <Route path='/details/:id' element={<ProductDetails />} />
              <Route path='/register' exact element={<MainForm />} />
              <Route path='/help' exact element={<HelpCenter />} />
              <Route path='/sp-cancel-order' exact element={<OrderCancellation />} />
            </Routes>
          </Router>
        </div>
      </langContext.Provider>
    </authContext.Provider>
  );
}

export default App;