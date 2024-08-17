"use client";
import { Clock } from "lucide-react";
import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const OrderSection = () => {
  return (
    <div className="py-2 px-4 min-h-20  flex justify-between items-center bg-white border border-y-gray-200">
      <div>
        <p className="font-bold text-lg lg:text-xl">
          ORDER NOW{" "}
          <span className="font-light text-secondary-foreground text-sm">
            for Deepavali
          </span>
        </p>
        <p className="text-accent-foreground flex gap-2 items-center">
          <span>
            <Clock size={15} />
          </span>
          <span>
            Order before 10<sup>th</sup> of Oct, 2024
          </span>
        </p>
      </div>
      <div className="flex justify-end gap-3">
        <div className="flex items-center justify-center gap-1 border border-gray-200 rounded-full p-2">
          <a
            href="https://wa.me/+60123776420"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={25} color="teal" />
          </a>
          <span className="hidden md:block text-xs md:text-base ">
            +60 12-377 6420
          </span>
        </div>
        <div className="flex items-center justify-center gap-1 border border-gray-200 rounded-full p-2">
          <a
            href="mailto:dzoraresources100@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={25} color="#B92506" />
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
