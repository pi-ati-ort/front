import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { newProject } from "../../api/apiProject";
import { uploadModelToProject } from "../../api/apiModel";

import Lottie from "lottie-react";
import animationData from "../general/loading.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewProject = () => {
  const [name, setName] = useState("");
  const [schema, setSchema] = useState("");

  const [loading, setLoading] = useState(null);
  const [uploading, setUploading] = useState(null);
  const [existsProjects, setExistsProjects] = useState(false);
  const [createdProject, setCreatedProject] = useState(null);

  const [file, setFile] = useState(null);

  const username = sessionStorage.getItem("username");

  const schemaTypes = ["IFC2X3", "IFC4"];

  const project = {
    name: name,
    schema: schema,
    username: username,
  };

  const CreateProject = async () => {
    if (name === "" || schema === "") {
      toast.error("Complete todos los campos", {
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
    console.log(project);
    console.log("Creando proyecto...");
    setLoading(true);
    await newProject(project)
      .then((res) => {
        console.log(res, "la respuesta");
        setExistsProjects(true);
        setCreatedProject(res);
        toast.success("Proyecto creado con éxito", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ocurrió un error", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const HandleName = (e) => {
    setName(e.target.value);
  };
  const HandleSchema = (e) => {
    setSchema(e);
  };

  const HandleUpload = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setUploading(true);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    uploadModelToProject(createdProject.id, formData).then((res) => {
      console.log(res);
      setTimeout(() => {
        setUploading(false);
        toast.success("Modelo cargado con éxito", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
      }, 1500);
    });
    //setTimeout(() => {
    // window.location.href = "/proyectos";
    //}, 2500);
  };

  return (
    <div className="container mx-auto min-h-screen">
      <h2 className="text-5xl font-semibold mt-12">Nuevo Proyecto</h2>
      <div
        className="bg-white p-6 h-aut
      
      o rounded-2xl shadow-lg flex items-center justify-center border border-idem mt-12"
      >
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
            <Listbox value={schema} onChange={HandleSchema}>
              <div className="relative mt-2">
                <Listbox.Button
                  className="relative w-full cursor-default rounded-lg border border-gray-300 bg-white py-2
                      px-3 pl-3 pr-10 text-left focus:outline-none focus:border-black focus-visible:border-black sm:text-sm"
                >
                  <div className="grid grid-cols-12">
                    <div className="col-span-11">
                      {schema || "Seleccione un esquema"}
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
                    {schemaTypes.map((item, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-verde-idem text-white"
                              : "text-gray-900"
                          }`
                        }
                        value={item}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {item}
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
        </div>

        <button
          className="bg-verde-idem text-white rounded-md py-2 text-base font-semibold mt-8 w-1/3 mx-auto ml-20"
          onClick={CreateProject}
        >
          Crear Proyecto
        </button>
      </div>
      {loading && (
        <div style={{ display: loading ? "block" : "none" }}>
          <Lottie
            animationData={animationData}
            style={{ height: "400px", width: "400px", margin: "auto" }}
          />
        </div>
      )}
      {existsProjects && (
        <>
          <div className="bg-white p-6 h-80 rounded-2xl shadow-lg flex flex-col border border-idem mt-12 mb-2">
            <h2 className="text-2xl font-semibold">Cargar Modelo</h2>
            {uploading ? (
              <div className="mt-0">
                <Lottie
                  animationData={animationData}
                  style={{ height: 200, width: 200, margin: "auto" }}
                />
              </div>
            ) : (
              <div className="h-96 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed">
                <input
                  type="file"
                  id="fileUpload"
                  accept=".ifc"
                  style={{ display: "none" }}
                  onChange={HandleUpload}
                />
                <label htmlFor="fileUpload" className="cursor-pointer">
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-14 w-14 text-gray-400 mx-auto"
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
                      Haz click aquí para cargar el archivo .ifc
                    </p>
                  </>
                </label>
              </div>
            )}
          </div>
          <div className="justify-end flex">
            <button
              onClick={HandleUpload}
              className="bg-verde-idem text-white rounded-md py-2 text-base font-semibold mt-4 w-1/4 justify-self-end "
            >
              Cargar
            </button>
          </div>
        </>
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
      />{" "}
    </div>
  );
};

export default NewProject;
