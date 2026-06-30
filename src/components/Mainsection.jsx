import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Mainsection = () => {
    return (
        <div className="bg-gray-100 h-[calc(100vh-5rem)] w-full flex">
            <section className="w-1/2 h-full flex justify-center items-center -translate-y-10">

                <div className='w-2xl'>
                    <p className="text-gray-500 text-xl pl-4">
                        Hi, I'm
                    </p>

                    <h1 className="text-8xl font-bold text-gray-900">
                        Amit Devbanshi
                    </h1>

                    <h2 className="text-3xl font-semibold text-gray-900">
                        Full Stack Developer
                    </h2>

                    <p className="mt-6 text-lg text-gray-600 leading-8">
                        I'm a Full Stack Developer passionate about building scalable web
                        applications and delivering seamless user experiences using React,
                        ASP.NET Core, and SQL Server.
                    </p>
                    <div className='flex gap-6 mt-2'>
                        <button className='py-2 px-4 border-2 border-black font-bold hover:bg-black hover:text-white'>Download CV</button>
                        <button className='py-2 px-6 bg-black border-2 border-black text-white font-bold flex items-center gap-2 hover:bg-white hover:text-black'>
                            Let's Talk
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </section>

            <section className="w-1/2 flex justify-center items-center">
                <div className="w-100 h-100 rounded-full bg-white shadow-xl">
                </div>
            </section>
        </div>
    );
}

export default Mainsection;
