
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import CartPage from './components/files/cart';
import ContactUs from './components/files/contactus';
import Login from './components/files/login';
import SignUp from './components/files/registeration';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Link} from "react-router-dom";
import WishlistPage from './components/files/wishlist';
import { useState } from 'react';
function App() {
  const[popUp,setPopup]=useState(false);
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <Router>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/Loginpg" element={<Login/>} />
        <Route path="/Registerationpg" element={<SignUp/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
      </Routes>
    </Router>
      <Footer/>
    </div>
  );
}

export default App;