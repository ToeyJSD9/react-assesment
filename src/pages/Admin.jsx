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
      <br />
      <br />
      <div className=" pr-120 ">
        <p >Create User Here</p>
      </div>
      <section className="flex pt-10 gap-x-6">

        <div class="relative bg-white py-2  ">
          <div class="pointer-events-auto absolute ">
            <svg class="absolute h-5 w-5 text-gray-400">
            </svg>
          </div>
          <input type="text" placeholder="Name" class="" />

        </div>


        <div class="relative  bg-white py-2  ">
          <div class="pointer-events-auto absolute  ">
            <svg class="absolute h-5 w-5  text-gray-400">

            </svg>
          </div>
          <input type="text" placeholder="Last Name" class="" />
        </div>


        <div class="relative  bg-white py-2 ">
          <div class="pointer-events-auto absolute  ">
            <svg class="absolute h-5 w-5  text-gray-400">

            </svg>
          </div>
          <input type="text" placeholder="Position" class="" />
        </div>
        <button className="bg-purple-500 text-white  rounded-sm py-2 px-3">
          Save
        </button>
      </section>
      <br />
      <br />
      <br />
      <br />
      
        <table class="border-collapse border border-gray-400 w-4/4 bg-white shadow-md">
        <thead>
          <tr class="bg-gray-200">
            <th class="border border-gray-400 px-10 py-2">Name</th>
            <th class="border border-gray-400 px-10 py-2">Last Name</th>
            <th class="border border-gray-400 px-10 py-2">Position</th>
            <th class="border border-gray-400 px-10 py-2">Action</th>
          </tr>
        </thead>
        <tbody class="">
          <tr>
            <td class="border border-gray-400 px-10 py-3"></td>
            <td class="border border-gray-400 px-10 py-3"></td>
            <td class="border border-gray-400 px-10 py-3"></td>
            <td class="border border-gray-400 px-10 py-3 text-red-700 text-center ">Delete</td>
          </tr>
          <tr>
            <td class="border border-gray-400 px-10 py-3"></td>
            <td class="border border-gray-400 px-10 py-3"></td>
            <td class="border border-gray-400 px-10 py-3"></td>
            <td class="border border-gray-400 px-10 py-3 text-red-700 text-center ">Delete</td>
          </tr>
          


        </tbody>
      </table>
      



    </div>
  );
};

export default Admin;
