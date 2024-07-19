import { DelightBundle } from "@/types/dzoradelight";

import React from "react";

const SingleBundle = ({ product }: { product: DelightBundle }) => {
  return (
    <div className="m-4">
      <div className="w-full shadow-xl border-gray-300 flex flex-col  p-4">
        <p className="font-semibold">{product.name}</p>
        <p className="font-light">{product.desc}</p>
        <p className="mt-2 mb-1 font-light:">Includes:</p>
        <div className="flex flex-wrap gap-2">
          {product.items.map((n, i) => (
            <div key={i} className=" bg-gray-200 p-2 rounded-sm">
              {n}
            </div>
          ))}
        </div>
        <p className="font-semibold mt-4">Price: {product.price}</p>
      </div>
    </div>
  );
};

export default SingleBundle;
