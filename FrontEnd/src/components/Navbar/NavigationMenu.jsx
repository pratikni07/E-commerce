import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const NavigationMenuBar = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold">
              Mens
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
              <div className="relative">
                <button className="font-bold">Mens</button>
                <div
                  className="absolute top-full left-0 bg-white shadow-md hidden"
                  id="menu"
                >
                  <div className="p-4">
                    <img
                      src="https://nobero.com/cdn/shop/collections/Collectio_Icon_copy.png?v=1708004377"
                      alt="Mens"
                      className="w-40 h-40"
                    />
                    hello
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationMenuBar;
