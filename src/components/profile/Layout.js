import React from "react";

const Profile = () => {
  return (
    <div>
      <p className="text-4xl text-center mt-16 mb-4 text-black font-semibold">
        Te damos la bienvenida, {sessionStorage.getItem("name")}.
      </p>
      <p className="text-3xl text-center mb-10 text-black font-light">
        ¿Qué deseas hacer hoy?
      </p>
    </div>
  );
};

export default Profile;
