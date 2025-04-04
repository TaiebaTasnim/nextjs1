import Image from "next/image";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Inconsolata} from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inconsolata" });

export default function Rental() {
  return (
   <div className={`${inconsolata.className} antialiased bg-white text-black`}>
      <Navbar />
       <div className="bg-white">
      {/* Banner Section */}
      <div className="relative w-full h-[400px]">
        {/* Background Image */}
        <Image
          src="/images/Car-Rental.webp"
          alt="car rental"
          fill
          className="object-cover"
          quality={100}
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl font-bold">We Rent</h1>
          <p className="mt-4 text-lg">
            Navigating the future of ocean transport with precision and reliability.
          </p>
        </div>
      </div>

      {/* Rental Transport Section */}
      <div className="mt-20 container mx-auto">
        <h2 className="text-4xl text-center font-semibold text-black mb-2">
          A wide variety of options
        </h2>
        <h2 className="text-lg text-center uppercase font-semibold text-[#deba91] mb-6">
          The best possibilities
        </h2>

        {/* Hybrid Toyota Auris Touring Hybrid */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/car.jpg"
            alt="Hybrid Toyota Auris Touring Hybrid"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="container mx-auto mt-6">
          <h2 className="text-4xl text-left font-semibold text-black">
            Hybrid Toyota Auris Touring Hybrid
          </h2>
          <h2 className="text-lg text-left uppercase font-semibold text-[#deba91] pb-10">
            Contact us for a free quote
          </h2>
        </div>

        {/* Van Rental */}
        <div className="relative w-full h-[500px]">
          <Image
            src="/images/van.jpg"
            alt="Van Rental"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="container mx-auto mt-6">
          <h2 className="text-4xl text-left font-semibold text-black">Van</h2>
          <h2 className="text-lg text-left uppercase font-semibold text-[#deba91] pb-10">
            Contact us for a free quote
          </h2>
        </div>
      </div>
    </div>
    <Footer />
   </div>
  );
}
