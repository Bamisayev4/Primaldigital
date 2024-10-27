import Image from "next/image";
import Logo from "../Public/Logo.svg";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-44 py-7">
      <div className=" grid grid-cols-2 item-center justify-center">
        <div className="container mx-auto flex justify-between items-center ">
          <ul className="flex flex-col mx-auto text-xl ">
            <li className="flex gap-2 text-2xl pb-3">
              <span className="bg-orange-400 w-2"></span>Service
            </li>
            <li  className="text-slate-400">Search Engine Marketing</li>
            <li className="text-slate-400"> Mobile Marketing</li>
            <li className="text-slate-400">Content marketing</li>
            <li className="text-slate-400">Engagement Marketing</li>
            <li className="text-slate-400">Social Media Marketing</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col justify-center mx-auto w-2/4  text-xl  ">
            <li className="flex gap-2 text-2xl pb-3">
              <span className="bg-orange-400 w-2 "></span> Contact
            </li>
            <li className="flex text-slate-400">
              <FaLocationDot className="flex m-auto mx-0 items-center justify-center text-orange-600" />
              Denver, CO.
            </li>
            <li></li>
            <li className="text-slate-400">+1(512)837627</li>
          </ul>
        </div>
      </div>
      <p className="flex justify-center items-center p-4 text-sm text-gray-600">
        &copy;{new Date().getFullYear()} Copyright
      </p>
    </footer>
  );
};

export default Footer;
