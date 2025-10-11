"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {} from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import path from "path";

type DropdownProps = {
  locale: "en" | "fr";
};

export default function Dropdown({ locale }: DropdownProps) {
  const pathname = usePathname();

  function switchLocale(nextLocale: "en" | "fr") {
    if (!pathname) return;
    var targetPath : string = pathname;
    if (pathname === "/fr" || pathname === "/en") {
      targetPath = `/${nextLocale}`;
    }
    else{
      targetPath = `/${nextLocale}${pathname}`;
    }

    // full reload de la page
    window.location.assign(targetPath);
  }

  return (
    <Menu as="div" className="relative inline-block w-[25px] h-[19.5px]">
      <MenuButton className="">
        <Image
          src={`/${locale.toUpperCase()}.svg`}
          alt="Dropdown Icon"
          width={25}
          height={25}
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-background outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => switchLocale("fr")}
              className="flex gap-2 w-full px-4 py-2 text-sm text-foreground data-focus:bg-foreground/5 data-focus:text-foreground/80 data-focus:outline-hidden"
            >
              <Image src="/FR.svg" alt="Dropdown Icon" width={20} height={20} />
              Français
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => switchLocale("en")}
              className="flex gap-2 w-full px-4 py-2 text-sm text-foreground data-focus:bg-foreground/5 data-focus:text-foreground/80 data-focus:outline-hidden"
            >
              <Image src="/EN.svg" alt="Dropdown Icon" width={20} height={20} />
              English
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
