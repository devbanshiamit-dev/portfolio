// hooks/useSidebarAnimation.js

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function useSidebarAnimation(
  menu,
  sidebarRef,
  overlayRef,
  itemsRef,
  buttonRef,
) {

  // Initial state
  useGSAP(() => {
    gsap.set(sidebarRef.current, { x: -350 });

    gsap.set(itemsRef.current, {
      opacity: 0,
      x: -30,
    });

    gsap.set(buttonRef.current, {
      opacity: 0,
      x: -30,
    });

    gsap.set(overlayRef.current, {
      opacity: 0,
      pointerEvents: "none",
    });
  }, []);

  // Open / Close animation
  useGSAP(() => {

    const tl = gsap.timeline();

    if (menu) {

      tl.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
      });

      tl.to(
        sidebarRef.current,
        {
          x: 0,
          duration: 0.45,
        },
        "<"
      );

      tl.to(itemsRef.current, {
        opacity: 1,
        x: 0,
        stagger: 0.08,
      });

      tl.to(buttonRef.current, {
        opacity: 1,
        x: 0,
      });

    } else {

      tl.to(itemsRef.current, {
        opacity: 0,
        x: -30,
        stagger: {
          each: 0.05,
          from: "end",
        },
      });

      tl.to(
        sidebarRef.current,
        {
          x: -350,
        },
        "<"
      );

      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          pointerEvents: "none",
        },
        "<"
      );

      tl.to(buttonRef.current, {
        opacity: 0,
        x: -30,
      });

    }

  }, { dependencies: [menu] });

}