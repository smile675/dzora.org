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
            href="https://wa.me/60116220501"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={35} />
          </a>
          <span>+60 12-377 6420</span>
        </div>
        <div className="flex items-center justify-center gap-1 border border-gray-200 rounded-full p-2">
          <a
            href="mailto:dzoraresources@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;