import { mainMenu, primaryMenu } from "@/lib/menus";
import React from "react";

const MainNavbar = () => {
  const menus = primaryMenu;
  const home = mainMenu;
  return (
    <div className="w-full bg-secondary shadow-xl sticky top-0 min-h-16 flex justify-center">
      <div className="w-full max-w-screen-2xl flex justify-between items-center px-2 py-1">
        <a href={home.url}>
          <p className="font-bold text-secondary-foreground hover:text-primary">
            {home.name.toUpperCase()}
          </p>
        </a>
        <div className="flex gap-2 items-center">
          {menus.map((item, index) => (
            <a key={index} href={item.url}>
              <p className="hover:font-bold hover:underline text-secondary-foreground hover:text-primary">
                {item.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
