import { DzoraDelightProduct } from "@/types/dzoradelight";
import Image from "next/image";
import React from "react";

const SingleProduct = ({ product }: { product: DzoraDelightProduct }) => {
  return (
    <div className="m-2 shadow-xl rounded-md bg-white">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="relative h-40 w-40 bg-white p-6 m-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            objectFit="contain"
          />
        </div>

        <div className="w-full p-4 bg-black/10 ">
          <p className="text-black font-semibold text-xs md:text-sm">
            {product.name}
          </p>
          <p className="text-black font-bold text-sm md:text-lg">
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
