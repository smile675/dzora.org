import React from "react";

import products from "@/lib/products/classic";
import SingleProduct from "./SingleProduct";

const ClassicProducts = () => {
  return (
    <div className="w-full flex flex-col my-3 border bg-red-50">
      <div className="flex items-center">
        <hr className="flex-grow border-t border-gray-300" />
        <p className="font-bold text-2xl lg:text-4xl text-center text-red-900 px-4 py-8">
          Classic Range
        </p>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <div className="w-full flex flex-wrap justify-around">
        {products.map((product, index) => (
          <div key={index}>
            <SingleProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicProducts;
