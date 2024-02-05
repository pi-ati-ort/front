import React, { useState } from "react";

import logo from "../../assets/images/dbp_blanco.png";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const GoToRepo = () => {
    window.open("https://github.com/pi-ati-ort", "_blank");
  };

  const ModalHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <footer className="bg-verde-idem text-white py-4 px-4 md:px-4">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
        <div className=" flex flex-row">
          <div className="ml-6 mr-4">
            <img src={logo} alt="Logo IdeM" className="h-14" />
          </div>
          <div className="text-center md:text-left">
            <h3 className=" font-light text-2xl">2023</h3>
            <h4 className="font-extrabold text-xl mb-1">
              P.C.D. Proyecto Integrador
            </h4>
            <p className=" font-semibold text-sm">Universidad ORT Uruguay </p>
            <p className="text-xs">Analista en Tecnologías de la Información</p>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-extrabold mb-1">Información:</h3>
          <ul className="">
            <li>
              <button onClick={ModalHandler} className="text-xs">
                Sobre este Proyecto
              </button>
            </li>
            <li>
              <a className="text-xs" href="#">
                Sobre el Proyecto Piloto
              </a>
            </li>
            <li>
              <a className="text-xs" href="#">
                Otro enlace
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center md:items-start space-y-2">
          <button
            onClick={GoToRepo}
            className="border-white border py-2 px-3 rounded-md text-white font-semibold mt-3 text-sm"
          >
            Ver Repositorios
          </button>
          <div className="flex flex-col text-white ml-6 text-sm">
            <b>Autores:</b>
            <a
              href="https://www.linkedin.com/in/nicolas-fernandez-uy"
              target="_blank"
              rel="noreferrer"
            >
              Nicolas Fernandez
            </a>
            <a
              href="https://uy.linkedin.com/in/sebasti%C3%A1n-paulos-colotta-36a42564"
              target="_blank"
              rel="noreferrer"
            >
              Sebastian Paulos
            </a>
          </div>
        </div>
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
                  target="_blank"
                  rel="noreferrer"
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
              {/*   <span>
                <button
                  className="btn-sm bg-slate-50 text-idem border-2 border-idem rounded-md py-2 px-3 text-sm font-semibold"
                  onClick={GoToRepo}
                >
                  Ver Repositorios
                </button>
              </span> */}
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
    </footer>
  );
};

export default Footer;
