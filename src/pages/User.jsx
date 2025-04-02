import React from "react";
import { Link, useNavigate } from "react-router-dom";
const User = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Admin");
  };
  return (
    <div className="  justify-items-center  p-10 mr-2 ">
    <h1 className="text-3xl font-bold mb-4 ">
      Generation Thailand<br /> Home - User Sector
    </h1>

    <section className="flex gap-x-40">
    <button 
      onClick={handleNavigate}
      className="px-4 py-2  bg-white text-black rounded-md hover:bg-teal-700 transition font-bold shadow-2xl   "
    >
      User Home Sector
    </button>


    <Link
      to="/Admin"
      className="px-4 py-2  bg-white text-black rounded-md hover:bg-teal-700 transition font-bold shadow-2xl"
    >
      Admin Home Sector
    </Link>
    </section>



  </div>
  );
};

export default User;
