import Image from "next/image";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Inconsolata} from "next/font/google";


const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inconsolata" });

export default function Maritime() {
  
  return (

   <div className={`${inconsolata.className} antialiased bg-white text-black`}>
     <Navbar />
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <Image
          src="/images/port1.jpg" // Ensure the image is inside the 'public/images/' folder
          alt="Maritime Banner"
          fill
          className="object-cover"
          quality={90}
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-bold">Maritime Excellence</h1>
          <p className="mt-4 text-lg">
            Navigating the future of ocean transport with precision and reliability.
          </p>
        </div>
      </div>

      {/* Transport Group */}
      <div className="mt-20 container mx-auto">
        <h2 className="text-4xl text-center font-semibold text-black mb-10">
          Transport Maritime et Groupage
        </h2>

        <div className="relative w-full h-[500px]">
          <Image
            src="/images/teslaY1.jpg"
            alt="Transport 1"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h2 className="text-5xl font-bold">Fast & Reliable Transport</h2>
            <p className="text-lg">Ensuring secure & efficient delivery</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto mt-6">
        <h2 className="text-4xl text-left font-semibold text-black">
          Montransfert Sàrl, 1066 Lausanne
        </h2>
        <h2 className="text-lg text-left uppercase font-semibold text-[#deba91] pb-10">
          Contactez-nous pour avoir plus de renseignements
        </h2>
      </div>

      <hr className="border border-[#deba91]" />
    </div>
    <Footer />
   </div>
  );
}
