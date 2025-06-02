import headerLogo from "../assets/images/logo.png";
import { FaGitAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";
import { socLinks } from "../constants";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

const Footer = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className="flex flex-col gap-10 md:flex-row"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.15, 0.5)}
          className="flex flex-col"
        >
          <Link to="/">
            <img src={headerLogo} alt="logo" width={120} height={40} />
          </Link>
          <div>
            <p className="text-[#013321] text-[16px] ftDMSans font-[400] my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              nihil? Atque vero quas perspiciatis odio qui nulla molestias,
              voluptate ex ad, vel facilis tempora autem obcaecati voluptas a
              architecto! Voluptatum?
            </p>
          </div>
          <div>
            <ul className="flex items-center ">
              {socLinks.map((socLink) => (
                <Link
                  className="text-[16px] text-[#013321] p-[7px] border-[rgb(204, 204, 204)] border-[2px] rounded-md mr-2 ml-0"
                  key={socLink.id}
                  to={socLink.to}
                >
                  {<socLink.sicon />}
                </Link>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.25, 0.5)}
          className="flex flex-col w-full"
        >
          <h2 className="text-[#013321] text-[20px] ftRoboto font-[600] mb-4">
            Navigation Links
          </h2>
          <a
            className="text-[#013321] text-[16px] ftDMSans font-[400] mb-3"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-[#013321] text-[16px] ftDMSans font-[400] mb-3"
            href="#service"
          >
            Services
          </a>
          <a
            className="text-[#013321] text-[16px] ftDMSans font-[400] mb-3"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="text-[#013321] text-[16px] ftDMSans font-[400] mb-3"
            href="#about"
          >
            About Us
          </a>
          <a
            className="text-[#013321] text-[16px] ftDMSans font-[400] mb-3"
            href="#blog"
          >
            Blog
          </a>
          <a
            className="text-[#013321] text-[16px] ftDMSans font-[400] mb-3"
            href="#contact"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.35, 0.5)}
          className="flex flex-col w-full"
        >
          <h2 className="text-[#013321] text-[20px] ftRoboto font-[600] mb-4">
            Services
          </h2>
          <a
            className="text-[#013321] text-[16px] ftDMSans font-[400] mb-3"
            href="#"
          >
            Proofreading
          </a>
          <a
            className="text-[#013321] text-[16px] ftDMSans font-[400] mb-3"
            href="#"
          >
            Job Application
          </a>
          <a
            className="text-[#013321] text-[16px] ftDMSans font-[400] mb-3"
            href="#"
          >
            CV/Resume and Cover letter
          </a>
          <a
            className="text-[#013321] text-[16px] ftDMSans font-[400] mb-3"
            href="#"
          >
            College Application
          </a>
          <a
            className="text-[#013321] text-[16px] ftDMSans font-[400] mb-3"
            href="#"
          >
            Personal Statement Review
          </a>
          <a
            className="text-[#013321] text-[16px] ftDMSans font-[400] mb-3"
            href="#"
          >
            IELTS Writting Module PREP
          </a>
        </motion.div>
      </motion.div>

      <div className="py-3 ftRoboto font-[400] border-t-[1px] text-[14px] md:text-[16px] text-[#013321] mt-5">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p>Copyright &copy; {new Date().getFullYear()} Write-Smith.</p>
          <p className="flex flex-row items-center">
            <strong>Developed by</strong>{" "}
            <a href="#" target="_blank" className="ml-1">
              <i>Camone_Mide</i>
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/mide-web-developer"
              target="_blank"
              className="text-[14px] text-[#013321] p-[5px] border-[rgb(204, 204, 204)] border-[2px] rounded-md mx-2"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/CamoneMide"
              target="_blank"
              className="text-[14px] text-[#013321] p-[5px] border-[rgb(204, 204, 204)] border-[2px] rounded-md ml-0"
            >
              <FaGithub size={14} />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
