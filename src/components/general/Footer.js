import React from "react";

const Footer = () => {
  return (
    <footer className="bg-verde-idem text-white py-4 px-4 md:px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-2xl mb-1">2023</h3>
          <h4 className="font-bold text-xl mb-1">Proyecto Integrador</h4>
          <p className=" font-semibold mb-1 text-sm">
            Universidad ORT Uruguay{" "}
          </p>
          <p className="text-sm">Analista en Tecnologías de la Información</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg mb-2">Información</h3>
          <ul className="space-y-1">
            <li>
              <button className="text-sm">Sobre este Proyecto</button>
            </li>
            <li>
              <a className="text-sm" href="#">
                Sobre el Proyecto Piloto
              </a>
            </li>
            <li>
              <a className="text-sm" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center md:items-start space-y-2">
          <button className=" border-white border py-2 px-3 rounded-md text-white font-semibold mt-3">
            Ver Repositorios
          </button>
          <div className="flex flex-col text-white ml-6">
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
    </footer>
  );
};

export default Footer;
