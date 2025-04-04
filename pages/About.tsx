import Image from "next/image";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Inconsolata} from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-inconsolata" });

export default function About() {
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
          <h1 className="text-5xl font-bold">We Rent</h1>
          <p className="mt-4 text-lg">
            Navigating the future of ocean transport with precision and reliability.
          </p>
        </div>
      </div>
      {/* about company */}
      <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="relative w-full h-[300px]">
          <Image
            src="/images/teslaY1.jpg" 
            alt="About Us"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="text-left">
          <h1 className="text-4xl font-bold text-[#000029]">Nous nous soucions de
          votre confort et de votre sécurité</h1>
          <p className="mt-4 text-lg text-[#deba91]">
          Meilleurs conducteurs
          </p>
          <p className="mt-4 text-lg text-gray-600">
          Nos meilleurs conducteurs vous assurent un trajet sécurisé, confortable et agréable. Professionnels et expérimentés, ils veillent à votre bien-être avec ponctualité et courtoisie. Voyagez en toute sérénité grâce à leur expertise et leur sens du service.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-16">
        {/* Left Side - Text Content */}
        <div className=" p-10 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Pour vos besoins quotidiens
          </h2>
          <p className="text-sm uppercase text-gray-500 tracking-widest mt-2">
            Tout simplement le meilleur
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Passez un agréable voyage!
          </p>

          {/* Stats Section */}
          <div className="mt-6 flex space-x-10">
            <div>
              <h3 className="text-5xl font-bold text-black">10<span className="text-3xl">+</span></h3>
              <p className="text-gray-600 text-lg">Années d&apos;expérience</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-black">15<span className="text-3xl">k</span></h3>
              <p className="text-gray-600 text-lg">Clients satisfaits</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-full h-[300px]">
          <Image
            src="/images/Mercedes_ClassV22.jpg" // Update with the correct image path
            alt="Luxury Car"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>

    <div className="relative container mx-auto h-[500px] flex items-center justify-center text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: "url('/images/gallery3.jpg')" }} 
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 "></div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold">Reliable Transportation Services</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          We offer the best and most efficient transportation solutions, ensuring comfort, safety, and punctuality.
        </p>
      </div>
    </div>
     
    </div>
    <Footer />
   </div>
  );
}
