
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  { name: "PROFESSIONNEL", value: 95 },
  { name: "DISPONIBLE", value: 75 },
  { name: "CONFORTABLE", value: 90 },
  { name: "INTERNATIONAL", value: 65 },
];

export default function Progressbar() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    
      <section ref={ref} className="max-w-7xl mx-auto w-[90%] flex flex-col md:flex-row items-center gap-5 py-16 bg-white">
      {/* Left: Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full  md:w-1/2">
       <Image
                 src="/images/service1.jpg"
                 alt="car rental"
                 width={300}
                 height={300}
                 
                 className="object-cover"
                 quality={100}
               />
       
        <Image
                  src="/images/service2.jpg"
                  alt="car rental"
                  width={300}
                  height={300}
                  className="object-cover"
                  quality={100}
                />
        
      </div>

      {/* Right: Text & Progress Bars */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <h2 className="text-xl lg:text-3xl font-bold text-black mb-6">Le service dont vous avez besoin</h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index}>
              <div className="flex justify-between text-black text-sm font-semibold">
                <span>{service.name}</span>
                <span>{service.value}%</span>
              </div>
              <progress
                className="progress  w-full text-[#deba91] transition-all duration-1000"
                value={visible ? service.value : 0}
                max="100"
              ></progress>
            </div>
          ))}
        </div>
      </div>
    </section>

    
    
  );
}
