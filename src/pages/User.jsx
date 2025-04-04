import React from "react";
import { Link, useNavigate } from "react-router-dom";
const User = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Admin");
  };
  return (
    
    <div className="  justify-items-center  p-10 mr-2 ">
    <h1 className="text-3xl font-bold mb-6 ">
      Generation Thailand<br /> Home - User Sector
    </h1>
<br />
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
<br />
<br />
<br />
    <table class="border-collapse border border-gray-400 w-4/4 bg-white shadow-md">
    <thead>
      <tr class="bg-gray-200">
        <th class="border border-gray-400 px-4 py-2">Name</th>
        <th class="border border-gray-400 px-4 py-2">Last Name</th>
        <th class="border border-gray-400 px-4 py-2">Position</th>
      </tr>
    </thead>
    <tbody class="">
      <tr>
        <td class="border border-gray-400 px-4 py-5"></td>
        <td class="border border-gray-400 px-4 py-5"></td>
        <td class="border border-gray-400 px-4 py-5"></td>
      </tr>
      <tr>
        <td class="border border-gray-400 px-4 py-5"></td>
        <td class="border border-gray-400 px-4 py-5"></td>
        <td class="border border-gray-400 px-4 py-5"></td>
      </tr>
      <tr>
        <td class="border border-gray-400 px-4 py-5"></td>
        <td class="border border-gray-400 px-4 py-5"></td>
        <td class="border border-gray-400 px-4 py-5"></td>
      </tr>
      

    </tbody>
  </table>


  </div>
  );
};

export default User;
