import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg"; // Ensure the path is correct

export const Navbar: React.FC = () => {
  return (
    <header className="shadow w-full z-50 transparant">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href={"/"} className="flex flex-row ">
          <div className=" bg-orange-400 w-1 top-0"></div>
          <div>
            <p
              className="font-semibold ml-2 mt-0"
              style={{ letterSpacing: "3px" }}
            >
              PRIMAL{" "}
              <span
                className=""
                style={{ color: "rgba(255, 255, 255, 0.618)" }}
              >
                DIGITAL
              </span>
            </p>
            <p
              className="text-orange-400 ml-2"
              style={{
                fontSize: "11px",
                fontWeight: "600",
                lineHeight: "7px",
              }}
            >
              MARKETING
            </p>
          </div>
        </Link>
        <nav className="flex space-x-6">
          <Link
            href="#"
            className="text-white border-b-2 border-transparent hover:border-blue-500 transition duration-300 text-nav"
          >
            CULTURE
          </Link>
          <Link
            href="#"
            className="text-white border-b-2 border-transparent hover:border-blue-500 transition duration-300 text-nav"
          >
            SERVICE
          </Link>
          <Link
            href="#"
            className="text-white  border-b-2 border-transparent hover:border-blue-500 transition duration-300 text-nav"
          >
            CAREERS
          </Link>
          <Link
            href="#"
            className="text-white  border-b-2 border-transparent hover:border-blue-500 transition duration-300 text-nav"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
};
