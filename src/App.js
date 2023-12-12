import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Header from './components/general/Header';
//import Footer from './components/general/Footer';

import Home from './components/home/Layout';
import Login from './components/login/Layout';
import Register from './components/register/Layout';



function App() {
  return (
    <div className="">
      <header className="">
        <Header />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
