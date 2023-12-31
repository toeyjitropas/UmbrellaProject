import React from 'react';

export default function Login() {

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-1/2 p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="lg:text-3xl md:text-lg font-semibold text-center text-indigo-950">
                いらっしゃいませ! Middle Office 2.0
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-indigo-950 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-indigo-950 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-950 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-indigo-950 hover:underline"
                    >
                        Contact MDO Team admin
                    </a>
                </p>
            </div>
        </div>
    );
}