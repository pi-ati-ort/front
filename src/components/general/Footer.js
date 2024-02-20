import React, { useState } from "react";

import logo from "../../assets/images/dbp_blanco.png";

const Footer = () => {
  const [sobreNosModal, setSobreNosModal] = useState(false);
  const [sobrePilotoModal, setSobrePilotoModal] = useState(false);

  const GoToRepo = () => {
    window.open("https://github.com/pi-ati-ort", "_blank");
  };

  const handleSobreNosModal = () => {
    setSobreNosModal(true);
  };

  const handleSobrePilotoModal = () => {
    setSobrePilotoModal(true);
  };

  const handleDocumentoLink = () => {
    window.open(
      "https://nicolasfuy.s3.amazonaws.com/documentos/TESIS-ATI.pdf",
      "_blank"
    );
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
          <h3 className="font-extrabold mb-1">Información</h3>
          <ul className="">
            <li>
              <button onClick={handleSobreNosModal} className="text-xs">
                Sobre este proyecto
              </button>
            </li>
            <li>
              <button onClick={handleSobrePilotoModal} className="text-xs">
                Sobre el proyecto piloto
              </button>
            </li>
            <li>
              <button onClick={handleDocumentoLink} className="text-xs">
                Ver Documentación
              </button>
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
            <b>Autores</b>
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
      {sobreNosModal && (
        <div>
          <div className="fixed z-10 inset-0">
            <div className="items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0 m-20 2xl:mt-40">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle px-8 pt-6">
                <div className="overflow-y-auto max-h-[80vh]">
                  <div className="mt-4 mb-10 w-full">
                    <div className="">
                      <p className="text-3xl text-left text-black font-semibold mb-4">
                        Sobre este proyecto
                      </p>
                      <p className="text-justify text-black mb-3">
                        Este proyecto fue realizado por Nicolas Fernandez y
                        Sebastian Paulos, estudiantes de la{" "}
                        <a
                          href="https://www.ort.edu.uy/"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Universidad ORT Uruguay
                        </a>{" "}
                        como parte del Proyecto Integrador final de la carrera
                        de Analista en Tecnologías de la Información. El
                        proyecto final de carrera se enfoca en la expansión de
                        un proyecto existente, a traves de un nuevo proyecto que
                        utiliza los mismos lenguajes, el cual tiene como
                        objetivo principal la implementación de un sistema de
                        gestión de permisos de construcción digitales en la
                        Intendencia de Montevideo (IdeM). Este proyecto busca
                        abordar una serie de desafíos en la gestión de permisos
                        de construcción, relativos a los procesos de solicitud,
                        evaluación y aprobación de estos.
                      </p>
                      <p className="text-justify text-black mb-3">
                        El proyecto surge de las charlas técnicas que realiza la
                        empresa{" "}
                        <a
                          href="https://www.pyxis.tech/"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Pyxis
                        </a>{" "}
                        (Pyxis Open Tech), en la cual se presentó el proyecto
                        piloto que se realizó para la Intendencia de Montevideo.
                        A partir de esto, se entablaron las conversaciones con{" "}
                        <a
                          href="https://www.pyxis.tech/"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Pyxis Dev
                        </a>{" "}
                        y el{" "}
                        <a
                          href="https://www.fing.edu.uy/es/inco"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Instituto de Computación
                        </a>{" "}
                        de la Facultad de Ingeniería de la Universidad de la
                        República, los dos equipos responsables del proyecto
                        piloto, para poder realizar este proyecto final de
                        carrera.
                      </p>
                      <p className="text-justify text-black mb-3">
                        El alcance del proyecto incluye la incorporación de
                        nuevos subsistemas, un subsistema de acceso con varios
                        roles, un servidor BIM para el almacenamiento de modelos
                        IFC y este subsistema frontend que permite la
                        visualización e interacción con modelos 3D. La inclusión
                        de un Motor DMN (Decision Model and Notation) para
                        abordar requerimientos normativos como reglas de
                        negocio. También implica el establecimiento de una nueva
                        base de datos para almacenar información procesada, y un
                        subsistema backend para gestionar la comunicación
                        interna y externa de los nuevos módulos del sistema.
                      </p>
                      <p className="text-justify text-black mb-3">
                        El proyecto se realizó en un entorno de trabajo ágil,
                        utilizando la metodología Scrum. Las tecnologías
                        utilizadas en el desarrollo del proyecto fueron, en el
                        caso del{" "}
                        <a
                          href="https://github.com/pi-ati-ort/front"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          frontend
                        </a>
                        , JavaScript con React, y en el caso del{" "}
                        <a
                          href="https://github.com/pi-ati-ort/back"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          backend
                        </a>
                        , Java con Spring Framework. La base de datos utilizada
                        es postgreSQL.
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <span className="mx-auto origin-bottom-right right-0 mr-0">
                        <button
                          onClick={() => {
                            setSobreNosModal(false);
                          }}
                          className="bg-verde-idem text-white border-idem border-2 py-2 px-3 rounded-md text-sm font-medium"
                        >
                          Cerrar
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {sobrePilotoModal && (
        <div>
          <div className="fixed z-10 inset-0">
            <div className="items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0 m-20 2xl:mt-40">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle px-8 pt-6">
                <div className="overflow-y-auto max-h-[80vh]">
                  <div className="mt-4 mb-10 w-full">
                    <div className="">
                      <p className="text-3xl text-left text-black font-semibold mb-4">
                        Sobre el proyecto piloto
                      </p>
                      <p className="text-justify text-black mb-3">
                        El proyecto piloto busca dar respuesta al{" "}
                        <a
                          href="https://innovacionpublica.anii.org.uy/desafios/construccion-inteligente/"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          desafío
                        </a>{" "}
                        planteado por la Intendencia de Montevideo (
                        <a
                          href="https://montevideo.gub.uy"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          IdeM
                        </a>
                        ) y financiado por el Programa de Innovación en
                        Servicios Públicos de la Agencia Nacional de
                        Investigación e Innovación (
                        <a
                          href="https://anii.org.uy"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          ANII
                        </a>
                        ) y el Laboratorio del Banco Interamericano de
                        Desarrollo (
                        <a
                          href="https://bidlab.org/es"
                          className="text-idem font-semibold"
                          target="_blank"
                          rel="noreferrer"
                        >
                          BID
                        </a>
                        ), que permita la verificación automática del permiso de
                        construcción en Montevideo.
                      </p>
                      <p className="text-justify text-black mb-3">
                        Actualmente, este proceso se caracteriza por ser
                        intensivo en tiempo y propenso a errores humanos, dado
                        el volumen de solicitudes que se reciben anualmente, que
                        oscila entre 700 y 1500. En este contexto, se identifica
                        la oportunidad de implementar una solución digital que
                        automatice la evaluación del cumplimiento de la
                        normativa vigente, alineándose así con la estrategia de
                        modernización de la institución.
                      </p>
                      <p className="text-justify text-black mb-3">
                        El desafío planteado consistió en desarrollar una
                        herramienta que permita el procesamiento y chequeo
                        automáticos de las propuestas de arquitectura,
                        utilizando como insumos la normativa de edificaciones,
                        los datos geográficos disponibles en el Sistema de
                        Información Geográfica de la Intendencia de Montevideo y
                        el proyecto de arquitectura a evaluar. Proporcionando
                        una respuesta instantánea sobre el cumplimiento de la
                        normativa vigente y señale los aspectos en los que el
                        proyecto no se ajuste a dicha normativa, facilitando así
                        su corrección por parte del solicitante.
                      </p>
                      <p className="text-justify text-black mb-3">
                        Se establece que la solución debe ser escalable para
                        aplicarse a otros tipos de solicitudes y regímenes de
                        suelo, contemplando estándares de presentación para los
                        estudios de arquitectura. Se utilizan tecnologias de
                        codigo abierto e iniciativas de estandarización
                        internacional para el intercambio de información de
                        modelos.
                      </p>
                    </div>

                    <div className="flex flex-row">
                      <span className="mx-auto origin-bottom-right right-0 mr-0">
                        <button
                          onClick={() => {
                            setSobrePilotoModal(false);
                          }}
                          className="bg-verde-idem text-white border-idem border-2 py-2 px-3 rounded-md text-sm font-medium"
                        >
                          Cerrar
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
