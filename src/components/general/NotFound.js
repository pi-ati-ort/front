import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="text-idem text-9xl text-center mt-16">404</div>
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
