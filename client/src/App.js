import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Registration from './pages/registration/Registration';
import Home from './pages/home/Home';
import ViewProduct from './pages/viewProduct/ViewProduct';
import Cart from './pages/cart/Cart.jsx';
import SearchAndFilter  from './pages/searchAndFilter/SearchAndFilter.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/viewProduct/:id" element={<ViewProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/searchandfilter" element={<SearchAndFilter/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App;

