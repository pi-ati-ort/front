import React, { useState } from "react";
import { loginUser, getUser } from "../../api/apiService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const user = {
    username: username,
    password: password,
  };

  const loginUserHandler = async (event) => {
    event.preventDefault();
    try {
      const resp = await loginUser(user);
      const dbUser = await getUser(username);

      sessionStorage.setItem("token", resp.token);
      sessionStorage.setItem("name", dbUser.name);
      sessionStorage.setItem("username", dbUser.username);
      window.location.href = "/perfil";
    } catch (e) {
      localStorage.clear();
      console.log(e);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="">
        <div className="mt-32">
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Iniciar sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={loginUserHandler} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleUsername}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña{" "}
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handlePassword}
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-verde-idem px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Ingresar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Crea tu usuario haciendo click{" "}
            <a href="/register" className="font-semibold leading-6 verde-idem">
              aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
