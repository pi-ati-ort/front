import React from "react";

import newProject from "../../images/new.png";
import viewProjects from "../../images/projects.png";
import viewModel from "../../images/visual.png";
import validateNormative from "../../images/valid.png";

const Profile = () => {
  const array = [
    {
      title: "Nuevo Proyecto",
      description: "Crear un nuevo proyecto para el permiso de construcción.",
      buttonText: "Crear",
    },
    {
      title: "Ver Proyectos",
      description: "Visualiza los proyectos que has registrado en el sistema.",
      buttonText: "Ver",
    },
    {
      title: "Visualizar Modelo",
      description:
        "Visualiza el modelo de un proyecto a partir de un archivo IFC.",
      buttonText: "Visualizar",
    },
    {
      title: "Validar Normativa",
      description: "Visualiza los trámites que están en proceso de resolución.",
      buttonText: "Ver trámites",
    },
  ];

  return (
    <div className="">
      <p className="text-4xl text-center mt-12 mb-4 text-black font-bold">
        Te damos la bienvenida, {sessionStorage.getItem("name")}.
      </p>
      <p className="text-3xl text-center mb-10 text-black font-light">
        ¿Qué deseas hacer hoy?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-10 mx-72">
        {array.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 h-auto rounded-lg shadow-lg flex flex-col items-center justify-center border border-idem"
          >
            <span className="flex flex-row">
              {item.title === "Nuevo Proyecto" ? (
                <img src={newProject} alt="Icon" className="h-12 mr-6 mt-1" />
              ) : item.title === "Ver Proyectos" ? (
                <img src={viewProjects} alt="Icon" className="h-12 mr-6 mt-1" />
              ) : item.title === "Visualizar Modelo" ? (
                <img src={viewModel} alt="Icon" className="h-12 mr-6 mt-1" />
              ) : (
                <img src={validateNormative} alt="Icon" className="h-12 mr-6 mt-1" />
              )}
              <p className="text-3xl font-semibold mt-2 mb-8">{item.title}</p>
            </span>
            <p className="text-black mt-2 text-center">{item.description}</p>

            {item.buttonText !== "" && (
              <button className="bg-verde-idem text-white rounded-md py-2 px-12 text-base font-semibold mt-8 w-1/2 mx-auto">
                {item.buttonText}
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center mt-20"></div>
    </div>
  );
};

export default Profile;
