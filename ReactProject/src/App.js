import './App.css';
import React from 'react';
import Registerpage from './components/registration';
import HomePage from './components/Home';
import Register from './components/Register';
import { Login } from '@mui/icons-material';
import Loginpage from './components/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import AdminDashboard from './components/admindashboard';
import NavBar from './pages/Header';
import Footer from './pages/Footer';
import About from './components/About';
import Destination1 from './components/Destination1';
function App() {
  return (
    <div className="App">
      <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/destination1" element={<Destination1/>}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
