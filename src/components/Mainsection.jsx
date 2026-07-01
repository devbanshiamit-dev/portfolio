import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Mainsection() {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-gray-100">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-10 md:flex-row md:px-12 lg:px-20">

        {/* Left Section */}
        <div className="w-full md:w-1/2">

          <p className="mb-3 text-lg font-medium text-gray-500">
            Hi, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Amit Devbanshi
          </h1>

          <h2 className="mt-3 text-2xl font-semibold text-gray-700 lg:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 lg:text-lg">
            I build modern, scalable and responsive web applications using
            React, ASP.NET Core and SQL Server with a strong focus on clean UI,
            performance and user experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              className="
              rounded-lg
              border-2
              border-black
              px-6
              py-3
              font-semibold
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
              "
            >
              Download CV
            </button>

            <button
              className="
              flex
              items-center
              gap-2
              rounded-lg
              bg-black
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:translate-x-1
              "
            >
              Let's Talk

              <FontAwesomeIcon icon={faArrowRight} />
            </button>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex w-full justify-center md:w-1/2">

          <div
            className="
            flex
            h-72
            w-72
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-2xl

            sm:h-80
            sm:w-80

            lg:h-[420px]
            lg:w-[420px]
            "
          >

            {/* Profile Image */}

            {/* <img src="" alt="" className="..." /> */}

          </div>

        </div>

      </div>
    </section>
  );
}