"use client";

import { useState, ChangeEvent } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import { Inconsolata } from "next/font/google";
import Image from "next/image";
//import { Roboto } from 'next/font/google';
import Head from "next/head";

// const roboto = Roboto({
//   subsets: ['latin'],       
//   weight: ['400', '700'],   
//   variable: '--font-roboto', 
// })

// const inconsolata = Inconsolata({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-inconsolata",
// });

export default function Contact() {
      const [formData, setFormData] = useState<{
            email: string;
            name: string;
            phone: string;
            message: string;
          }>({
            email: "",
            name: "",
            phone: "",
            message: "",
          });

  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white text-black">
      <Head>
<title>Contactez-Montransfert</title>
</Head>
      
          <Navbar />
          
      <div className="">
        {/* Banner Section */}
              <div className="relative w-full h-[400px]">
                {/* Background Image */}
                <Image
                  src="/images/gallery3.jpg"
                  alt="car rental"
                  fill
                  className="object-cover"
                  quality={100}
                />
        
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/60"></div>
        
                {/* Title Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                  <h1 className="text-5xl font-bold">Contactez-nous</h1>
                  {/* <p className="mt-4 text-lg">
                  Découvrez notre engagement à fournir des solutions de transport fiables et sans faille pour tous vos besoins de voyage.
                  </p> */}
                </div>
              </div>
        <div className="max-w-7xl mx-auto w-[90%] pt-18">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-black">
              Avez-vous besoin d&apos;une voiture ? <br />
              Contactez-nous
            </h2>
            <p className="text-sm uppercase text-[#deba91] tracking-widest mt-2">
              MEILLEURE LOCATION DE VOITURE
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Location de voiture simple, rapide et abordable. Contactez-nous !
            </p>

            {/* Contact Details */}
            <div className="mt-6 space-y-4">
              <div className="flex gap-8 items-center">
              <div className="flex items-center space-x-3">
                {/* <span>📞</span> */}
                <Image src='/images/icon1.png' alt="Logo" width={30}
           height={30}  />
                
              </div>
              <div className=" items-center space-x-3">
                {/* <span>📧</span> */}
                <p className="text-lg text-black">
                  Tél: <a href="tel:+41795763979" >+41 79 576 39 79</a>
                </p>
                <p className="text-lg text-black">
                  Email: <a href="mailto:montransfert4@gmail.com" >montransfert4@gmail.com</a>
                </p>
              </div>
              </div>
              <div className="flex items-center space-x-3 gap-6">
              <Image src='/images/icon2.png' alt="Logo" width={30}
           height={30}  />
                <p className="text-lg text-black w-full lg:w-[30%]">
                  Route de la Croix-Blanche 1066, Epalinges, Suisse
                </p>
              </div>
              <div className="flex items-center space-x-3 gap-6">
              <Image src='/images/icon3.png' alt="Logo" width={30}
           height={30}  />
                <p className="text-lg text-black">Tous les jours, 7/7 - 24/24</p>
              </div>
            </div>
          </div>

          {/* Right Side - Google Map & Contact Form */}
          <div className="space-y-8">
            {/* Google Map */}
            <iframe 
            className="w-full h-[250px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.0738154129194!2d6.6680034!3d46.5462266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e7d07aeff99%3A0xf5cb12f0a69c9ca8!2sRte%20de%20la%20Croix-Blanche%2C%201066%20Epalinges%2C%20Switzerland!5e0!3m2!1sen!2sbd!4v1743968395581!5m2!1sen!2sbd" allowFullScreen
              loading="lazy"></iframe>
            {/* <iframe
              className="w-full h-[250px] rounded-lg"
              
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2765.041769072523!2d6.667920!3d46.543957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c30b7d27e6219%3A0x8e14c33e4e7d5d6d!2sRte%20de%20la%20Croix-Blanche%201066%2C%20Epalinges%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1640000000000"
              allowFullScreen
              loading="lazy"
            ></iframe> */}

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-black">Contact rapide</h3>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {["email", "nom", "téléphone", "message"].map((field, index) => (
                  <div
                    key={index}
                    className={`relative ${field === "phone" || field === "message" ? "col-span-2" : ""}`}
                  >
                    {field === "message" ? (
                      <textarea
                        name={field}
                        placeholder={`Votre ${field}`}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full py-2 border-b border-gray-200 focus:outline-none text-black transition-all duration-500 bg-gradient-to-r from-[#deba91] to-[#deba91] bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px]"
                      />
                    ) : (
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        placeholder={`Your ${field}`}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full py-2 border-b border-gray-200 focus:outline-none text-black transition-all duration-500 bg-gradient-to-r from-[#deba91] to-[#deba91] bg-[length:0%_2px] bg-no-repeat bg-bottom hover:bg-[length:100%_2px]"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Send Button */}
              <button className="mt-6 px-10 py-4 border border-[#deba91] text-gray-700 transition-all relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="transition-all duration-500 group-hover:scale-0 text-[#deba91] text-2xl">+</span>
                  <span className="absolute opacity-0 w-0 h-0 bg-[#deba91] rounded-full transition-all duration-200 group-hover:opacity-100 group-hover:w-3 group-hover:h-3"></span>
                  <span className="text-lg uppercase">Envoyer</span>
                </span>
              </button>
              
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
