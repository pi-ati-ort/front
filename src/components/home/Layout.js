import React, { useState } from "react";
import "../../App.css";

import logo from "../../images/dbp_logo.png";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const GoToRepo = () => {
    window.open("https://github.com/pi-ati-ort", "_blank");
  };

  const ModalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
      <div className="min-h-screen">
        <div className="relative h-0" style={{ paddingBottom: "33.33%" }}>
          <img
            src={logo}
            alt="Permiso de contracción digital"
            className="mx-auto w-1/3 mt-4 absolute inset-0"
          />
        </div>
        <p className="text-4xl text-center mt-2 mb-4 text-black font-bold">
          Proyecto Integrador
        </p>
        <p className="text-lg text-center mb-8 text-black font-bold">
          Ampliación de sistema piloto de Permisos de Construcción <br />
          Digitales para la Intendencia de Montevideo
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
      {/*     <div className="flex flex-row justify-center mt-10">
        <span className="mx-4 w-full text-center">
          <button
            className="bg-slate-50 text-idem rounded-md py-3 text-lg font-semibold mx-auto px-20 border-2 border-idem mb-32"
            onClick={ModalHandler}
          >
            Sobre este proyecto
          </button>
        </span>
      </div>
      {modalIsOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
          onClick={ModalHandler}
        >
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-10 w-4/5">
            <div className="flex flex-col gap-4">
              <p className="text-3xl text-center text-black font-semibold">
                Sobre este proyecto
              </p>
              <p className="text-justify text-black">
                Este proyecto fue realizado por Nicolas Fernandez y Sebastian
                Paulos, estudiantes de la{" "}
                <a
                  href="https://www.ort.edu.uy/"
                  className="text-idem font-semibold"
                >
                  Universidad ORT Uruguay
                </a>{" "}
                como parte del Proyecto Integrador final de la carrera de
                Analista en Tecnologías de la Información.
              </p>
              <p className="text-justify text-black">
                El objetivo del mismo es desarrollar una aplicación web que
                permita a los usuarios realizar un seguimiento de los trámites
                que realizan ante la Intendencia de Montevideo. El objetivo del
                mismo es desarrollar una aplicación web que permita a los
                usuarios realizar un seguimiento de los trámites que realizan
                ante la Intendencia de Montevideo. El objetivo del mismo es
                desarrollar una aplicación web que permita a los usuarios
                realizar un seguimiento de los trámites que realizan ante la
                Intendencia de Montevideo. El objetivo del mismo es desarrollar
                una aplicación web que permita a los usuarios realizar un
                seguimiento de los trámites que realizan ante la Intendencia de
                Montevideo. El objetivo del mismo es desarrollar una aplicación
                web que permita a los usuarios realizar un seguimiento de los
                trámites que realizan ante la Intendencia de Montevideo. El
                objetivo del mismo es desarrollar una aplicación web que permita
                a los usuarios realizar un seguimiento de los trámites que
                realizan ante la Intendencia de Montevideo.
              </p>
              <p className="text-justify text-black">
                Para ello, se utilizaron las siguientes tecnologías:
              </p>
              <ul className="list-disc list-inside text-black">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
              </ul>
              <p className="text-justify text-black">
                El código fuente de este proyecto se encuentra disponible en
                github.
              </p>
            </div>
            <div className="flex justify-end mt-6 gap-3">
              <span>
                <button
                  className="btn-sm bg-slate-50 text-idem border-2 border-idem rounded-md py-2 px-3 text-sm font-semibold"
                  onClick={GoToRepo}
                >
                  Ver Repositorios
                </button>
              </span>
              <span>
                <button
                  className="btn-sm bg-verde-idem text-white rounded-md py-2 px-3 text-sm font-semibold border-2 border-idem"
                  onClick={ModalHandler}
                >
                  Cerrar
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
   */}
    </div>
  );
};

export default Home;
