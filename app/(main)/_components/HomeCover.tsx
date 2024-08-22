import React from "react";
import Image from "next/image";
import { malaysianMap } from "@/public/images/graphic";

const HomeCover = () => {
  return (
    <div
      className="w-full flex items-center justify-center py-2 md:py-16 lg:py-28 xl:py-40"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${malaysianMap})`,
        backgroundColor: "hsl(var(--primary))", // Ensures primary color is used as a background
        // opacity: "50%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply", // Enhances the primary color while reducing the image visibility
      }}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 max-w-screen-2xl p-2">
        <div className="p-10 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-light text-primary-foreground ">
            Welcome to
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-popover text-center">
            Dzora Resources
          </h2>
          <p className="text-primary-foreground my-2 text-xl text-center">
            From Dzora, we supply various types of goods in Malaysia. We strive
            to promote Malaysian businesses and brands, with a focus on quality
            first.
          </p>
        </div>
        <div className="p-2 bg-primary rounded-lg flex justify-center w-full shadow-2xl border border-primary-foreground">
          <Image
            src={malaysianMap}
            alt="cover image"
            height={1247}
            width={3010}
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
