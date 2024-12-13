"use client";
import { useState, useEffect } from "react";
import React from "react";
import { CgMenuMotion } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Image from "next/image";
const Navbar = () => {
  const [navBg, setNavBg] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-white text-black" : "text-white"
      } flex w-full  items-center justify-between bg-black/40 py-3 px-10 xl:px-40 z-50`}
    >
      <div className="flex items-center">
        <Image
          src="/images/Untitled-1.webp"
          alt="logo"
          width={80}
          height={80}
        />
        <h1 className=" text-5xl font-semibold">TravelTrip</h1>
      </div>
      <div>
        <ul className="hidden lg:flex items-center gap-10">
          <li
            className="nav__link"
            onClick={() => {
              const target = document.getElementById("Home");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Home
          </li>
          <li
            className="nav__link"
            onClick={() => {
              const target = document.getElementById("About");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            About
          </li>
          <li
            className="nav__link"
            onClick={() => {
              const target = document.getElementById("Services");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Services
          </li>
          <li
            className="nav__link"
            onClick={() => {
              const target = document.getElementById("Packages");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Packages
          </li>
          <li
            className="nav__link"
            onClick={() => {
              const target = document.getElementById("Reviews");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Reviews
          </li>
          <li
            className="nav__link"
            onClick={() => {
              const target = document.getElementById("Leaders");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Leaders
          </li>
          <li
            className="nav__link"
            onClick={() => {
              const target = document.getElementById("Contact");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
          </li>
        </ul>
      </div>
      <CgMenuMotion
          className="lg:hidden block text-4xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
          <div
          className={`absolute top-0   flex flex-col gap-8 lg:hidden transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ right: 0 }}
        >
          <AiOutlineClose
            className="text-4xl text-white absolute top-5 right-5 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
          <MobileNav />
        </div>
    </div>
  );
};

export default Navbar;
