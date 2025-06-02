import SecT from "../components/SecT";
import cusP from "../assets/images/cusU.png";
import Button from "../components/Button";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

const ContactUs = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="flex flex-col w-full"
    >
      <div className="flex justify-center">
        <SecT label="Contact Us" />
      </div>

      <div className="grid grid-cols-2 gap-10 mt-20 max-lg:grid-cols-1 pb-[20px] lg:py-[20px]">
        <div className="relative h-[400px] flex flex-col justify-center w-full">
          <img src={cusP} alt="revSvg" />
          <div className="absolute">
            <h4 className="text-[#FFF] bg-[rgba(0,0,0,0.9)] text-[20px] font-[600] ftDMSans p-4 cursor-pointer">
              +44 7443 064265
            </h4>
            <h4 className="bg-[rgba(1,51,33,0.9)] text-[#FFF] text-[25px] font-[600] ftDMSans p-4 mt-4 cursor-pointer">
              admin@write-smith.com
            </h4>
          </div>
        </div>

        <motion.div
          variants={fadeIn("down", "tween", 0.15, 0.5)}
          className="flex flex-col flex-wrap justify-center w-full"
        >
          <h4 className="text-[#013321] text-[25px] ftRoboto font-[700]">
            Send us a message
          </h4>
          <div className="flex flex-col gap-5 my-5 md:flex-row">
            <input
              className="w-full p-[10px] bg-white outline-none border-[1px] rounded-sm"
              type="text"
              name="name"
              placeholder="Enter Name..."
            />
            <input
              className="w-full p-[10px] bg-white outline-none border-[1px] rounded-sm"
              type="email"
              name="email"
              placeholder="Your Email..."
            />
          </div>
          <textarea
            className="w-full p-[10px] bg-white outline-none border-[1px] rounded-md my-3"
            name="message"
            id=""
            rows="8"
            placeholder="Message..."
          ></textarea>
          <div className="mt-5">
            <Button href="/" label="Send Message" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
