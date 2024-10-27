import React from "react";
import Image from "next/image";
import fileimg from "../assets/file.png";
import analysis from "../assets/analysis.png";
import Ourmission from "./ourmission";

export const Courses: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col bg-slate-200 items-center py-16 justify-between gap-5 shadow text-center px-44">
        {/* <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Courses</h2>
      <div className="flex flex-wrap justify-center">
        {[
          "Software Development",
          "Graphic Design",
          "Product Design",
          "Cooking & Baking",
          "Fashion Design",
        ].map((course) => (
          <div key={course} className="group relative m-4">
            <div className="h-40 w-48 rounded-lg bg-black flex items-center justify-center transition-all duration-300">
              <span className="text-white text-lg p-5 group-hover:animate-bounce">
                {course}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg">
            <span className="text-lg text-white">
                {/* {course}  */}
        {/* </span>
            </div>
          </div>
        ))}
      </div> */}
        <div className="flex   flex-col justify-between gap-3 items-center">
          <div className="flex flex-row ">
            <div className=" bg-orange-400 w-2 top-0 "></div>
            <p className="ml-2 text-xl font-bold text-slate-800">
              Primal Solutions
            </p>
          </div>
          <p className="text-slate-400 w-3/5">
            Use tools like Google Analytics, social media insights, and surveys
            to gather data. Create buyer personas that define customer
            demographics, interests, and pain points to tailor campaigns
            effectively.
          </p>
        </div>
        <div className=" flex flex-row justify-between items-center gap-5">
          <div className="flex items-center text justify-center flex-row gap-4 ">
            <div className="p-4 rounded-full h-fit bg-white">
              <Image alt="mg" src={fileimg} width={90} height={110} />
            </div>
            <div className=" w-2/5 ">
              <div className="flex flex-row gap-1">
                <div className="bg-orange-400 w-2 top-0 h-5"></div>{" "}
                <p className="font-semibold text-slate-600">Client Services</p>
              </div>
              <h1 className="w-5/5 text-start text-slate-400">
                Get more leads, customers and sales by taking your out business
                online or improving your existing online slution
              </h1>
            </div>
          </div>
          <div className="flex items-center justify-center  flex-row gap-4 ">
            <div className="p-5 rounded-full h-fit bg-white">
              <Image alt='img' src={analysis} width={70} height={90} />
            </div>
            <div className=" w-2/5 ">
              <div className="flex flex-row gap-1">
                <div className="bg-orange-400 w-2 top-0 h-5"></div>{" "}
                <p className="font-semibold text-slate-600">Client Services</p>
              </div>
              <h1 className="w-5/5 text-start text-slate-400">
                Get all your web marketing work done while you concentrate on
                your business vision and product development
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Ourmission />
    </section>
  );
};
