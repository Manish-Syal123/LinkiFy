import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi";
import { GiCurlyWing } from "react-icons/gi";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const { token, setToken } = useStoreContext();

  const onLogOuthandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN_LINKIFY");
    navigate("/login");
  };

  return (
    <header className="py-4 md:py-6 bg-gray-50">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="/"
              title=""
              className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 text-2xl font-extrabold"
            >
              {/* <img
                className="w-auto h-8"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/logo.svg"
                alt="Logo"
              /> */}
              <GiCurlyWing className="w-auto h-8 text-blue-600" />
              {/* <span className="text-blue-600">/</span> */}
              LinkiFy
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {!expanded ? (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
            <a
              href="#"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50"
            >
              {" "}
              Features{" "}
            </a>
            {/* <a
              href="/dashboard"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50"
            >
              {" "}
              Dashboard{" "}
            </a> */}
            <a
              href="/about"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50"
            >
              {" "}
              About{" "}
            </a>
          </div>

          <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
            {!token ? (
              <a
                href="/login"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white bg-gray-900 rounded-xl hover:bg-gray-600"
              >
                {" "}
                Login
              </a>
            ) : path === "/dashboard" ? (
              <button
                onClick={onLogOuthandler}
                className="inline-flex items-center justify-center px-4 py-1 text-base font-bold leading-7 cursor-pointer text-black border-2  bg-transparent rounded-sm hover:bg-gray-600 hover:text-white"
              >
                LogOut
              </button>
            ) : (
              <a
                href="/dashboard"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white bg-gray-900 rounded-xl hover:bg-gray-600"
              >
                Dashboard
              </a>
            )}
          </div>
        </div>

        {expanded && (
          <nav className="px-1 py-8">
            <div className="grid gap-y-7">
              <a
                href="#"
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50"
              >
                {" "}
                Features{" "}
              </a>
              {/* <a
                href="/dashboard"
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50"
              >
                {" "}
                Dashboard{" "}
              </a> */}
              <a
                href="/about"
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-xl hover:bg-gray-50"
              >
                {" "}
                About{" "}
              </a>
              {!token ? (
                <a
                  href="/login"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600"
                >
                  {" "}
                  Login{" "}
                </a>
              ) : (
                <a
                  href="/register"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600"
                >
                  Dashboard
                </a>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
