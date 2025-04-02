import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/User");
  };
  return (
    <div className="  justify-items-center  p-10 mr-2  ">
      <h1 className="text-3xl font-bold mb-4 ">
        Generation Thailand<br />Home - Admin Sector
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

      {/* <section className="flex gap-x-20 ">
        <P>Create User Here</P>
        <textarea className="bg-white border border-gray-300 ">

        </textarea>
        <div>

        </div>

        <div>

        </div>


      </section> */}
    </div>
  );
};

export default Admin;
