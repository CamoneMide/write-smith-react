import SecP from "../components/SecP";
import SecT from "../components/SecT";
import { osConts } from "../constants";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const OurServices = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="flex flex-col"
    >
      <div className="flex justify-center">
        <SecT label="Our Services" />
      </div>
      <SecP label="We Provide Awesome Services." />

      <div className="grid grid-cols-3 gap-5 mt-10 max-lg:grid-cols-1">
        {osConts.map((osCont) => (
          <motion.div
            variants={fadeIn("up", "tween", osCont.id / 6, 0.5)}
            className="py-[30px] px-[20px] os-shadow z-0 w-full"
            key={osCont.id}
          >
            <div className="relative flex flex-col items-center">
              <img className="absolute abtransl" src={osCont.imgat} alt="" />
              <div
                className={`p-8 rounded-full ${
                  osCont.id === 1 && "bg-[#FF586E]"
                } ${osCont.id === 4 && "bg-[#FF586E]"}
              ${osCont.id === 2 && "bg-[#FFA808]"} ${
                  osCont.id === 5 && "bg-[#FFA808]"
                }
              ${osCont.id === 3 && "bg-[#63B0E5]"} ${
                  osCont.id === 6 && "bg-[#63B0E5]"
                } mt-[30px] z-10`}
              >
                <img src={osCont.img} alt="logo" width={50} height={50} />
              </div>
              <h3 className="text-[22px] text-[#013321] font-[500] ftRoboto mt-[30px] text-center">
                {osCont.osH}
              </h3>
              <p className="text-[15px] text-[#01332199] font-[600] text-center mt-2 linh ftDMSans">
                {osCont.osP}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurServices;
