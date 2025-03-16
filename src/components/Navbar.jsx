import React, { useState } from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Element } from 'react-scroll';
const Navbar = () => {
    const links = [
        {links:'About Me' , section:'about'},
        {links:'Skills' , section:'skills'},
        {links:'Experience' , section:'experience'},
        {links:'Projects' , section:'projects'},
        {links:'Contact' , section:'contact'}
    ]
    const [menuOpen , setMenuopen] = useState(false);
    const toggleMenu = ()=>{
        setMenuopen((prev) => !prev);
    }
  return (
    <nav className="max-w-[1300px] mx-auto px-4 fixed w-full left-[50%] mt-2 flex gap-4 z-20 -translate-x-[50%]">
      <div className="bg-purple mx-auto max-w-[1200px] flex items-center justify-between rounded-r-full rounded-l-full w-full p-4 border-[0.5px] border-orange-400">
        <div>
            <h1 className="text-2xl text-white hidden lg:block">Soumik Ghatak</h1>
            <h1 className="text-2xl text-white font-extrabold lg:hidden">SG</h1>
        </div>
        <div className={`${menuOpen ?'block':'hidden'} lg:block`}>
            <ul className="hidden lg:flex gap-4 text-white font-semibold text-md">
                {
                    links.map((link,index)=>{
                        return <li key={index} className="group">
                            <Link
                            to={link.section}
                            smooth={true}
                            spy={true}
                            offset={-130}
                            className="hover:text-cyan-400 transition-all duration-500">{link.links}</Link>
                            <div className="mx-auto bg-cyan-400 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                        </li>
                        
                    })
                }  
            </ul>
            <ul className="text-white flex flex-col justify-center items-center top-[120%] absolute left-0 w-full bg-cyan-800 lg:hidden py-4 transition-all duration-500">
                {
                    links.map((link,index)=>{
                        return <li key={index} className="group">
                            <a className="hover:text-cyan-400 transition-all duration-500"  href="">{link.links}</a>
                            <div className="mx-auto bg-cyan-400 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
                        </li>
                        
                    })
                }  
            </ul>
        </div>
        <div>
            <button className=" bg-gradient-to-r from-cyan-400 to-orange-400 px-4 py-2 border font-bold text-xl rounded-2xl cursor-pointer flex items-center hover:scale-110 transition-all duration-500 hover:shadow-[0px_0px_10px_cyan]">Hire me <LuArrowDownRight /></button>
        </div>
      </div>
      <div>
        <div className="flex lg:hidden sm:block p-4 border-2 rounded-full bg-purple border-orange-400 items-center justify-center">
        <button onClick={toggleMenu} className="text-white text-2xl p-2 border rounded-full border-orange-400 cursor-pointer"><GiHamburgerMenu /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
