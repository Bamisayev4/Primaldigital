"use client"; // Mark this component as a Client Component
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import Logo from "../public/logo.svg"; // Make sure the path is correct
import Image from "next/image";
import TypingAnimation from "../animations/Hero"; // Ensure this path is correct

const images = [
  "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-PC-SMB-OneNote:VP4-1260x600",
  "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/OneNote-in-Education?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&qlt=100&fit=constrain",
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, scale:0.5 }}
    animate={{opacity:1,scale:1}} transition={{duration:1.5}}>
      <section className="flex items-center flex-col mx-auto h-screen overflow-hidden background-img px-44">
        <Navbar />

        <div className="inset-0 flex items-center justify-around container mx-auto py-20 m-4 z-10">
          <div className="max-w-lg">
            <TypingAnimation />
            <div className="flex flex-row mt-4">
              <div className=" bg-orange-400 w-3 top-0"></div>
              <h2 className="ml-4 text-slate-300">
                We provide luxury, boutique brands with digital marketing
                services including social media,SEO,PPC,etc.
              </h2>
            </div>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-t-lg rounded-b-lg mt-12">
              JOIN NOW
            </button>
          </div>
          <Image src={Logo} alt="Designo" width={400} height={400} />
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;
