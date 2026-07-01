import { useEffect, useState } from 'react';
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(useGSAP);

function Navbar({ menu, setmenu }) {

  const barsRef = useRef(null);

  useGSAP(() => {
    gsap.to(barsRef.current, {
      rotate: menu ? 90 : 0,
      duration: 0.3,
    });
  }, { dependencies: [menu] });

  return (
    <>
      <nav id="navbar" className="relative h-20 flex items-center justify-between px-7 py-6 shadow-md bg-white z-50">
        <div className="font-bold text-2xl text-shadow-md">
          Amit.Dev
        </div>

        <div className="hidden md:block">
          <li className="flex gap-9">
            <a
              href="#"
              className="transition-all duration-300 hover:text-gray-700 hover:scale-105"
            >
              Home
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-gray-700 hover:scale-105"
            >
              About
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-gray-700 hover:scale-105"
            >
              Skills
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-gray-700 hover:scale-105"
            >
              Projects
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:text-gray-700 hover:scale-105"
            >
              Contacts
            </a>
          </li>
        </div>

        <button className="hidden md:flex items-center gap-2.5 px-5 py-1.5 rounded border-2 text-md font-sans text-shadow-md hover:bg-black hover:text-white">
          Let's Talk
          <FontAwesomeIcon icon={faArrowRight} />
        </button>

        <div
          ref={barsRef}
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setmenu(!menu)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </>
  )
}

export default Navbar;