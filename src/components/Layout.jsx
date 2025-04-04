import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Layout = () => {
  const [users,setUsers] =useState(mockEmployees)
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className=" text-black p-4 shadow-md">
        <ul className="flex justify-end gap-8">
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Owner" className="hover:text-yellow-400">
              Owner
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-yellow-400">
              
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-yellow-400">
              
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-6 max-w-4xl mx-auto w-full">
        <Outlet context={{users,setUsers}}/>
      </div>
    </div>
  );
};

export default Layout;
