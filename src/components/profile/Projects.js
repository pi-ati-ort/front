import React, { useEffect, useState } from "react";

import { getProjects } from "../../api/apiService";

import Lottie from "react-lottie";
import animationData from "../general/loading.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [existsProjects, setExistsProjects] = useState(false);

  const [loading, setLoading] = useState(true);

  const username = sessionStorage.getItem("username");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
          setLoading(false);
        }
      } catch (error) {
        console.error("Error in fetchData: ", error);
      }
    };
    fetchData();
  }, [username]);

  return (
    <div className="container mx-auto min-h-screen mb-10">
      <h2 className="text-5xl font-semibold mt-12">Mis Proyectos</h2>
      {projects.length === 0 && !loading && (
        <>
          <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col border border-idem mt-12">
            <p className="text-center text-2xl mt-4 mb-4">
              No hay proyectos creados.
            </p>
            <p className="text-center text-lg mb-4">
              Crea uno nuevo{" "}
              <a className="text-idem" href="/nuevo">
                aquí.
              </a>
            </p>
          </div>
        </>
      )}

      {loading && (
        <div style={{ display: loading ? "block" : "none" }}>
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
      )}

      {existsProjects && (
        <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col border border-idem mt-12">
          <table className="table-auto">
            <thead>
              <tr className="uppercase font-bold text-sm">
                {/*<th className="px-4 py-2 text-left">Id</th> */}
                <th className="px-4 py-2 text-left">Nombre</th>
                <th className="px-4 py-2 text-left">Fecha</th>
                <th className="px-4 py-2 text-left">Esquema</th>
                <th className="px-4 py-2 text-left">BIM Id</th>
                <th className="px-4 py-2 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {projects
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .map((project, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    {/* <td className="px-4 py-2">{project.id}</td> */}
                    <td className=" px-4 py-2">{project.name}</td>
                    <td className=" px-4 py-2">
                      {project.created_at.slice(0, 10)}
                    </td>
                    <td className=" px-4 py-2">{project.schema}</td>
                    <td className=" px-4 py-2">{project.poid}</td>
                    <td className="py-2 text-right w-min">
                      <div className="flex flex-row text-end justify-end">
                        <button className="bg-white text-idem border-idem border-2 py-1 px-3 mx-2 rounded-md text-base font-semibold w-auto">
                          Más
                        </button>
                        <button className="bg-white text-idem border-idem border-2 py-1 px-3 rounded-md text-base font-semibold">
                          Visualizar
                        </button>
                        <button className="bg-verde-idem text-white border-idem border-2 py-1 px-3 rounded-md text-base font-semibold mx-2">
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
