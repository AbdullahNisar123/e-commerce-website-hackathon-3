"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import ShoppingCard from "./ShoppingCard";
import { useSearch } from "@/context/SearchContext";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Search Query:", e.target.value);
    setSearchQuery(e.target.value); // Update search query in context
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full py-[15px] px-[20px] md:pl-[54px] md:pr-[100px] bg-white sticky top-0 z-30">
      <header className="flex justify-between items-center mx-auto h-fit ">
        {/* Logo Section */}
        <div className="flex items-center -z-20">
          <Image
            src="/images/Meubel House_Logos-05.png"
            alt="logo"
            className="w-[50px] h-[32px]"
            width={100}
            height={100}
          />
          <h1 className="text-[24px] md:text-[34px] font-bold">Furniro</h1>
        </div>
        <div className="flex flex-col absolute md:relative top-0 right-0">
          {/* Burger Icon */}
          <div
            className="flex flex-col justify-between w-8 h-6 cursor-pointer md:hidden absolute top-[20px] right-[20px] z-10"
            onClick={toggleMenu}
          >
            <span
              style={{
                transform: isOpen ? "rotate(45deg) translate(10px, 5px)" : "",
              }}
              className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
            ></span>
            <span
              style={{ opacity: isOpen ? 0 : 1 }}
              className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
            ></span>
            <span
              style={{
                transform: isOpen ? "rotate(-45deg) translate(10px, -5px)" : "",
              }}
              className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
            ></span>
          </div>

          {/* Navigation Menu For PC*/}
          <nav
            className={`hidden md:relative right-0 p-4 md:p-0 md:top-0 md:right-0 md:w-fit top-[95px] bg-white md:bg-transparent md:flex items-center `}
          >
            <ul className="flex flex-col md:flex-row md:gap-[75px] text-[16px] font-medium ">
              <li>
                <Link
                  href="/"
                  className="block py-2 md:py-0 hover:text-gray-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Shop"
                  className="block py-2 md:py-0 hover:text-gray-500"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/Blog"
                  className="block py-2 md:py-0 hover:text-gray-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="block py-2 md:py-0 hover:text-gray-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Navigation Menu For Phone*/}
          <nav
            className={`z-50 md:hidden relative top-[65px] right-0  bg-white w-[300px] ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <div className="p-[15px] flex flex-col gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/Meubel House_Logos-05.png"
                  alt="logo"
                  width={50}
                  height={100}
                />
                <h1 className="text-[24px] md:text-[34px] font-bold">
                  Furniro
                </h1>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                  <label className="w-full p-[10px] rounded-[5px] bg-[#41404ab6] flex text-[#9F9F9F] items-center gap-3 hover:bg-black hover:text-white">
                    <Icon icon="si:search-line" className="w-6 h-6" />
                    <input
                      type="text"
                      className="w-full bg-transparent"
                      placeholder="Search"
                    />
                  </label>
                  <Link
                    href="#"
                    onClick={closeNav}
                    className="w-full p-[10px] rounded-[5px] bg-[#41404ab6] flex text-[#9F9F9F] items-center gap-3 hover:bg-black hover:text-white"
                  >
                    <Icon
                      icon="mdi:account-alert-outline"
                      className="w-6 h-6"
                    />
                    <p className="">People</p>
                  </Link>
                </div>
                <div className="text-[#9F9F9F] px-[10px] flex flex-col gap-4">
                  <Link
                    href="/"
                    onClick={closeNav}
                    className="flex gap-3 items-center  hover:text-[#5e5d5d] "
                  >
                    <Icon
                      icon="material-symbols:home-outline-rounded"
                      className="text-[24px]"
                    />
                    <p className="font-medium">Home</p>
                  </Link>
                  <Link
                    href="/Shop"
                    onClick={closeNav}
                    className="flex gap-3 items-center  hover:text-[#5e5d5d]"
                  >
                    <Icon
                      icon="ant-design:shopping-outlined"
                      className="text-[24px]"
                    />
                    <p className="font-medium">Shop</p>
                  </Link>
                  <Link
                    href="/Blog"
                    onClick={closeNav}
                    className="flex gap-[12px] items-center  hover:text-[#5e5d5d]"
                  >
                    <Icon
                      icon="material-symbols:lab-research-rounded"
                      className="text-[24px] "
                    />
                    <p className="font-medium">Blog</p>
                  </Link>
                  <Link
                    href="/Contact"
                    onClick={closeNav}
                    className="flex gap-3 items-center  hover:text-[#5e5d5d]"
                  >
                    <Icon icon="lucide:contact-round" className="text-[24px]" />
                    <p className="font-medium">Contact</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-t-[#D9D9D9] p-[15px] px-[25px] text-[#9F9F9F] flex flex-col gap-4 ">
              <Link
                href="#"
                onClick={closeNav}
                className="flex gap-3 items-center hover:text-[#5e5d5d] "
              >
                <Icon icon="solar:heart-linear" className="text-[24px]" />
                <p className="font-medium ">Like</p>
              </Link>
              <Link
                href="#"
                onClick={() => {
                  closeNav();
                  toggleCart();
                }}
                className="flex gap-3 items-center  hover:text-[#5e5d5d]"
              >
                <Icon
                  icon="streamline:shopping-cart-2"
                  className="text-[24px]"
                />
                <p className="font-medium">Shopping Cart</p>
              </Link>
            </div>
          </nav>
        </div>
        {isCartOpen && <ShoppingCard closeCart={toggleCart} />}

        {/* Icons Section */}
        <div className="hidden md:flex items-center gap-[45px]">
          <Link href="#">
            <Icon
              icon="mdi:account-alert-outline"
              className="w-7 h-7 text-black"
            />
          </Link>
          <div
            className="relative flex items-center
          "
          >
            {/* Search Input */}
            {showSearch && (
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleChange}
                className=" top-0 left-0 mt-2 p-2 border rounded-md shadow-sm "
              />
            )}

            {/* Search Icon */}
            <button onClick={toggleSearch} className="focus:outline-none h-fit">
              <Icon icon="si:search-line" className="w-7 h-7 text-black" />
            </button>
          </div>
          <Link href="#">
            <Icon icon="solar:heart-linear" className="w-7 h-7 text-black" />
          </Link>
          <Link href="#" onClick={toggleCart}>
            <Icon
              icon="streamline:shopping-cart-2"
              className="w-7 h-7 text-black"
            />
          </Link>
        </div>
      </header>
    </div>
  );
}
