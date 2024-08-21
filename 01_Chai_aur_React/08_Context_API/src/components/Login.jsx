import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    // e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <div class="bg-gray-100 flex flex-col justify-center sm:py-12">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 class="font-bold text-center text-2xl mb-5">Login</h1>
          <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div class="px-5 py-7">
              <label class="font-semibold text-sm text-gray-600 pb-1 block">
                Username
              </label>
              <input
                type="text"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label class="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>
              <input
                type="password"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/profile">
              <input
                type="submit"
                class="transition duration-200 bg-teal-700 hover:bg-teal-600 focus:bg-teal-700 focus:shadow-sm focus:ring-4 focus:ring-teal-700 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block cursor-pointer"
                onClick={handleSubmit}
                />
                </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
