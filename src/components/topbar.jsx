import React from 'react';
import { FaBell } from 'react-icons/fa'; 'react-icons/fa6'

function Topbar({ children }) {
  return (
    <div className="bg-white h-full">
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-end items-center">
          <div className="flex space-x-3 items-center">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition duration-300"
            >
              <FaBell />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 transition duration-300"
            >
              {children.name}
            </a>
            <div className="h-9 w-9 flex justify-center items-center rounded-full bg-blue-900 text-white text-sm">
            <a
              href="#">
              {children.initial}
            </a>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Topbar;