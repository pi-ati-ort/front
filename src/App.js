import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/general/Header";
import Footer from "./components/general/Footer";

import Home from "./components/home/Layout";
import Login from "./components/login/Layout";
import Register from "./components/register/Layout";
import Profile from "./components/profile/Layout";
import NotFound from "./components/general/NotFound";

import NewProject from "./components/profile/NewProject";
import Projects from "./components/profile/Projects";
import Visualize from "./components/profile/Visualize";
import Validate from "./components/profile/Validate";

function App() {
  return (
    <div className="h-screen">
      <header className="">
        <Header />
      </header>
      <div className="mt-24">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {sessionStorage.getItem("token") && (
            <>
              <Route path="/perfil" element={<Profile />} />
              <Route path="/nuevo" element={<NewProject />} />
              <Route path="/proyectos" element={<Projects />} />
              <Route path="/visualizar" element={<Visualize />} />
              <Route path="/validar" element={<Validate />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
