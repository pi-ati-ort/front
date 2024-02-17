import React, { Fragment, useState, useRef } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Tooltip, Typography } from "@material-tailwind/react";

import { newProject } from "../../api/apiProject";
import { uploadModelToDatabase } from "../../api/apiModel";

import Lottie from "lottie-react";
import animationData from "../general/loading.json";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ReactComponent as IfcSvg } from "../../assets/svg/ifc.svg";

const NewProject = () => {
  const [name, setName] = useState("");
  const [schema, setSchema] = useState("");
  const [description, setDescription] = useState("");
  const [padron, setPadron] = useState("");
  const [direccion, setDireccion] = useState("");

  const [loading, setLoading] = useState(null);
  const [uploading, setUploading] = useState(null);
  const [existsProjects, setExistsProjects] = useState(false);
  const [createdProject, setCreatedProject] = useState(null);

  const [file, setFile] = useState(null);

  const username = sessionStorage.getItem("username");

  const uploadAnchor = useRef(null);

  const schemaTypes = [
    { name: "IFC versión 1, 2 o 3", schema: "ifc2x3tc1" },
    { name: "IFC versión 4", schema: "ifc4" },
  ];

  const project = {
    name: name,
    schema: schema,
    username: username,
    description: description,
    padron: padron,
    address: direccion,
  };

  const scrollTo = () => {
    uploadAnchor.current.scrollIntoView({ behavior: "smooth" });
  };

  function reset() {
    setLoading(false);
    setUploading(false);
    setExistsProjects(false);
    setCreatedProject(null);
  }

  const CreateProject = async () => {
    reset();
    if (
      name.trim() === "" ||
      schema.trim() === "" ||
      padron.trim() === "" ||
      direccion.trim() === ""
    ) {
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
    setLoading(true);
    await newProject(project)
      .then((res) => {
        scrollTo();
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
  const HandleDescription = (e) => {
    setDescription(e.target.value);
  };

  const HandlePadron = (e) => {
    setPadron(e.target.value);
  };

  const HandleDireccion = (e) => {
    setDireccion(e.target.value);
  };

  const HandleIFCUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const model = {
    filename: file ? file.name : null,
    size: file ? file.size : null,
    projectId: createdProject ? createdProject.id : null,
    bimId: createdProject ? createdProject.poid : null,
  };

  const HandleUpload = () => {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    if (
      model.filename != null &&
      model.size != null &&
      model.projectId != null
    ) {
      uploadModelToDatabase(createdProject.id, model);
    }
    /* uploadModelToProject(createdProject.id, formData).then((res) => {
      console.log(res);
    }); */
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

    setTimeout(() => {
      window.location.href = "/proyectos";
    }, 3500);
  };

  return (
    <div className="container mx-auto min-h-screen">
      <h2 className="text-5xl font-semibold mt-12">Nuevo Proyecto</h2>
      <div className="bg-white p-6 h-auto rounded-2xl shadow-lg border border-idem mt-12">
        <div className="grid grid-cols-12">
          <div className="col-span-4 w-full">
            <label
              htmlFor="name"
              className="font-medium leading-6 text-gray-900"
            >
              <div className="flex">
                Nombre <span className="text-idem font-bold">*</span>{" "}
                <span className="ml-1 mt-0.5">
                  <Tooltip
                    placement="top"
                    className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                    content={
                      <div className="w-80">
                        <Typography
                          color="blue-gray"
                          className="font-medium"
                          children=""
                        ></Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-80"
                          children=""
                        >
                          El nombre debe ser único en todo el servidor BIM.
                        </Typography>
                      </div>
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#5CBE81"
                      strokeWidth={2}
                      className="h-5 w-5 cursor-pointer text-blue-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </Tooltip>
                </span>
              </div>
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
          <div className="col-span-1"></div>
          <div className="col-span-4 w-full ">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              <div className="flex">
                Esquema <span className="text-idem font-bold">*</span>{" "}
                <span className="ml-1 mt-0.5">
                  <Tooltip
                    placement="top"
                    className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                    content={
                      <div className="w-80">
                        <Typography
                          color="blue-gray"
                          className="font-medium"
                          children=""
                        ></Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-80"
                          children=""
                        >
                          Para que la validación normativa sea ejecutada
                          correctamente, el esquema debe ser IFC 4.
                        </Typography>
                      </div>
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#5CBE81"
                      strokeWidth={2}
                      className="h-5 w-5 cursor-pointer text-blue-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                      />
                    </svg>
                  </Tooltip>
                </span>
              </div>
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
                          value={item.schema}
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
          </div>
          <div className="col-span-2">
            <button
              className="bg-verde-idem text-white rounded-md py-2 px-4 text-base font-semibold mt-8 mx-auto ml-20 w-full"
              onClick={CreateProject}
            >
              Crear Proyecto
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-9 mt-2 w-full mb-2">
            <label
              htmlFor="name"
              className="font-medium leading-6 text-gray-900"
            >
              Descripción
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => HandleDescription(e)}
                id="description"
                name="description"
                type="text"
                autoComplete="description"
                required
                className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-7 mt-2 w-full mb-2">
            <label
              htmlFor="address"
              className="font-medium leading-6 text-gray-900"
            >
              Dirección<span className="text-idem font-bold">*</span>
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => HandleDireccion(e)}
                id="address"
                name="address"
                type="text"
                autoComplete="address"
                required
                className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-1 mt-2 w-full mb-2"></div>
          <div className="col-span-1 mt-2 w-full mb-2">
            <div className="flex">
              Padrón <span className="text-idem font-bold">*</span>{" "}
              <span className="ml-1 mt-0.5">
                <Tooltip
                  placement="top"
                  className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                  content={
                    <div className="w-80">
                      <Typography
                        color="blue-gray"
                        className="font-medium"
                        children=""
                      ></Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-80"
                        children=""
                      >
                        Una vez implementada la conexión con SIG, el padrón será
                        un campo autocompletado.
                      </Typography>
                    </div>
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#5CBE81"
                    strokeWidth={2}
                    className="h-5 w-5 cursor-pointer text-blue-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </Tooltip>
              </span>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => HandlePadron(e)}
                id="padron"
                name="padron"
                type="text"
                autoComplete="padron"
                required
                className="w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-sm mt-2 ml-3">
        <span>*</span> Campos obligatorios
      </p>
      {loading && (
        <div style={{ display: loading ? "block" : "none" }}>
          <Lottie
            animationData={animationData}
            style={{ height: "400px", width: "400px", margin: "auto" }}
          />
        </div>
      )}
      <div ref={uploadAnchor}></div>
      {existsProjects && (
        <>
          <div className="bg-white p-6 h-80 rounded-2xl shadow-lg flex flex-col border border-idem mt-4 mb-2">
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
                  onChange={HandleIFCUpload}
                />
                <label htmlFor="fileUpload" className="cursor-pointer">
                  {file ? (
                    <div className="flex">
                      <IfcSvg className="h-12 w-14 mr-2" />
                      <p className="text-gray-400">
                        Modelo: <b>{file.name.replace(".ifc", "")}</b> <br />
                        <span className="text-sm">
                          Tamaño:{" "}
                          <span className="font-medium">
                            <b> {Number(file.size / 1000000).toFixed(3)} MB.</b>
                          </span>
                        </span>
                      </p>
                    </div>
                  ) : (
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
                  )}
                </label>
              </div>
            )}
          </div>
          <div className="justify-end flex mb-20">
            <button
              onClick={HandleUpload}
              className={`${
                file
                  ? "bg-verde-idem text-white"
                  : "bg-white border-2 border-idem text-idem"
              } rounded-md py-2 text-base font-semibold mt-4 w-1/4 justify-self-end`}
              disabled={file ? false : true}
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
