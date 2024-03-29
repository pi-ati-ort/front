import React, { useEffect, useState, useRef, useCallback } from "react";

import { getAllModels, deleteModelByProjectId } from "../../api/apiModel";

import Lottie from "lottie-react";
import animationData from "../../assets/loading.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllModels = () => {
  const [models, setModels] = useState([]);
  const [existsModels, setExistsModels] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);

  const [loading, setLoading] = useState(true);
  const [showDelete, setShowDelete] = useState(false);

  const fetchModels = useCallback(async () => {
    try {
      const response = await getAllModels();
      if (response) {
        setModels(response);
        setLoading(false);
        setExistsModels(response.length > 0);
      }
    } catch (error) {
      console.error("Error in fetchData: ", error);
    }
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      window.location.href = "/login";
    }
    fetchModels();
  }, [fetchModels]);

  function showDeleteModal(model) {
    setShowDelete(true);
    setSelectedModel(model);
  }

  async function handleDeleteModel() {
    console.log(selectedModel.id);
    await deleteModelByProjectId(selectedModel.projectId);
    setShowDelete(false);
    fetchModels();
    toast.success("Modelo eliminado correctamente", {
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

  return (
    <div>
      <div className="container mx-auto min-h-screen mb-10">
        <h2 className="text-5xl font-semibold mt-12">Modelos</h2>
        {models.length === 0 && !loading && (
          <>
            <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col border border-idem mt-12">
              <p className="text-center text-2xl mt-4 mb-4">
                No hay modelos cargados.
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

        {existsModels && (
          <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col border border-idem mt-12">
            <table className="table-auto">
              <thead>
                <tr className="uppercase font-bold text-sm">
                  <th className="px-4 py-2 text-left">Fecha</th>
                  <th className="px-4 py-2 text-left">Archivo</th>
                  <th className="px-4 py-2 text-left">Usuario</th>
                  <th className="px-4 py-2 text-left">BIM Id</th>
                  <th className="px-4 py-2 text-right">Tamaño</th>
                  <th className="px-4 py-2 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {models.map((model, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className=" px-4 py-2">
                      {model.created_at.slice(0, 10)}
                    </td>
                    <td className=" px-4 py-2">{model.filename}</td>
                    <td className=" px-4 py-2">{model.username}</td>
                    <td className=" px-4 py-2">{model.bimId}</td>
                    <td className=" px-4 py-2 text-right">{model.size} MB</td>
                    <td className="py-2 text-right w-min">
                      <div className="flex flex-row text-end justify-end">
                        <button
                          onClick={() => {
                            showDeleteModal(model);
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
                        Eliminar Modelo
                      </h2>
                      <p className="text-lg mt-4 mb-4">
                        ¿Estás seguro de que quieres eliminar el modelo{" "}
                        {selectedModel.filename}? . Esta acción no se puede
                        deshacer.
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
                            onClick={handleDeleteModel}
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

export default AllModels;
