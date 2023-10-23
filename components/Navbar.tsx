"use client";

import { Link } from "react-scroll";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between flex-nowrap w-full pb-3 border-b-[1px] border-neutral-500">
      <div className="sm:text-3xl text-xl font-bold inline-block">
        <a href="/" className="inline-block">
          Porfolio Website
        </a>
      </div>
      <div className="sm:hidden" onClick={() => setShowNav(!showNav)}>
        <GiHamburgerMenu size={24} />
      </div>
      <nav
        className={`max-sm:absolute max-sm:w-full left-0 transition ease-in duration-300 ${
          showNav
            ? "top-16 visible overflow-x-hidden"
            : "max-sm:invisible top-0 overflow-x-auto"
        }`}
      >
        <ul className="flex items-center max-sm:text-sm justify-between max-sm:justify-around">
          <li
            className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-50 rounded mx-1 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-32"
            }`}
          >
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="px-2"
            >
              About me
            </Link>
          </li>
          <li
            className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-50 rounded mx-1 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-32"
            }`}
          >
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="px-2"
            >
              Skills
            </Link>
          </li>
          <li
            className={`py-1 hover:bg-neutral-700 transition ease-in duration-300 delay-50 rounded mx-1 ${
              showNav ? "max-sm:translate-x-0" : "max-sm:translate-x-32"
            }`}
          >
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="px-2"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
