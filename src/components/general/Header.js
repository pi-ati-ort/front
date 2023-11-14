import React from "react";

import "./header.css";
import logo from "../../images/logo_imm.png";

const Header = () => {

  const goToHome = (e) => {
    e.preventDefault();
    window.location.href = "/";
  }
  
  return (
    <header className="flex flex-wrap w-full bg-verde-idem text-sm py-3">
      <nav className="relative w-full mx-auto px-4">
        <div className="">
         <img src={logo} alt="Intendencia de Montevideo" className="h-11" onClick={goToHome} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
