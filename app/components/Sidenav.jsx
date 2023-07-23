import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const Sidenav = ({ open, toggleOpen }) => {
  const [sticky, setSticky] = useState(false);
  const containerRef = useRef(null);
  const pages = [
    "about",
    "resume",
    "certification",
    "skills",
    "portfolio",
    "contact",
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const ulVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const liVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <>
      <motion.div
        className={`sidebar bg-[#262626] w-80 fixed top-0 h-screen shadow-[0_4px_4px_rgba(0,0,0,0.25)] md:hidden ${
          !open ? "-right-full" : "right-0"
        } z-30 ease-in-out duration-300 px-3 py-2`}
        initial={false}
        animate={open ? "open" : "closed"}
        ref={containerRef}
      >
        <div
          className={`menu-icon cursor-pointer select-none absolute top-8 right-7 z-50 md:hidden ${
            !sticky ? "hidden" : ""
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
        <div className="menu mt-10 p-3">
          <motion.ul variants={ulVariants} className="links">
            {pages.map((navItem, index) => (
              <motion.li
                key={navItem}
                variants={liVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className="text-white text-lg capitalize cursor-pointer block mt-5"
                  activeClass="!text-active"
                  to={navItem}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {navItem}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
      <div
        className={`sidebar-overlay bg-[rgba(101,101,101,0.4)] w-full h-full fixed inset-0 z-20 ease-in-out duration-300 ${
          !open
            ? "-right-full opacity-0 invisible"
            : "right-0 opacity-100 visible"
        }`}
        onClick={toggleOpen}
      ></div>
    </>
  );
};

export default Sidenav;
