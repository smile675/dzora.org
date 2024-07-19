import React from "react";

import bundleProducts from "@/lib/products/bundle";
import SingleBundle from "./SingleBundle";

const BundleProducts = () => {
  return (
    <div className="w-full flex flex-col my-3 py-3 border bg-white">
      <div className="flex items-center">
        <hr className="flex-grow border-t border-gray-300" />
        <p className="font-bold text-2xl lg:text-4xl text-center text-red-900 px-4 py-8">
          Bundle Deals
        </p>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <div className="w-full">
        {bundleProducts.map((product, index) => (
          <div key={index}>
            <SingleBundle product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BundleProducts;
