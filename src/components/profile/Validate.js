import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Checkbox } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getProjects } from "../../api/apiProject";
import { getAllModels } from "../../api/apiModel";
import { evaluateDmn } from "../../api/apiNorms";

import Lottie from "lottie-react";
import animationData from "../../assets/loading.json";

import { normativas } from "../../utils/normativas";
import { dmnModels } from "../../utils/dmnModels";
import { dmnRequest } from "../../utils/dmnRequest";

import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

const Validate = () => {
  const [projects, setProjects] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedNormativas, setSelectedNormativas] = useState([]);
  const [selectedNormativa, setSelectedNormativa] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [loading, setLoading] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [normativasModal, setNormativasModal] = useState(false);
  const [evaluationResults] = useState([]);
  const [evalBooleans] = useState([]);

  const username = sessionStorage.getItem("username");
  const dmnContainerName = "DMN_1.0.0-SNAPSHOT";

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      window.location.href = "/login";
    }
    setLoading(null);
    setShowResults(false);
    setSelectedNormativas([]);

    const fetchData = async () => {
      try {
        const projectsResponse = await getProjects(username);
        if (projectsResponse) {
          setProjects(projectsResponse);
        }
      } catch (error) {
        console.error("Error in fetchData: ", error);
      }
      try {
        const modelsResponse = await getAllModels();
        if (modelsResponse) {
          setModels(modelsResponse);
        }
      } catch (error) {
        console.error("Error in fetchData: ", error);
      }
    };
    fetchData();
  }, [username]);

  const HandleProject = (e) => {
    setShowResults(false);
    setSelectedProject(e);
    models.forEach((model) => {
      projects.forEach((project) => {
        if (project.name === e && model.projectId === project.id) {
          setSelectedModel(model);
          setFileName(model.filename);
        }
      });
    });
  };

  const updateDmnRequest = async () => {
    let errorOccurred = false; // Add this line
    for (const dmnModel of dmnModels) {
      if (selectedModel.filename === dmnModel.name) {
        for (const dmn of dmnModel.dmn) {
          for (const selectedNormativa of selectedNormativas) {
            if (selectedNormativa.dmnApi[0] === dmn["model-name"]) {
              let newRequest = null;
              newRequest = { ...dmnRequest };
              newRequest["model-namespace"] = dmn["model-namespace"];
              newRequest["model-name"] = dmn["model-name"];
              Object.keys(dmn["dmn-context"]).forEach((key) => {
                if (dmn["dmn-context"][key] !== null) {
                  newRequest["dmn-context"][key] = {
                    ...dmn["dmn-context"][key],
                  };
                }
              });
              try {
                const response = await evaluateDmn(
                  dmnContainerName,
                  newRequest
                );
                //console.log("response", response);
                evaluationResults.push(response.data.result);
                const boolResult = obtainBoolResult(
                  response.data.result,
                  selectedNormativa.id
                );
                evalBooleans.push({
                  result: boolResult,
                  name: selectedNormativa.id,
                });
                console.log("evalBooleans", evalBooleans);
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  setShowResults(true);
                }, 1500);
              } catch (error) {
                console.error("Error in ValidateProject: ", error);
                if (!errorOccurred) {
                  // Add this line
                  errorOccurred = true; // Add this line
                  toast.error("Habilite el motor DMN", {
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
              }
            }
          }
        }
      }
    }
  };

  const ValidateProject = async () => {
    setShowResults(false);
    if (!selectedProject) {
      toast.error("Seleccionar un proyecto", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (!selectedNormativas.length > 0) {
      toast.error("Seleccionar normativas a validar", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    updateDmnRequest();
  };

  const handleNormativa = (id) => {
    normativas.forEach((norm) => {
      if (norm.id === id) {
        setSelectedNormativa(norm);
        setNormativasModal(true);
      }
    });
  };

  const handleAllNormativas = (id) => {
    normativas.map((norm) => {
      if (norm.id === id) {
        //console.log("norm", norm);
        if (selectedNormativas.includes(norm)) {
          const index = selectedNormativas.indexOf(norm);
          selectedNormativas.splice(index, 1);
        } else {
          selectedNormativas.push(norm);
        }
      }
      return selectedNormativas;
    });
  };

  const irANormativa = () => {
    //podriamos si hay tiempo pasarle el id y que cada boton lleve a su correspondiente normativa
    window.open("https://normativa.montevideo.gub.uy/volumenes", "_blank");
  };

  const obtainBoolResult = (resultado, name) => {
    return resultado["dmn-evaluation-result"]["dmn-context"][name];
  };

  return (
    <div className="container mx-auto min-h-screen">
      <h2 className="text-5xl font-semibold mt-12">Validar Normativa</h2>
      <div className="grid grid-cols-12 gap-8">
        <div className="sm:col-span-6 xl:col-span-5">
          <div className="bg-white h-auto p-4 rounded-2xl shadow-lg border border-idem mt-12 mb-32">
            <h3 className="text-2xl font-semibold mb-5">Normativas</h3>
            <ul className="">
              <li>
                <div className="flex flex-row ">
                  <Checkbox
                    onClick={() => {
                      handleAllNormativas("alturaMax");
                    }}
                    color="green"
                    id="alturaMax"
                  />
                  <label
                    htmlFor="alturaMax"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Altura Máxima{" "}
                  </label>
                  <span className="ml-auto justify-end">
                    <button
                      onClick={() => {
                        handleNormativa("alturaMax");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2"
                    >
                      Ver más
                    </button>
                  </span>
                </div>
              </li>

              <hr className="mt-4 mb-4" />

              <li>
                <div className="flex flex-row ">
                  <Checkbox
                    onClick={() => {
                      handleAllNormativas("constitucionDeVivienda");
                    }}
                    color="green"
                    id="constitucionDeVivienda"
                  />
                  <label
                    htmlFor="constitucionDeVivienda"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Constitución Vivienda
                  </label>
                  <span className="ml-auto justify-end">
                    <button
                      onClick={() => {
                        handleNormativa("constitucionDeVivienda");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2"
                    >
                      Ver más
                    </button>
                  </span>
                </div>
              </li>

              <hr className="mt-4 mb-4" />

              <li>
                <div className="flex flex-row ">
                  <Checkbox
                    onClick={() => {
                      handleAllNormativas("ConstruccionBasamento");
                    }}
                    color="green"
                    id="ConstruccionBasamento"
                  />
                  <label
                    htmlFor="ConstruccionBasamento"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Construcción Basamento
                  </label>
                  <span className="ml-auto justify-end">
                    <button
                      onClick={() => {
                        handleNormativa("ConstruccionBasamento");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2"
                    >
                      Ver más
                    </button>
                  </span>
                </div>
              </li>

              <hr className="mt-4 mb-4" />

              <li>
                <div className="flex flex-row ">
                  <Checkbox
                    onClick={() => {
                      handleAllNormativas("construccionGabilo");
                    }}
                    color="green"
                    id="construccionGabilo"
                  />
                  <label
                    htmlFor="construccionGabilo"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Construcción Gálibo
                  </label>
                  <span className="ml-auto justify-end">
                    <button
                      onClick={() => {
                        handleNormativa("construccionGabilo");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2"
                    >
                      Ver más
                    </button>
                  </span>
                </div>
              </li>

              <hr className="mt-4 mb-4" />

              <li>
                <div className="flex flex-row ">
                  <Checkbox
                    onClick={() => {
                      handleAllNormativas("FOS");
                    }}
                    color="green"
                    id="FOS"
                  />
                  <label
                    htmlFor="FOS"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Factor Ocupación Suelo
                  </label>
                  <span className="ml-auto justify-end">
                    <button
                      onClick={() => {
                        handleNormativa("FOS");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2"
                    >
                      Ver más
                    </button>
                  </span>
                </div>
              </li>

              <hr className="mt-4 mb-4" />

              <li>
                <div className="flex flex-row ">
                  <Checkbox
                    onClick={() => {
                      handleAllNormativas("medianerasVistas");
                    }}
                    color="green"
                    id="medianerasVistas"
                  />
                  <label
                    htmlFor="medianerasVistas"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Medianeras Vistas
                  </label>
                  <span className="ml-auto justify-end">
                    <button
                      onClick={() => {
                        handleNormativa("medianerasVistas");
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2"
                    >
                      Ver más
                    </button>
                  </span>
                </div>
              </li>

              <hr className="mt-4 mb-4" />

              <li>
                <div className="flex flex-row ">
                  <Checkbox
                    onClick={() => {
                      handleAllNormativas(
                        "superficieTotalMinimaVivienda-Dormitorios"
                      );
                    }}
                    color="green"
                    id="superficieTotalMinimaVivienda-Dormitorios"
                  />
                  <label
                    htmlFor="superficieTotalMinimaVivienda-Dormitorios"
                    className="ml-2 text-gray-700 text-2xl mt-1"
                  >
                    Superficie Mínima
                  </label>
                  <span className="ml-auto justify-end">
                    <button
                      onClick={() => {
                        handleNormativa(
                          "superficieTotalMinimaVivienda-Dormitorios"
                        );
                      }}
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-2 py-1 mx-2 border-2 border-idem mt-2"
                    >
                      Ver más
                    </button>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:col-span-6 xl:col-span-7">
          <div className="bg-white h-32 p-4 rounded-2xl shadow-lg border border-idem mt-12">
            <h3 className="text-2xl font-semibold">Seleccionar proyecto</h3>
            <div className="grid grid-cols-12 gap-4 mt-4 mr-4">
              <div className="2xl:col-span-10 sm:col-span-9">
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
                          projects.map((item, index) => (
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
                                      selected ? "font-medium" : "font-normal"
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
              <div className="2xl:col-span-2 sm:col-span-3">
                <button
                  className="bg-verde-idem text-white rounded-md btn-sm text-sm font-bold px-3 py-2 mx-auto mt-2 w-full"
                  onClick={ValidateProject}
                >
                  Validar
                </button>
              </div>
            </div>
          </div>
          {normativasModal && (
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
                  <div className="2xl:mt-16 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle px-8 pt-6">
                    <div className="overflow-y-auto max-h-[80vh]">
                      <div className="mt-4 mb-10 w-full">
                        <div className="text-3xl font-semibold">
                          {selectedNormativa.name}
                        </div>
                        <div className="text-lg mt-3 mb-3">
                          <span className="font-semibold text-xl">
                            Descripción: <br />
                          </span>
                          {selectedNormativa.description}
                        </div>
                        <br />
                        <div className="text-base">
                          <span className="font-semibold text-xl">
                            {" "}
                            Normativa:
                          </span>
                          <br />
                          {selectedNormativa.texto_normativo}
                        </div>
                        <div className="text-base mt-3 mb-3">
                          <span className="font-semibold text-xl">Valor:</span>{" "}
                          {selectedNormativa.valor} {selectedNormativa.unidad}
                        </div>
                        <div className="text-base">
                          <span className="font-semibold text-xl">
                            Normas:{" "}
                          </span>
                          {selectedNormativa.norma.map((norm, index) =>
                            index === selectedNormativa.norma.length - 1
                              ? norm + "."
                              : norm + ", "
                          )}
                        </div>
                        <div className="flex flex-row">
                          <span className="text-start">
                            <button
                              onClick={() => {
                                irANormativa();
                              }}
                              className="mt-2 bg-white text-idem border-idem border-2 py-1 px-2 rounded-md text-xs font-medium"
                            >
                              Ver Normativa
                            </button>
                          </span>
                          <span className="mx-auto origin-bottom-right right-0 mr-0">
                            <button
                              onClick={() => {
                                setNormativasModal(false);
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
          {loading && (
            <div style={{ display: loading ? "block" : "none" }}>
              <Lottie
                animationData={animationData}
                style={{ height: "400px", width: "400px", margin: "auto" }}
              />{" "}
            </div>
          )}
          {showResults && (
            <div className="col-span-10 sm:col-span-6">
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-idem mt-10 mb-44">
                <h3 className="text-3xl font-semibold">
                  Información del proyecto
                </h3>
                <div className="grid grid-cols-12 gap-4 mt-4 mr-4">
                  <div className="col-span-6 ml-4">
                    <p className="text-lg">
                      <span className="text-xl font-semibold">Nombre</span>
                      <br />
                      {selectedProject}
                    </p>
                  </div>
                  <div className="col-span-6">
                    <p className="text-lg">
                      <span className="text-xl font-semibold">Modelo</span>
                      <br />
                      {fileName.split(".")[0]}
                    </p>
                  </div>
                </div>
                <hr className="mt-4 mb-4" />
                <h3 className="text-3xl font-semibold">Resultados</h3>
                <div className="ml-3">
                  {selectedNormativas.length > 0
                    ? selectedNormativas.map((normativa, index) => {
                        const resultado = evaluationResults.find(
                          (res) =>
                            res["dmn-evaluation-result"]["model-name"] ===
                            normativa.dmnApi[0]
                        );

                        const evalBoolean = evalBooleans.find(
                          (evalBool) => evalBool.name === normativa.id
                        );

                        if (resultado && evalBoolean) {
                          return (
                            <div key={index}>
                              <div className="flex">
                                {evalBoolean.result === true ? (
                                  <FcCheckmark className="h-8 w-8 mt-4 mr-2" />
                                ) : (
                                  <FcCancel className="h-8 w-8 mt-4 mr-2" />
                                )}
                                <div className="text-xl font-semibold mt-4">
                                  {normativa.name}
                                </div>
                              </div>
                              <div className="text-lg mt-1">
                                {evalBoolean.result === true
                                  ? "Cumple"
                                  : "No Cumple"}
                              </div>
                              {selectedNormativas.length > 1 &&
                                selectedNormativas.indexOf(normativa) !==
                                  selectedNormativas.length - 1 && (
                                  <hr className="mt-2 mb-2" />
                                )}
                            </div>
                          );
                        }
                        return null;
                      })
                    : null}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
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

export default Validate;
