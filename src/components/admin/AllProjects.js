import React, { useEffect, useState, useRef, useCallback } from "react";

import { getProjects, deleteProject } from "../../api/apiProject";
import { getAllModels, deleteModelByProjectId } from "../../api/apiModel";

import Lottie from "lottie-react";
import animationData from "../../assets/loading.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [models, setModels] = useState([]);
  const [existsProjects, setExistsProjects] = useState(false);

  const [loading, setLoading] = useState(true);

  const showMoreRef = useRef(null);
  const showProjectsRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const [showDelete, setShowDelete] = useState(false);

  const fetchProjects = useCallback(async () => {
    try {
      const response = await getProjects();
      if (response) {
        setProjects(response);
        setExistsProjects(true);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error in fetchData: ", error);
    }
  }, []);

  const fetchModels = useCallback(async () => {
    try {
      const response = await getAllModels();
      if (response) {
        setModels(response);
      }
    } catch (error) {
      console.error("Error in fetchData: ", error);
    }
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      window.location.href = "/login";
    }
    fetchProjects();
    fetchModels();
  }, [fetchProjects, fetchModels]);

  function showDeleteModal(id) {
    setShowDelete(true);
    setSelectedProject(projects.find((project) => project.id === id));
    setSelectedModel(models.find((model) => model.projectId === id));
  }

  async function deleteProjectById(id) {
    await deleteProject(id);
    if (selectedModel) {
      await deleteModelByProjectId(selectedModel.id);
    }
    toast.success("Proyecto eliminado con éxito", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
    fetchProjects();
    setSelectedProject({});
    setShowDelete(false);
  }

  return (
    <div>
      <div className="container mx-auto min-h-screen mb-10">
        <div ref={showProjectsRef} />
        <h2 className="text-5xl font-semibold mt-12">Proyectos</h2>
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
            <Lottie
              animationData={animationData}
              style={{ height: "400px", width: "400px", margin: "auto" }}
            />{" "}
          </div>
        )}

        {existsProjects && (
          <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col border border-idem mt-12">
            <table className="table-auto">
              <thead>
                <tr className="uppercase font-bold text-sm">
                  <th className="px-4 py-2 text-left">Fecha</th>
                  <th className="px-4 py-2 text-left">Usuario</th>
                  <th className="px-4 py-2 text-left">Nombre</th>
                  <th className="px-4 py-2 text-left">Padrón</th>
                  <th className="px-4 py-2 text-left">BIM Id</th>
                  <th className="px-4 py-2 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className=" px-4 py-2">
                      {project.created_at.slice(0, 10)}
                    </td>
                    <td className=" px-4 py-2">{project.username}</td>
                    <td className=" px-4 py-2">{project.name}</td>
                    <td className=" px-4 py-2">{project.padron}</td>
                    <td className=" px-4 py-2">{project.poid}</td>
                    <td className="py-2 text-right w-min">
                      <div className="flex flex-row text-end justify-end">
                        <button
                          onClick={() => {
                            showDeleteModal(project.id);
                          }}
                          className="bg-verde-idem text-white border-idem border-2 py-1 px-3 rounded-md text-base font-semibold mx-2"
                        >
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
        {showDelete && (
          <div>
            <div className="fixed z-10 inset-0">
              <div className="items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0 m-20">
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
                <div className="mt-20 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle px-8 pt-6">
                  <div className="">
                    <div className="mt-1 mb-10 w-full">
                      <h2 className="text-2xl font-semibold">
                        Eliminar proyecto
                      </h2>
                      <p className="text-lg mt-4 mb-4">
                        ¿Estás seguro de que quieres eliminar el proyecto{" "}
                        <b>{selectedProject.name}</b>? <br />
                        Esta acción no se puede deshacer.
                      </p>
                      <div className="flex flex-row">
                        <span className="mx-auto origin-bottom-right right-0 mr-0">
                          <button
                            onClick={() => {
                              setShowDelete(false);
                            }}
                            className="bg-white text-idem border-idem border-2 py-2 px-3 rounded-md text-sm font-medium mr-4"
                          >
                            Cancelar
                          </button>
                          <button
                            onClick={() => {
                              deleteProjectById(selectedProject.id);
                            }}
                            className="bg-verde-idem text-white border-idem border-2 py-2 px-3 rounded-md text-sm font-medium"
                          >
                            Eliminar
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
        <div ref={showMoreRef} />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default AllProjects;
