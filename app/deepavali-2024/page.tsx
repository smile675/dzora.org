import React from "react";
import Cover from "./_components/Cover";
import ClassicProducts from "./_components/ClassicProducts";

const page = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-screen-xl h-screen overflow-auto no-scrollbar">
        <Cover />
        <p className="my-2 p-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          veritatis dolorum totam eveniet sed. Facilis totam velit, explicabo
          inventore reprehenderit animi atque dolor recusandae et quidem quas
          vitae unde reiciendis error enim debitis laudantium nihil ipsa, cumque
          saepe maxime officiis. Iste expedita qui quod nostrum laboriosam
        </p>
        <div className="z-50 w-full sticky top-0 right-0 bottom-0 py-2 px-4 min-h-20  flex justify-between items-center bg-white border border-y-gray-200">
          <p className="font-semibold text-lg lg:text-xl">ORDER NOW</p>
          <div></div>
        </div>
        <div className="w-full">
          <ClassicProducts />
        </div>
      </div>
    </div>
  );
};

export default page;
