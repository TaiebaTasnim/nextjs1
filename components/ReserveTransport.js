'use client';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaSearch } from "react-icons/fa";

export default function ReserveTransport() {
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState(null);

  return (
    <div className="flex flex-col md:flex-row py-16  bg-white max-w-7xl mx-auto w-[90%]">
      <div className="w-full md:w-1/2  bg-white shadow-lg rounded-lg">
        <h2 className="text-lg font-bold text-blue-900 mb-4">Détails De Votre Trajet</h2>
        <div className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Sélectionnez la date"
              className="w-full focus:outline-none text-gray-500"
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaClock className="text-gray-500 mr-2" />
            <DatePicker
              selected={time}
              onChange={(date) => setTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
              placeholderText="Sélectionnez le temps"
              className="w-full focus:outline-none text-gray-500"
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input type="text" placeholder="Indiquez Un Lieu" className="w-full focus:outline-none text-gray-500" />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input type="text" placeholder="Indiquez Un Lieu" className="w-full focus:outline-none text-gray-500" />
          </div>
          <button className="bg-[#deba91] text-white font-bold py-2 px-4 w-full rounded-lg flex items-center justify-center">
            <FaSearch className="mr-2" /> Recherche
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2762.090569675925!2d6.632273215578537!3d46.51965397912748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c28d5c5a5f4f9%3A0x87c29b10e4b09b6a!2sLausanne%2C%20Switzerland!5e0!3m2!1sen!2sbd!4v1645881887156"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
