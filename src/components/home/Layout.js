import React from "react";

import { retrieveTest } from "../../api/apiService";

const Home = () => {
  const LoginHandler = () => {
    window.location.href = "/login";
  };

  const RegisterHandler = () => {
    window.location.href = "/register";
  };

  const TestHandler = () => {
    retrieveTest()
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <header className="App-header">
        <p className="text-5xl text-center mt-32 mb-6 text-black font-bold">
          Proyecto Integrador
        </p>
        <p className="text-2xl text-center mb-20 text-black font-bold">
          Ampliación de sistema piloto de permisos de construcción
        </p>
      </header>
      <div className="flex flex-row justify-center mt-10">
        <span className="mx-4">
          <button
            className="bg-verde-idem text-white rounded-md py-3 px-12 text-lg font-semibold"
            onClick={LoginHandler}
          >
            Login
          </button>
        </span>
        <span className="mx-4">
          <button
            className="bg-verde-idem text-white rounded-md py-3 px-9 text-lg font-semibold"
            onClick={RegisterHandler}
          >
            Registro
          </button>
        </span>
        <span className="mx-4">
          <button
            className="bg-verde-idem text-white rounded-md py-3 px-9 text-lg font-semibold"
            onClick={TestHandler}
          >
            API test
          </button>
        </span>
      </div>
    </div>
  );
};

export default Home;
