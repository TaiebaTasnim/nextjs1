"use client";
import React from "react";
//import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
//import dynamic from "next/dynamic";
 import { FaCheck } from "react-icons/fa";
 import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";



//  const CircularProgressbar = dynamic(
//       () => import("react-circular-progressbar").then((mod) => mod.CircularProgressbar),
//       { ssr: false }
//     );
//     const buildStyles = dynamic(
//       () => import("react-circular-progressbar").then((mod) => mod.buildStyles),
//       { ssr: false }
//     );

const SafetyQuality = () => {
      
  return (
    <section className="py-16 max-w-7xl mx-auto w-[90%] bg-white">
      <div className=" flex flex-col  lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-semibold text-black">Sécurité & Qualité</h2>
          <p className="text-sm tracking-widest text-gray-500 mt-1">QUE LE MEILLEUR<span role="img" aria-label="emoji">😊</span></p>
          <p className="text-lg text-gray-700 mt-4">
            At Monttransfert Sàrl, Nous offrons des services fiables avec un haut niveau de sécurité et de qualité. Nous garantissons:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-center"><FaCheck className="text-[#deba91] mr-2" /> Excellence & Fiabilité</li>
            <li className="flex items-center"><FaCheck className="text-[#deba91] mr-2" /> Conformité aux normes de sécurité</li>
            <li className="flex items-center"><FaCheck className="text-[#deba91] mr-2" /> Satisfaction client garantie</li>
          </ul>
          <p className="text-lg text-gray-700 mt-2">Faites-nous confiance pour des services sûrs et efficaces ! 🚀</p>
          {/* See More Button */}
          <Link href={'/About'}>
          <button className="mt-6 px-10 py-4 border border-[#deba91] text-gray-700 transition-all relative overflow-hidden group ">
  {/* "+" transforms into a circle */}
  <span className="relative z-10 flex items-center gap-2">
    {/* "+" by default, transforms into a circle on hover */}
    <span className="transition-all duration-500 group-hover:scale-0 text-[#deba91] text-2xl">+</span>
    <span className="absolute  opacity-0 w-0 h-0 bg-[#deba91] rounded-full transition-all duration-200 group-hover:opacity-100 group-hover:w-3 group-hover:h-3"></span>
    <span className="text-lg">VOIR PLUS</span>
  </span>
</button>
          </Link>
        </div>

        {/* Right Content */}
        <div className="flex flex-col md:flex-row justify-center md:justify-end  mt-10 md:mt-0 space-y-8 md:space-y-0 md:space-x-20 ">
  <div className="flex flex-col items-center">
    <div
      className="radial-progress text-[#deba91]"
      style={{
        "--value": "90",
        "--size": "12rem",
        "--thickness": "6px",
      }} /* as React.CSSProperties */
      aria-valuenow={90}
      role="progressbar"
    >
      90%
    </div>
    <p className="mt-2 text-gray-700 text-lg">Ecological</p>
  </div>
  <div className="flex flex-col items-center">
    <div
      className="radial-progress text-[#deba91]"
      style={{
        "--value": "99",
        "--size": "12rem",
        "--thickness": "6px",
      }} /* as React.CSSProperties */
      aria-valuenow={99}
      role="progressbar"
    >
      99%
    </div>
    <p className="mt-2 text-gray-700 text-lg">Customer satisfaction</p>
  </div>
</div>

        {/* <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0 space-x-8">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28">
              <CircularProgressbar 
                value={99} 
                text={`99%`} 
                styles={buildStyles({
                  textSize: "20px",
                  pathColor: "#000",
                  textColor: "#000",
                  trailColor: "#deba91",
                })}
              />
            </div>
            <p className="mt-2 text-gray-700 text-lg">Customer satisfaction</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28">
              <CircularProgressbar 
                value={90} 
                text={`90%`} 
                styles={buildStyles({
                  textSize: "20px",
                  pathColor: "#000",
                  textColor: "#000",
                  trailColor: "#deba91",
                })}
              />
            </div>
            <p className="mt-2 text-gray-700 text-lg">Ecological</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SafetyQuality;
