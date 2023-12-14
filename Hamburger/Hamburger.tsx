"use client";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
type HamburgerTypes = {
  side: string;
};

const Hamburger = ({ side }: HamburgerTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  function HandleClick() {
    setIsOpen((isOpen) => {
      return !isOpen;
    });
  }
  return (
    <section>
      <Button
        isIconOnly
        radius="none"
        aria-label="Like"
        className=" bg-transparent rounded-full"
        onPress={() => HandleClick()}
      >
        <GiHamburgerMenu size={26} />
      </Button>
      <div
        className={`fixed top-0 h-full w-full max-w-[20rem] border-l-2 border-r-2 transition-all duration-400 ease-in-out bg-white z-[99999] ${
          side === "left"
            ? `left-0 ${isOpen ? "" : "-translate-x-full"}`
            : `right-0 ${isOpen ? "" : "translate-x-full"}`
        }`}
      >
        <div className="h-10 w-full px-2 flex items-center border-b-2">
          <h1 className="flex-1 text-center text-xl font-bold">Sheet bar</h1>
          <div className="border-1 border-transparent hover:border-gray-300 cursor-pointer" onClick={() => HandleClick()}>
            <IoCloseSharp size={28} />
          </div>
        </div>
      </div>
      <div
        onClick={() => HandleClick()}
        className={`fixed h-full w-full top-0 left-0 bg-gray-100 opacity-50 z-99998 pointer-events-none ${
          isOpen ? "block pointer-events-auto" : "hidden"
        }`}
      ></div>
    </section>
  );
};
export default Hamburger;
