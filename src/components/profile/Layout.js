import React from "react";

import newProject from "../../images/new.png";
import viewProjects from "../../images/projects.png";
import viewModel from "../../images/visual.png";
import validate from "../../images/valid.png";

const Profile = () => {
  const menu = [
    {
      title: "Nuevo Proyecto",
      description: "Crear un nuevo proyecto para el permiso de construcción.",
      buttonText: "Crear",
    },
    {
      title: "Mis Proyectos",
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
      description: "Permite validar individualmente aspectos normativos en el proyecto.",
      buttonText: "Validar",
    },
  ];

  function handleButton(e) {
    e.preventDefault();
    if (e.target.innerHTML === "Crear") {
      window.location.href = "/nuevo";
    } else if (e.target.innerHTML === "Ver") {
      window.location.href = "/proyectos";
    } else if (e.target.innerHTML === "Visualizar") {
      window.location.href = "/visualizar";
    } else if (e.target.innerHTML === "Validar") {
      window.location.href = "/validar";
    }
  }

  return (
    <div className="min-h-screen">
      <p className="text-4xl text-center mt-9 mb-4 text-black font-bold">
        Te damos la bienvenida, {sessionStorage.getItem("name")}.
      </p>
      <p className="text-3xl text-center mb-10 text-black font-light">
        ¿Qué deseas hacer hoy?
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:mx-40 lg:mx-72">
        {menu.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col items-center justify-center border border-idem"
          >
            <span className="flex flex-row">
              {item.title === "Nuevo Proyecto" ? (
                <img src={newProject} alt="Icon" className="h-12 mr-6 mt-1" />
              ) : item.title === "Mis Proyectos" ? (
                <img src={viewProjects} alt="Icon" className="h-12 mr-6 mt-1" />
              ) : item.title === "Visualizar Modelo" ? (
                <img src={viewModel} alt="Icon" className="h-12 mr-6 mt-1" />
              ) : item.title === "Validar Normativa" ? (
                <img src={validate} alt="Icon" className="h-12 mr-6 mt-1" />
              ) : null}
              <p className="text-3xl font-semibold mt-2 mb-8">{item.title}</p>
            </span>
            <p className="text-black mt-2 text-center">{item.description}</p>

            {item.buttonText !== "" && (
              <button
                className="bg-verde-idem text-white rounded-md py-2 text-base font-semibold mt-8 w-1/3 mx-auto"
                onClick={handleButton}
              >
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
