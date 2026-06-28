import { useEffect, useState } from 'react';
import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faCircleInfo,
  faScrewdriverWrench,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(useGSAP);

function Navbar() {
  const overlayRef = useRef(null);
  const sidebarRef = useRef(null);
  const itemsRef = useRef([]);
  const barsref = useRef(null);
  const buttonRef = useRef(null);
  const [menu, setmenu] = useState(false);

  useGSAP(() => {
    gsap.set(sidebarRef.current, {
      x: -350
    });

    gsap.set(itemsRef.current, {
      opacity: 0,
      x: -30
    });

    gsap.set(overlayRef.current, {
      opacity: 0
    });

    gsap.set(buttonRef.current, {
      opacity: 0,
      x: -30
    },[]);
  })

  useGSAP(() => {

    if (menu) {
      const tl = gsap.timeline();

      tl.to(barsref.current, {
        rotate: 90,
        duration: 0.3,
      });

      tl.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.2,
      });

      tl.to(sidebarRef.current, {
        x: 0,
        duration: 0.45,
        ease: "power3.out"
      }, "<");

      tl.to(itemsRef.current, {
        opacity: 1,
        x: 0,
        stagger: 0.08,
        duration: 0.25
      }, "-=0.2");

      tl.to(buttonRef.current, {
        opacity: 1,
        duration: 0.25,
        x: 0,
      });
    }
    else {
      const tl = gsap.timeline();

      tl.to(barsref.current, {
        rotate: 0,
        duration: 0.3,
      });

      tl.to(itemsRef.current, {
        opacity: 0,
        x: -20,
        stagger: {
          each: 0.05,
          from: "end"
        }
      });

      tl.to(sidebarRef.current, {
        x: -350,
        duration: 0.4
      }, "-=0.15");

      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.2,
        },
        "<"
      );

      tl.to(buttonRef.current, {
        opacity: 0,
        duration: 0.25,
        x: -30,
      });
    }
  }, {
    dependencies: [menu]
  })

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
          ref={barsref}
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setmenu(!menu)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>

      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/40 pointer-events-none"
      />

      <div className="md:hidden bg-white min-h-lvh p-2">

        <div ref={sidebarRef} className="fixed h-[calc(100lvh-1rem)] w-80 rounded-3xl bg-gray-200 shadow-xl">

          <div className='flex flex-col gap-6 p-7'>
            <h1 className='font-bold text-2xl pt-3.5'>
              Menu
            </h1>

            <div className='flex flex-col gap-5 p-3 text-xl'>

              <a ref={el => itemsRef.current[0] = el} href="#" className='flex gap-3 items-center'>
                <FontAwesomeIcon icon={faHouse} />
                <span>Home</span>
              </a>

              <a ref={el => itemsRef.current[1] = el} href="#" className='flex gap-3 items-center'>
                <FontAwesomeIcon icon={faCircleInfo} />
                <span>About</span>
              </a>

              <a ref={el => itemsRef.current[2] = el} href="#" className='flex gap-3 items-center'>
                <FontAwesomeIcon icon={faScrewdriverWrench} />
                <span>Skills</span>
              </a>

              <a ref={el => itemsRef.current[3] = el} href="#" className='flex gap-3 items-center'>
                <FontAwesomeIcon icon={faFileCode} />
                <span>Projects</span>
              </a>
            </div>
            <button ref={buttonRef} className="px-5 py-1.5 rounded border-2 text-md font-sans bg-black text-gray-50">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;