"use client";
import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const OrderSection = () => {
  return (
    <div className="py-2 px-4 min-h-20  flex justify-between items-center bg-white border border-y-gray-200">
      <p className="font-bold text-lg lg:text-xl">ORDER NOW</p>
      <div className="flex justify-end gap-3">
        <div className="flex items-center justify-center gap-1 border border-gray-200 rounded-full p-2">
          <a
            href="https://wa.me/+60123776420"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={25} />
          </a>
          <span className="hidden md:block text-xs md:text-base ">
            +60 12-377 6420
          </span>
        </div>
        <div className="flex items-center justify-center gap-1 border border-gray-200 rounded-full p-2">
          <a
            href="mailto:dzoraresources@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={25} />
          </a>
          <span className="hidden md:block text-xs md:text-base ">
            dzoraresources100@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;
