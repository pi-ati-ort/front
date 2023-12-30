import React, { useState } from "react";

import { newProject } from "../../api/apiService";

const NewProject = () => {
  const [name, setName] = useState("");
  const [schema, setSchema] = useState("");

  const [existsProjects, setExistsProjects] = useState(false);

  const username = sessionStorage.getItem("username");

  const CreateProject = () => {
    newProject(name, schema, username)
      .then((res) => {
        setExistsProjects(true);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const HandleName = (e) => {
    setName(e.target.value);
  };
  const HandleSchema = (e) => {
    setSchema(e.target.value);
  };

  return (
    <div className="container mx-auto min-h-full mb-28">
      <h2 className="text-5xl font-semibold mt-12">Nuevo Proyecto</h2>
      <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex items-center justify-center border border-idem mt-12">
        <div className="w-4/5 mr-6">
          <label htmlFor="name" className="font-medium leading-6 text-gray-900">
            Nombre
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => HandleName(e)}
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-4/5 ml-6">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Esquema
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => HandleSchema(e)}
              id="schema"
              name="schema"
              type="text"
              autoComplete="schema"
              required
              className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          className="bg-verde-idem text-white rounded-md py-2 text-base font-semibold mt-8 w-1/3 mx-auto ml-20"
          onClick={CreateProject}
        >
          Crear Proyecto
        </button>
      </div>
      {existsProjects && (
        <>
          <h2 className="text-2xl font-semibold mt-12">Cargar Modelo</h2>
          <div className="bg-white p-6 h-64 rounded-2xl shadow-lg flex flex-col border border-idem mt-3 mb-2">
            <div className="h-64 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <p className="text-gray-400">
                Arrastra y suelta el archivo .ifc aquí o haz click para cargarlo
              </p>
            </div>
          </div>
          <button className="bg-verde-idem text-white rounded-md py-2 text-base font-semibold mt-8 w-full mx-auto">
            Cargar
          </button>
        </>
      )}
    </div>
  );
};

export default NewProject;
