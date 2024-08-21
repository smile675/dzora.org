import React from "react";
import Image from "next/image";
import { malaysianMap } from "@/public/images/graphic";

const HomeCover = () => {
  return (
    <div className="w-full bg-primary/80 flex items-center justify-center py-2 md:py-16 lg:py-28 xl:py-40">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl p-2">
        <div className="p-10 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-light text-primary-foreground ">
            Welcome to
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-popover text-center">
            Dzora Resources
          </h2>
        </div>
        <div className="p-2 bg-primary-foreground/70 rounded-lg flex justify-center">
          <Image
            src={malaysianMap}
            alt="cover image"
            height={400}
            width={600}
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCover;
