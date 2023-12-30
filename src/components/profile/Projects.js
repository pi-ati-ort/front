import React, { useEffect, useState } from "react";

import { getProjects } from "../../api/apiService";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [existsProjects, setExistsProjects] = useState(false);

  const username = sessionStorage.getItem("username");

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      window.location.href = "/login";
    }
    const fetchData = async () => {
      try {
        const response = await getProjects(username);
        if (response) {
          setProjects(response);
          setExistsProjects(response.length > 0);
        }
      } catch (error) {
        console.error("Error in fetchData: ", error);
      }
    };
    fetchData();
  }, [username]);

  return (
    <div className="container mx-auto min-h-screen mb-28">
      <h2 className="text-5xl font-semibold mt-12">Mis Proyectos</h2>
      {!projects && (
        <>
          <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col border border-idem mt-12">
            <p className="text-center text-2xl mt-4 mb-4">
              No hay proyectos creados.
            </p>
            <p className="text-center text-lg mb-4">
              Crea uno nuevo{" "}
              <a className="text-idem" href="/nuevo">
                aquí
              </a>
            </p>
          </div>
        </>
      )}
      {existsProjects && (
        <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col border border-idem mt-12">
          <table className="table-auto">
            <thead>
              <tr className=" border-b-2 border-idem">
                <th className="px-4 py-2 text-left">Id</th>
                <th className="px-4 py-2 text-left">Fecha</th>
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">Esquema</th>
                <th className="px-4 py-2 text-left">BIM Id</th>
                <th className="px-4 py-2 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {projects
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .map((project, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{project.id}</td>
                    <td className=" px-4 py-2">
                      {project.created_at.slice(0, 10)}
                    </td>
                    <td className=" px-4 py-2">{project.name}</td>
                    <td className=" px-4 py-2">{project.schema}</td>
                    <td className=" px-4 py-2">{project.poid}</td>
                    <td className=" px-4 py-2 text-right">
                      <div className="flex flex-row justify-end">
                        <button className="bg-verde-idem text-white border-idem border-2 rounded-md py-2 text-base font-semibold w-1/3 mx-auto">
                          Visualizar
                        </button>
                        <button className="bg-white text-idem border-idem border-2 rounded-md py-2 text-base font-semibold w-1/3 mx-auto">
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Projects;
