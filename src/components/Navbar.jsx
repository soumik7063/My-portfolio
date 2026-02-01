import React, { useState } from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Element } from "react-scroll";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const links = [
    { links: "About Me", section: "about" },
    { links: "Skills", section: "skills" },
    { links: "Experience", section: "experience" },
    { links: "Projects", section: "projects" },
    { links: "Contact", section: "contact" },
  ];
  const [menuOpen, setMenuopen] = useState(false);
  const toggleMenu = () => {
    setMenuopen((prev) => !prev);
  };
  return (
    <nav className="max-w-[1200px] mx-auto px-4 fixed w-full left-[50%] mt-2 flex gap-4 z-20 -translate-x-[50%]">
      <div className="bg-purple mr-5 sm:mr-0 mx-auto max-w-[1200px] flex items-center justify-between rounded-r-full rounded-l-full w-full p-2 sm:p-4 border-[0.5px] border-orange-400">
        <div>
          <h1 className="text-2xl text-gray-300 hidden lg:block">Soumik Ghatak</h1>
          <h1 className="text-2xl text-white font-extrabold lg:hidden">SG</h1>
        </div>
        <div>
          <ul className="hidden lg:flex gap-4 text-gray-300 font-semibold text-md">
            {links.map((link, index) => {
              return (
                <li key={index} className="group">
                  <Link
                    to={link.section}
                    smooth={true}
                    spy={true}
                    offset={-130}
                    className="hover:text-cyan-400  cursor-pointer"
                  >
                    {link.links}
                  </Link>
                  <div className="mx-auto bg-cyan-400 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                </li>
              );
            })}
          </ul>
          <ul
            className={`text-white flex flex-col justify-center items-center
  fixed top-0 left-0 w-full h-screen bg-[#11205a] lg:hidden
  transition-transform duration-500 ease-in-out
  ${menuOpen ? "translate-x-1/3" : "translate-x-full"}
  `}
          >
            {links.map((link, index) => (
              <li key={index} className="group my-4">
                <Link
                  to={link.section}
                  smooth={true}
                  spy={true}
                  offset={-130}
                  onClick={() => setMenuopen(false)}
                  className="text-xl hover:text-cyan-400 hover:scale-105  shadow-2xl cursor-pointer"
                >
                  {link.links}
                </Link>
                <div className="mx-auto bg-cyan-400 w-0 group-hover:w-full h-[1px] ease-in-out transition-all duration-300"></div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            onClick={() =>
              (window.location.href = "mailto:ghataksoumik7063@gmail.com")
            }
            className=" text-neutral-950 bg-gradient-to-r from-cyan-400 to-orange-400 px-4 py-2 border font-bold text-md sm:text-xl rounded-2xl cursor-pointer flex items-center hover:scale-110 transition-all ease-in-out duration-500 hover:shadow-[0px_0px_10px_cyan]"
          >
            Hire me <LuArrowDownRight />
          </button>
        </div>
      </div>
      <div>
        {menuOpen ? (
          <button
            onClick={toggleMenu}
            className="sm:hidden absolute right-1 top-1 py-3 z-10 text-white text-2xl p-2 border rounded-full border-orange-400 cursor-pointer "
          >
            <RxCross1 />
          </button>
        ) : (
          <button
            onClick={toggleMenu}
            className="sm:hidden absolute right-1 top-1 py-3 z-10 text-white text-2xl p-2 border rounded-full border-orange-400 cursor-pointer"
          >
            <GiHamburgerMenu />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
