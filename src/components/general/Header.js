import React from "react";

import "./header.css";
import logo from "../../images/logo_imm.png";

const Header = () => {
  const goToHome = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <header className="flex-wrap w-full bg-verde-idem text-sm py-3">
      <nav className="relative w-full mx-auto px-4 flex flex-row">
        <span className="">
          <img
            src={logo}
            alt="Intendencia de Montevideo"
            className="h-11"
            onClick={goToHome}
          />
        </span>
        {sessionStorage.getItem("token") ? (
          <>
            <span className="flex flex-row gap-6 mx-auto">
              <div className="nav-menu flex justify-between">
                <div className="flex items-center justify-between flex-shrink-0 text-white mr-6">
                  <a
                    className="text-white no-underline hover:text-white hover:no-underline"
                    href="/profile"
                  >
                    <span className="text-base font-semibold">Perfil</span>
                  </a>
                </div>
              </div>
              <div className="nav-menu flex flex-wrap justify-between">
                <div className="flex items-center flex-shrink-0 text-white">
                  <a
                    className="text-white no-underline hover:text-white hover:no-underline"
                    href="/"
                    onClick={() => {
                      sessionStorage.clear();
                      window.location.href = "/";
                    }}
                  >
                    <span className="text-base font-semibold">Salir</span>
                  </a>
                </div>
              </div>
            </span>
            <div className="right-0">
              <p className="text-white font-semibold text-sm text-end">
                {sessionStorage.getItem("name")}
              </p>

              <p className="text-white font-light text-sm text-end">
                {sessionStorage.getItem("username")}
              </p>
            </div>
          </>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
