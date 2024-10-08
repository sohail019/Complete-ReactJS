import React from "react";
import { Link} from "react-router-dom";

export const Header = () => {
  return (
    <div class="2xl:container 2xl:mx-auto">
      <div class="bg-white rounded shadow-lg py-5 px-7">
        <nav class="flex justify-between">
          <div class="flex items-center space-x-3 lg:pr-16 pr-6">
            <a href="/" class="font-normal text-2xl leading-6 text-gray-800">
              Context API
            </a>
          </div>

          <ul class="hidden md:flex flex-auto space-x-2">
            <Link to="/login">
              <li class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white bg-teal-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
                Login
              </li>
            </Link>
            <Link to="/profile">
              <li class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded">
                Profile
              </li>
            </Link>
          </ul>
          <div class=" flex space-x-5 justify-center items-center pl-2">
            <div class="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                  stroke="#1F2937"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div class="animate-ping w-1.5 h-1.5 bg-teal-700 rounded-full absolute -top-1 -right-1 m-auto duration-200"></div>
              <div class=" w-1.5 h-1.5 bg-teal-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"></div>
            </div>

            <svg
              class="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                stroke="#1F2937"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="#1F2937"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </nav>
      </div>
    </div>
  );
};
