import React from "react";

const MobileNav = () => {
  return (
    <div className="">
      <ul className="flex flex-col h-screen items-start pl-5 pt-20 gap-6 text-lg bg-black text-white w-[300px]  z-50">
      
          <li
            className="nav__link "
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
  );
};

export default MobileNav;
