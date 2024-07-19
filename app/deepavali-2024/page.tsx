import React from "react";
import Cover from "./_components/Cover";
import ClassicProducts from "./_components/ClassicProducts";
import PktProducts from "./_components/PktProducts";
import ExecutiveProducts from "./_components/ExecutiveProducts";
import OrderSection from "./_components/OrderSection";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <div className="w-full flex justify-center bg-slate-100">
      <div className="w-full max-w-screen-xl h-screen overflow-auto no-scrollbar">
        <NavBar />
        <Cover />
        <div className="my-2 p-4">
          <h1 className="font-semibold text-sm md:text-xl">
            Celebrate Deepavali 2024 with Dzora Delights!
          </h1>
          <p className="my-2 text-xs md:text-xl">
            Indulge in the spirit of Deepavali with Dzora Delights, your go-to
            destination for delicious crunchy and crispy savoury snacks. This
            festive season, elevate your celebrations with our authentic range
            of snacks that are sure to delight your taste buds and add a touch
            of tradition to your festivities.
          </p>
        </div>
        <div className="my-2 p-4">
          <h1 className="font-semibold text-sm md:text-xl">
            Explore Our Deepavali 2024 Delights Today!
          </h1>
          <p className="my-2 text-xs md:text-xl">
            Discover our exclusive Deepavali 2024 collection featuring a variety
            of savoury snacks that are perfect for gifting or enjoying with
            family and friends. From the classic Muruku to innovative twists on
            traditional recipes, each snack is handcrafted with care and
            expertise.
          </p>
        </div>
        <div className="z-50 w-full sticky top-0 right-0 left-0">
          <OrderSection />
        </div>
        <div className="w-full">
          <PktProducts />
        </div>
        <div className="w-full">
          <ClassicProducts />
        </div>
        <div className="w-full">
          <ExecutiveProducts />
        </div>
        <div className="my-2 p-4">
          <h1 className="font-semibold text-sm md:text-xl">
            Place Your Order Today!
          </h1>
          <p className="my-2 text-xs md:text-xl">
            Do not miss out on making Deepavali 2024 memorable with Dzora
            Delights. Place your order now to ensure you have our irresistible
            snacks ready for your celebrations. Treat yourself and your loved
            ones to the flavours of Deepavali with Dzora Delights.
          </p>
        </div>
        <div className="my-2 p-4">
          <h1 className="font-semibold text-sm md:text-xl">
            Why Choose Dzora Delights?
          </h1>
          <p className="my-2 text-xs md:text-xl">
            <span className="text-gray-600">Authentic Flavors: </span> At Dzora
            Delights, we specialize in traditional snacks that are a hallmark of
            Deepavali celebrations. Think Muruku and more - each bite bursting
            with authentic flavours that remind you of home.
          </p>
          <p className="my-2 text-xs md:text-xl">
            <span className="text-gray-600">Quality Ingredients: </span> We
            believe in using only the finest ingredients to ensure that every
            snack is not just tasty but also wholesome. Our snacks are 100%
            vegetarian, catering to everyone&#39;s dietary preferences.
          </p>
          <p className="my-2 text-xs md:text-xl">
            <span className="text-gray-600">Perfect Anytime: </span> Whether
            you&#39;re hosting a Deepavali gathering, enjoying a quiet teatime,
            or need a delicious snack to keep you going through long workdays,
            Dzora Delights has you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
