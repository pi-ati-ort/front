import React, { Fragment, useState, useEffect } from "react";

import { Listbox, Transition } from "@headlessui/react";

import { getProjectsByUser } from "../../api/apiProject";
import { getAllModelsByUser } from "../../api/apiModel";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Lottie from "lottie-react";
import animationData from "../../assets/loading.json";

const Visualize = () => {
  const username = sessionStorage.getItem("username");

  const [projects, setProjects] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectName, setProjectName] = useState(null);
  const [modelName, setModelName] = useState("");

  const [loading, setLoading] = useState(null);
  const [uploaded, setUploaded] = useState(null);
  const [allowVisual, setAllowVisual] = useState(false);

  const [file, setFile] = useState(null);

  const HandleProject = (e) => {
    setSelectedProject(e);
    setProjectName(e.name);
  };

  const HandleIFCUpload = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      window.location.href = "/login";
    }
    setLoading(null);
    setUploaded(null);

    const fetchData = async () => {
      try {
        const response = await getProjectsByUser(username);
        if (response) {
          setProjects(response);
        }
      } catch (error) {
        console.error("Error in fetchData: ", error);
      }
      try {
        const modelsResponse = await getAllModelsByUser(username);
        if (modelsResponse) {
          setModels(modelsResponse);
        }
      } catch (error) {
        console.error("Error in fetchData: ", error);
      }
    };
    fetchData();
  }, [username]);

  const VisualizeProject = () => {
    if (allowVisual) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setUploaded(true);
      }, 1500);
    } else {
      toast.warning("Funcionalidad no implementada", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const SetVisualization = () => {
    setAllowVisual(!allowVisual);
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div>
        <div className="flex flex-row">
          <span>
            <h2 className="text-5xl font-semibold">Visualizar Modelo</h2>
          </span>
          {uploaded && (
            <>
              <span className="ml-auto">
                <a href="/visualizar">
                  <button className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-3 py-2 mx-auto border-2 border-idem mt-2">
                    Volver
                  </button>{" "}
                </a>
              </span>
            </>
          )}
          {!uploaded && (
            <span className="ml-auto">
              <button
                onClick={SetVisualization}
                className="bg-white text-white rounded-md btn-sm text-sm font-bold px-3 py-2 mx-auto border-2 border-white mt-2"
              >
                Visual
              </button>
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 items-center">
        {!uploaded && (
          <>
            <div className="col-span-1">
              <div className="bg-white h-32 p-4 rounded-2xl shadow-lg border border-idem mt-12">
                <h3 className="text-2xl font-semibold">Proyecto existente</h3>
                <div className="grid grid-cols-12 gap-4 mt-4 mr-4">
                  <div className="sm:col-span-8 lg:col-span-9">
                    <Listbox value={selectedProject} onChange={HandleProject}>
                      <div className="relative mt-2">
                        <Listbox.Button
                          className="relative w-full cursor-default rounded-lg border border-gray-300 bg-white py-2
                      px-3 pl-3 pr-10 text-left focus:outline-none focus:border-black focus-visible:border-black sm:text-sm"
                        >
                          <div className="grid grid-cols-12">
                            <div className="col-span-11">
                              {selectedProject || "Seleccione un proyecto"}
                            </div>
                            <span className="col-span-1 mx-auto ml-[90%]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                />
                              </svg>
                            </span>
                          </div>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                            {projects.length > 0 ? (
                              projects
                                .filter((item) =>
                                  models
                                    .map((model) => model.projectId)
                                    .includes(item.id)
                                )
                                .map((item, index) => (
                                  <Listbox.Option
                                    key={index}
                                    className={({ active }) =>
                                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                          ? "bg-verde-idem text-white"
                                          : "text-gray-900"
                                      }`
                                    }
                                    value={item.name}
                                  >
                                    {({ selected }) => (
                                      <>
                                        <span
                                          className={`block truncate ${
                                            selected
                                              ? "font-medium"
                                              : "font-normal"
                                          }`}
                                        >
                                          {item.name}
                                        </span>
                                        {selected ? (
                                          <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))
                            ) : (
                              <Listbox.Option
                                className="relative cursor-default select-none py-2 pl-10 pr-4 text-gray-600"
                                value="No hay proyectos"
                                disabled
                              >
                                <span className="block truncate font-normal">
                                  No hay proyectos creados
                                </span>
                              </Listbox.Option>
                            )}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                  <div className="sm:col-span-4 lg:col-span-3 w-full">
                    <button
                      className="bg-verde-idem text-white rounded-md btn-sm text-sm font-bold px-3 py-2 mx-auto border-2 border-idem mt-2 w-full"
                      onClick={VisualizeProject}
                    >
                      Visualizar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-white h-32 p-4 rounded-2xl shadow-lg border border-idem mt-12">
                <h3 className="text-2xl font-semibold">Cargar modelo</h3>
                <div className="grid grid-cols-5 gap-2 mt-6">
                  <div className="col-span-3">
                    <input
                      type="text"
                      disabled
                      value={modelName}
                      className="border border-gray-300 p-2 w-full rounded-md text-sm"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="fileUpload" className="cursor-pointer">
                      <button
                        className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-3 py-2 mx-auto border-2 border-idem w-full"
                        onClick={() =>
                          document.getElementById("fileUpload").click()
                        }
                      >
                        Cargar
                      </button>
                      <input
                        type="file"
                        id="fileUpload"
                        accept=".ifc"
                        style={{ display: "none" }}
                        onChange={(e) => {
                          HandleIFCUpload(e);
                          setModelName(e.target.files[0].name);
                        }}
                      />
                    </label>
                  </div>
                  <div className="col-span-1">
                    <button
                      className="bg-verde-idem text-white rounded-md btn-sm text-sm font-bold px-2 xl:px-4 py-2 mx-auto border-2 border-idem m-full"
                      onClick={VisualizeProject}
                    >
                      Visualizar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {loading && (
        <div style={{ display: loading ? "block" : "none" }}>
          <Lottie
            animationData={animationData}
            style={{ height: "400px", width: "400px", margin: "auto" }}
          />{" "}
        </div>
      )}
      {uploaded && (
        <div className="bg-white h-[630px] p-2 rounded-2xl shadow-lg border border-idem mt-6 mb-20 overflow-hidden">
          <h3 className="text-2xl font-semibold">{projectName}</h3>
          <iframe
            src="https://wikiifc.com/"
            title="IFC Wiki"
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      )}
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
  );
};

export default Visualize;
