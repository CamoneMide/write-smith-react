import SecT from "../components/SecT";
import happP from "../assets/images/happ.jpg";
import clogoP from "../assets/images/logo.png";

import { motion } from "framer-motion";
import { staggerContainer, slideIn, textVariant } from "../utils/motion";

const Reviews = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="flex flex-col w-full"
    >
      <div className="flex justify-center">
        <SecT label="Reviews" />
      </div>

      <div className="grid w-full grid-cols-2 gap-5 mt-10 max-lg:grid-cols-1">
        <motion.div
          variants={slideIn("left", "tween", 0.15, 0.5)}
          className="flex flex-col justify-center w-full"
        >
          <motion.h2
            variants={textVariant(0.5)}
            className="text-[#013321] text-[30px] font-[700] ftOpenSans"
          >
            What Our Satisfied
            <br />
            Customers Say
          </motion.h2>
          <div className="flex flex-col px-6 mt-10 bg-white cursor-grab rounded-xl">
            <p className="text-[#013321] py-6 border-b-[1px] text-[20px] font-[400] ftDMSans leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              consequuntur fugit, corrupti fuga recusandae ullam quibusdam
              nesciunt harum provident animi!
            </p>
            <div className="flex flex-row py-6">
              <img
                className="w-[40px] h-[40px] flex object-cover flex-col rounded-full border-[2px] border-[#013321]"
                src={clogoP}
                alt="clogo"
              />
              <div className="flex flex-col px-3">
                <h4 className="text-[#013321] text-[16px] font-[600] ftDMSans">
                  Camone_Mide
                </h4>
                <p className="text-[#013321] text-[11px] font-[400] ftDMSans">
                  Happy Customer
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={slideIn("right", "tween", 0.15, 0.5)}>
          <img className="w-[100%] h-[100%]" src={happP} alt="revSvg" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Reviews;
