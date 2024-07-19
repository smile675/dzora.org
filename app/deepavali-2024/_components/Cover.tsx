import Image from "next/image";
import React from "react";
import img from "@/public/cover.png";

const Cover = () => {
  return (
    <div className="relative w-full">
      <div className="aspect-[3/1]">
        <Image
          className="rounded-b-xl"
          src={img}
          alt="Cover Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          // quality={100}
        />
      </div>
    </div>
  );
};

export default Cover;
