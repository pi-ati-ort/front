import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/general/Header";

import Home from "./components/home/Layout";
import Login from "./components/login/Layout";
import Register from "./components/register/Layout";
import Profile from "./components/profile/Layout";
import NotFound from "./components/general/NotFound";

function App() {
  return (
    <div className="h-screen">
      <header className="">
        <Header />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
