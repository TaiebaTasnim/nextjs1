import Image from "next/image";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Inconsolata} from "next/font/google";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import Progressbar from "@/components/Progreebar";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inconsolata" });

export default function Services() {
      const faqs = [
            {
              question: "Toyota Auris Touring Hybrid",
              answer: "Toyota Auris Touring Hybrid La Toyota Auris Touring Hybrid est un break hybride pratique, économique et spacieux. Elle combine moteur thermique et électrique pour une conduite fl",
              title:270,

              image: "/images/faq1.jpeg", // Ensure this image is in your public folder
            },
            {
              question: "Mercedes Classes V",
              answer: "Présentation du Mercedes Classe V La Mercedes Classe V est un monospace premium qui associe design sophistiqué, espace généreux et technologies avancées. Conçue pour les fami",
              title:90,
              image: "/images/faq2.jpg",
            },
            {
              question: "Tesla Model Y",
              answer: "Présentation du Tesla Model Y La Tesla Model Y est un SUV électrique polyvalent qui allie performance, autonomie et technologie de pointe. Conçue sur la même plateforme que la",
              title:60,
              image: "/images/faq3.jpg",
            },
          ];
          const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
   <div className={`${inconsolata.className} antialiased bg-white text-black`}>
      <Navbar />
       <div className="bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <Image
          src="/images/slide1.jpg"
          alt="car rental"
          fill
          className="object-cover"
          quality={100}
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg">
            Navigating the future of ocean transport with precision and reliability.
          </p>
        </div>
      </div>
      {/* about company */}
      <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/teslaY1.jpg" 
            alt="About Us"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-left">
        <h2 className="text-4xl font-bold text-black mb-4 tracking-wide">
          Meilleurs services de transport
        </h2>
        {/* Subheading */}
        <h3 className="text-2xl text-gray-700 font-semibold mb-6">
          Véhicules superbes
        </h3>
        {/* Description */}
        <p className="text-lg text-gray-600 mb-6">
          Nous offrons divers services dans le domaine des transports, comme indiqué ci-dessous.
        </p>
        {/* Services List */}
        <ul className="text-left text-lg text-black space-y-3">
          {[
            "Service de taxi",
            "Véhicule sur réservation",
            "Transport Maritime",
            "Aéroport transfert",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <FaCheck className="text-[#deba91]" /> {item}
            </li>
          ))}
        </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
        {/* Left Side - Text Content */}
        <div className=" p-10 rounded-lg">
        <h2 className="text-4xl font-bold text-black tracking-wide">
        Nous nous soucions de <br /> votre confort et de votre sécurité
      </h2>
      {/* Subtitle */}
      <h3 className="text-2xl text-[#deba91] font-semibold mt-4">
        Meilleurs conducteurs
      </h3>
      {/* Paragraph */}
      <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        Le meilleur conducteur allie expertise, sécurité et professionnalisme
        pour offrir une expérience de voyage agréable et fiable.
      </p>

      <button className="mt-6 px-10 py-4 border border-[#deba91] text-gray-700 transition-all relative overflow-hidden group ">
  {/* "+" transforms into a circle */}
  <span className="relative z-10 flex items-center gap-2">
    {/* "+" by default, transforms into a circle on hover */}
    <span className="transition-all duration-500 group-hover:scale-0 text-[#deba91] text-2xl">+</span>
    <span className="absolute  opacity-0 w-0 h-0 bg-[#deba91] rounded-full transition-all duration-200 group-hover:opacity-100 group-hover:w-3 group-hover:h-3"></span>
    <span className="text-lg">VOIR PLUS</span>
  </span>
</button>
         
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src="/images/Mercedes_ClassV22.jpg" // Update with the correct image path
            alt="Luxury Car"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
    <div className="mt-20">
      <Progressbar></Progressbar>
    </div>

    <div className="relative container mx-auto h-[500px] flex items-center justify-center text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('/images/gallery3.jpg')" }} 
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 "></div>

      {/* Text Content */}
      <div className="relative z-10 text-center  ">
        <h2 className="text-3xl md:text-5xl font-bold">Obtenez votre meilleur trajet!</h2>
         <div className="flex items-center  gap-6 justify-center mt-4">
                      <Image src='/images/icon1.png' alt="Logo" width={30}
                   height={30}  />
                        <p className=" text-lg  ">
                        Appelez-nous : +41 79 576 39 79  </p>
                      </div>
        
       
      </div>
    </div>
    {/* FAQ section */}
    <div className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-black text-center mb-10">
        Foire Aux Questions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Questions List */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                className="w-full text-left text-lg font-semibold flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="text-[#deba91] text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                  <span className="text-lg font-semibold text-gray-800"><span className="text-base align-super">CHF</span> <span className="text-xl font-bold ">{faq.title}</span><span className="text-base align-sub"> per hours</span></span>

                </div>

              )}
            </div>
          ))}
        </div>

        {/* Right: Answer Image */}
        <div className="relative w-full h-80">
          {activeIndex !== null && (
            <Image
              src={faqs[activeIndex].image}
              alt="FAQ Answer Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          )}
        </div>
      </div>
    </div>
     
    </div>
    <Footer />
   </div>
  );
}
