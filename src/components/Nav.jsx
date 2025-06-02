import headerLogo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { navLinks, socLinks } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import React from "react";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;

      if (currentScrollPos > 650) {
        setVisible(scrollingUp || currentScrollPos < 50);
      }
      //   setVisible(scrollingUp || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`fixed w-full ${
          visible ? "top-[0]" : "-top-[88px]"
        } z-10 flex flex-row justify-between items-center bg-[#f6fbff] py-4 px-5 ${
          window.pageYOffset < 600
            ? "shadow-none"
            : "navIsActive transition-all duration-500"
        } `}
      >
        <nav>
          <Link to="/">
            <img src={headerLogo} alt="logo" width={120} height={40} />
          </Link>
        </nav>
        <nav className="flex mr-20 max-lg:hidden justify-evenly">
          <ul className="flex flex-row ftDMSans text-[17px] mr-5">
            {navLinks.map((navLink) => (
              <a
                className="flex p-2 navhl"
                key={navLink.label}
                href={navLink.href}
              >
                {navLink.label}
              </a>
            ))}
          </ul>
          <ul className="flex items-center justify-center">
            {socLinks.map((socLink) => (
              <Link
                className="text-[16px] text-[#013321] p-[7px] border-[rgba(204, 204, 204, 0.4)] border-[1px] rounded-md mx-2"
                key={socLink.id}
                to={socLink.to}
              >
                {<socLink.sicon />}
              </Link>
            ))}
          </ul>
        </nav>
        <div
          className="flex lg:hidden"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <FaBars />
        </div>
      </motion.nav>

      {/* Open and Close */}
      <div
        className={`fixed top-0 left-0 h-full z-50 w-full flex flex-col bg-[#e6e6e6] py-4 px-5 transition-all duration-300 ${
          menuOpen ? "translate-x-0 opacity-1" : "-translate-x-[100%] opacity-0"
        }`}
      >
        <div className="flex flex-row justify-end gap-[50px] mb-[30px]">
          <Link to="/">
            <img src={headerLogo} alt="logo" width={200} height={90} />
          </Link>
          <div
            className="flex mt-2 h-fit"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <FaTimes size={26} />
          </div>
        </div>

        <ul className="flex flex-col ftDMSans text-[35px] gap-[10px] mr-5">
          {navLinks.map((navLink) => (
            <a
              className="flex p-2 navhl"
              key={navLink.label}
              href={navLink.href}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {navLink.label}
            </a>
          ))}
          <ul className="flex items-center gap-2">
            {socLinks.map((socLink) => (
              <Link
                className="text-[16px] text-[#013321] p-[7px] border-[rgba(204, 204, 204, 0.4)] border-[1px] rounded-md"
                key={socLink.id}
                to={socLink.to}
              >
                {<socLink.sicon />}
              </Link>
            ))}
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Nav;
