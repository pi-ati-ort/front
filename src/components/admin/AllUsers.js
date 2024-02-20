import React, { useEffect, useState, useCallback } from "react";

import { getAllUsers, deleteUser } from "../../api/apiUser";
import { getProjectsByUser, deleteProject } from "../../api/apiProject";
import { getAllModelsByUser, deleteModelByProjectId } from "../../api/apiModel";

import Lottie from "lottie-react";
import animationData from "../../assets/loading.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [showDelete, setShowDelete] = useState(false);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await getAllUsers();
      if (response) {
        setUsers(response);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error in fetchData: ", error);
    }
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      window.location.href = "/login";
    }
    fetchUsers();
  }, [fetchUsers]);

  function showDeleteModal(user) {
    setShowDelete(true);
    setSelectedUser(user);
  }

  async function deleteUserById(user) {
    await deleteUser(user.id);
    const projects = await getProjectsByUser(user.username);
    if (projects) {
      projects.forEach(async (project) => {
        await deleteProject(project.id);
      });
    }
    const models = await getAllModelsByUser(user.username);
    if (models) {
      models.forEach(async (model) => {
        await deleteModelByProjectId(model.projectId);
      });
      setShowDelete(false);
      fetchUsers();
      toast.success("Usuario eliminado correctamente", {
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

  return (
    <div>
      <div className="container mx-auto min-h-screen mb-10">
        <h2 className="text-5xl font-semibold mt-12">Usuarios</h2>

        {loading ? (
          <div style={{ display: loading ? "block" : "none" }}>
            <Lottie
              animationData={animationData}
              style={{ height: "400px", width: "400px", margin: "auto" }}
            />{" "}
          </div>
        ) : (
          <div className="bg-white p-6 h-auto rounded-2xl shadow-lg flex flex-col border border-idem mt-12">
            <table className="table-auto">
              <thead>
                <tr className="uppercase font-bold text-sm">
                  <th className="px-4 py-2 text-left">Fecha</th>
                  <th className="px-4 py-2 text-left">Nombre</th>
                  <th className="px-4 py-2 text-left">Usuario</th>
                  <th className="px-4 py-2 text-left">Rol</th>
                  <th className="px-4 py-2 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className=" px-4 py-2">
                      {user.created_at.slice(0, 10)}
                    </td>
                    <td className=" px-4 py-2">{user.name}</td>
                    <td className=" px-4 py-2">{user.username}</td>
                    <td className=" px-4 py-2">
                      {user.role === "ADMIN" ? "Administrador" : "Arquitecto"}
                    </td>
                    <td className="py-2 text-right w-min">
                      <div className="flex flex-row text-end justify-end">
                        <button
                          disabled={user.role === "ADMIN"}
                          onClick={() => {
                            showDeleteModal(user);
                          }}
                          className={`border-2 py-1 px-3 rounded-md text-base font-semibold mx-2 ${
                            user.role === "ADMIN"
                              ? "bg-gray-300 text-gray-500 border-gray-300"
                              : "bg-verde-idem text-white border-idem"
                          }`}
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
                        Eliminar Usuario
                      </h2>
                      <p className="text-lg mt-4 mb-4">
                        ¿Estás seguro de que quieres eliminar el usuario{" "}
                        <b>{selectedUser.name}</b>?<br />
                        Se eliminarán todos sus proyectos y modelos. Esta acción
                        no se puede deshacer.
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
                              deleteUserById(selectedUser);
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

export default AllUsers;
