
import Image from "next/image";
import React from "react";
import sta from "../assets/sta.jpg";


const Ourmission = () => {
  return (
    <section className="flex flex-row">
      <div className="float-end bg-zinc-700 py-16  w-2/4">
        <div className="float-right">
          <div className="flex flex-row gap-1 mb-10">
            <div className=" bg-orange-400 w-1 top-0"></div>
            <p
              className=" text-white font-semibold text-2xl"
              style={{ wordSpacing: "2.5px" }}
            >
              Our Mission is Clear
            </p>
          </div>
          <div>
            <p className="text-orange-400 font-semibold text-lg w-3/5">
              The highest quality marketing for every client, on every project.
            </p>
          </div>
            <p className="text-gray-400 w-56 mt-6">
              The overarching mission of a digital marketing department is to
              drive measurable business growth by leveraging digital channels
              and strategies. They focus on building a strong online presence,
              engaging customers, generating leads, and using data to
              continuously optimize marketing efforts for better results.
            </p>
        </div>
      </div>
      <div className=" p-4 w-2/4 img-bg"></div>
    </section>
  );
};

export default Ourmission;
