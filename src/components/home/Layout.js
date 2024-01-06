import React from "react";
import "../../App.css";

import logo from "../../images/dbp_logo.png";

const Home = () => {
  const LoginHandler = () => {
    if (!sessionStorage.getItem("token")) {
      window.location.href = "/login";
    } else {
      window.location.href = "/perfil";
    }
  };

  const RegisterHandler = () => {
    if (sessionStorage.getItem("token")) {
      window.location.href = "/perfil";
    } else {
      window.location.href = "/register";
    }
  };

  return (
    <div>
      <div className="min-h-screen">
        <div className="relative h-0" style={{ paddingBottom: "30%" }}>
          <img
            src={logo}
            alt="Permiso de contracción digital"
            className="mx-auto w-[30%] mt-2 absolute inset-0"
          />
        </div>
        <p className="text-5xl text-center mb-4 text-black font-bold">
          Proyecto Integrador
        </p>
        <p className="text-2xl text-center mb-10 text-black">
          Ampliación de sistema piloto de{" "}
          <b className=" font-extrabold">
            Permisos de Construcción <br />
            Digitales
          </b>{" "}
          para la Intendencia de Montevideo
        </p>
        <div className="flex flex-row justify-center">
          <span className="mx-4">
            <button
              className="bg-verde-idem text-white rounded-md py-3 px-12 text-lg font-semibold"
              onClick={LoginHandler}
            >
              Login
            </button>
          </span>
          <span className="mx-4">
            <button
              className="bg-verde-idem text-white rounded-md py-3 px-11 text-lg font-semibold"
              onClick={RegisterHandler}
            >
              Registro
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
