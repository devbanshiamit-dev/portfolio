import { useEffect, useState } from 'react';
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
      <nav className="relative flex items-center justify-between px-7 py-6 shadow-md bg-white z-50">
        <div className="font-bold text-2xl text-shadow-md">
          Amit.Dev
        </div>

        <div className="hidden md:block">
          <li className="flex gap-9 text-shadow-md">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
          </li>
        </div>

        <button className="hidden md:block px-5 py-1.5 rounded border-2 text-md font-sans text-shadow-md hover:bg-black hover:text-white">
          Let's Talk
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