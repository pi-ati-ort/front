import React, { Fragment, useState, useEffect, useRef, useMemo } from "react";

import { Listbox, Transition } from "@headlessui/react";

import { getProjects } from "../../api/apiProject";

import Lottie from "lottie-react";
import animationData from "../general/loading.json";

const Visualize = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectName, setProjectName] = useState(null);
  const [modelName, setModelName] = useState("");

  const [loading, setLoading] = useState(null);
  const [uploaded, setUploaded] = useState(null);

  const username = sessionStorage.getItem("username");

/*   const visualizer = useRef(null);
  const components = useMemo(() => new OBC.Components(), []);
   */
  
  const HandleProject = (e) => {
    setSelectedProject(e);
    setProjectName(e.name);
  };

  const LoadProject = () => {
    console.log(selectedProject);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      window.location.href = "/login";
    }
    setLoading(null);
    setUploaded(null);

   /*  if (visualizer.current) {
      components.renderer = new OBC.SimpleRenderer(
        components,
        visualizer.current
      );
      components.scene = new OBC.SimpleScene(components);
      components.renderer = new OBC.SimpleRenderer(components, visualizer);
      components.camera = new OBC.SimpleCamera(components);
      components.raycaster = new OBC.SimpleRaycaster(components);
      components.init();

      const scene = components.scene.get();

      components.camera.controls.setLookAt(10, 10, 10, 0, 0, 0);

      const grid = new OBC.SimpleGrid(components);

      const boxMaterial = new THREE.MeshStandardMaterial({ color: "#6528D7" });
      const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      const cube = new THREE.Mesh(boxGeometry, boxMaterial);
      cube.position.set(0, 1.5, 0);
      scene.add(cube);

      components.scene.setup();
      components.init(); 
    } */

    const fetchData = async () => {
      try {
        const response = await getProjects(username);
        if (response) {
          setProjects(response);
        }
      } catch (error) {
        console.error("Error in fetchData: ", error);
      }
    };
    fetchData();
  }, [username ]);

  const VisualizeProject = () => {
    console.log(selectedProject);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUploaded(true);
    }, 1500);
  };

  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex flex-row">
        <span>
          <h2 className="text-5xl font-semibold">Visualizar Modelo</h2>
        </span>
        {uploaded && (
          <span className="ml-auto">
            <a href="/visualizar">
              <button className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-3 py-2 mx-auto border-2 border-idem mt-2">
                Volver
              </button>
            </a>
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-8 items-center">
        {!uploaded && (
          <>
            <div className="col-span-1">
              <div className="bg-white h-32 p-4 rounded-2xl shadow-lg border border-idem mt-12">
                <h3 className="text-2xl font-semibold">Proyecto existente</h3>
                <div className="grid grid-cols-12 gap-4 mt-4 mr-4">
                  <div className="col-span-10">
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
                            {projects.map((item, index) => (
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
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>
                  <div className="col-span-2 mr-4">
                    <button
                      className="bg-verde-idem text-white rounded-md btn-sm text-sm font-bold px-3 py-2 mx-auto border-2 border-idem mt-2"
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
                <div className="grid grid-cols-12 gap-4 mt-6 mr-4">
                  <div className="col-span-8">
                    <input
                      type="text"
                      disabled
                      value={modelName}
                      className="border border-gray-300 p-2 w-full rounded-md text-sm"
                    />
                  </div>
                  <div className="col-span-2 mr-4">
                    <button
                      className="bg-white text-idem rounded-md btn-sm text-sm font-bold px-3 py-2 mx-auto border-2 border-idem"
                      onClick={LoadProject}
                    >
                      Cargar
                    </button>
                  </div>
                  <div className="col-span-2">
                    <button
                      className="bg-verde-idem text-white rounded-md btn-sm text-sm font-bold px-3 py-2 mx-auto border-2 border-idem"
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
        <div className="bg-white h-[600px] p-4 rounded-2xl shadow-lg border border-idem mt-12 mb-20">
          <h3 className="text-2xl font-semibold">{projectName}</h3>
          <div className="grid grid-cols-12 gap-4 mt-6 mr-4">
            <div className="col-span-12">
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Visualize;
