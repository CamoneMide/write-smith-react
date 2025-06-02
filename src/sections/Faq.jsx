import React from "react";
import SecP from "../components/SecP";
import SecT from "../components/SecT";
import reviewP from "../assets/images/faq.png";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { cmyaccordion } from "../constants";

import { motion } from "framer-motion";
import { staggerContainer, slideIn, fadeIn } from "../utils/motion";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.8 },
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Faq = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center">
        <SecT label="FAQ" />
      </div>
      <SecP label="We provide quality services at affordable rates." />

      <div className="flex flex-row gap-10 mt-10 max-lg:flex-col-reverse">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          // viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col justify-center w-[100%]"
        >
          {cmyaccordion.map((myaccordion) => (
            <motion.div
              key={myaccordion.id}
              variants={fadeIn("up", "tween", myaccordion.id / 7, 0.3)}
              viewport={{ once: true }}
            >
              <Accordion
                open={open === myaccordion.id}
                animate={CUSTOM_ANIMATION}
                icon={
                  <Icon
                    id={myaccordion.id}
                    open={open}
                    className="justify-self-end"
                  />
                }
              >
                <AccordionHeader
                  className="hover:text-[#FFF] mb-[10px] cursor-pointer ftDMSans text-[18px] text-[#FFF] font-[600] bg-[#013321] py-[16px] px-[16px] border-[transparent] rounded-md"
                  onClick={() => handleOpen(myaccordion.id)}
                >
                  <div className="flex justify-start">
                    <span className="hidden mr-5 md:flex">
                      0{myaccordion.id}
                    </span>
                    {myaccordion.accH}
                  </div>
                </AccordionHeader>
                <AccordionBody
                  className={`relative ${
                    open === myaccordion.id
                      ? "text-[#212529]"
                      : "text-[#FFF] opacity-0"
                  } bg-white ftDMSans text-[16px] font-[400] px-1`}
                >
                  {myaccordion.accP}
                </AccordionBody>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="flex flex-col justify-center">
          <h5 className="mb-[16px] cursor-pointer ftDMSans text-[18px] text-[#FFF] font-[600] bg-[#013321] py-[16px] px-[16px] border-[transparent] rounded-md"><span className="mr-5">01</span> Which license do I need?</h5>
          <h5 className="mb-[16px] cursor-pointer ftDMSans text-[18px] text-[#FFF] font-[600] bg-[#013321] py-[16px] px-[16px] border-[transparent] rounded-md"><span className="mr-5">02</span> How do I get access to a theme?</h5>
          <h5 className="mb-[16px] cursor-pointer ftDMSans text-[18px] text-[#FFF] font-[600] bg-[#013321] py-[16px] px-[16px] border-[transparent] rounded-md"><span className="mr-5">03</span> How do I see previous order?</h5>
          <h5 className="cursor-pointer ftDMSans text-[18px] text-[#FFF] font-[600] bg-[#013321] py-[16px] px-[16px] border-[transparent] rounded-md"><span className="mr-5">04</span> How can set notification?</h5>
          <div className="py-[16px] px-[20px]">
            <p className="ftDMSans text-[16px] text-[#212529] font-[600]">Proactively monetize long-term high-impact innovation and scalable relationships. Dynamically mesh principle-centered functionalities before next-generation best practices. Distinctively empower.</p>
          </div>
        </div> */}

        <div className="w-[100%]">
          <img className="w-[100%] h-[100%]" src={reviewP} alt="revSvg" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
