import React from "react";

import logo from "../../assets/images/dbp_logo.png";

const NotFound = () => {
  return (
    <>
      <img
        src={logo}
        alt="Permiso de contracción digital"
        className="mx-auto w-1/5 mt-8"
      />
      <div className="text-idem text-9xl text-center font-extrabold">404</div>
      <p className="text-center text-black text-lg">
        La página que estás buscando no existe
      </p>
      <div className="flex flex-row justify-center">
        <span className="mx-4">
          <button
            className="bg-verde-idem text-white rounded-md py-3 px-12 text-base font-semibold mt-10"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Ir a inicio
          </button>
        </span>
      </div>
    </>
  );
};

export default NotFound;
