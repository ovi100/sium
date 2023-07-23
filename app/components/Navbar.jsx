"use client";
import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Sidenav from "./Sidenav";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useCycle(false, true);

  const navItems = [
    "about",
    "resume",
    "extra & co-curricular activities",
    "skills",
    "certification",
    "testimonials",
    "contact",
  ];

  const toggleOpen = () => {
    document.body.classList.toggle("overflow-hidden");
    setOpen((current) => !current);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <div
        className={`navbar w-full bg-[#222222] z-10 flex items-center justify-between px-10 py-5 ${
          sticky ? "fixed top-0 shadow-[0_0_10px_0_rgba(0,0,0,.8)]" : ""
        }`}
      >
        <div className="logo flex items-center">
          <div className="letters bg-blue-500 w-12 h-12 rounded-full text-white text-2xl font-bold flex items-center justify-center">
            AI
          </div>
          <div className="full-name text-white text-xl flex items-center ml-2">
            <div className="font-bold capitalize mr-2">ashiqul</div>
            <div className="capitalize">islam</div>
          </div>
        </div>
        <div className="menu md:block hidden">
          <ul className="links flex items-center gap-6">
            {navItems.map((navItem) => (
              <li key={navItem}>
                <Link
                  className="text-white capitalize cursor-pointer"
                  activeClass="!text-active"
                  to={navItem}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {navItem}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`menu-icon cursor-pointer select-none absolute right-7 md:hidden ${
            sticky ? "z-20" : "z-50"
          }`}
          onClick={toggleOpen}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="block bg-white w-[30px] h-0.5 m-[5px]"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="block bg-white w-[30px] h-0.5 m-[5px]"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
            className="block bg-white w-[30px] h-0.5 m-[5px]"
          />
        </div>
      </div>
      <Sidenav open={open} toggleOpen={toggleOpen} />
    </>
  );
};

export default Navbar;
