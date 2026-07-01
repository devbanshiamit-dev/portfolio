import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faHouse,
    faCircleInfo,
    faScrewdriverWrench,
    faFileCode,
} from "@fortawesome/free-solid-svg-icons";

import useSidebarAnimation from "../hooks/useSidebarAnimation";

const Sidebar = ({ menu }) => {

    const overlayRef = useRef(null);
    const sidebarRef = useRef(null);
    const itemsRef = useRef([]);
    const buttonRef = useRef(null);


    useSidebarAnimation(
        menu,
        sidebarRef,
        overlayRef,
        itemsRef,
        buttonRef,
    );

    return (
        <div id="sidebar">
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-black/40 z-40 pointer-events-none"
            />

                <div ref={sidebarRef} className=" fixed top-2 left-2 h-[calc(100lvh-1rem)]
                 w-80 rounded-3xl bg-gray-200 shadow-xl z-50">

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
    );
}

export default Sidebar;
