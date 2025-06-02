import SecP from "../components/SecP";
import SecT from "../components/SecT";
import { whyConts } from "../constants";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const WhyUs = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="flex flex-col"
    >
      <div className="flex justify-center">
        <SecT label="Why Us" />
      </div>
      <SecP label="We provide quality works." />
      <div className="grid grid-cols-3 gap-5 mt-10 max-lg:grid-cols-1">
        {whyConts.map((whyCont) => (
          <motion.div
            variants={fadeIn("up", "tween", whyCont.id / 6, 0.5)}
            key={whyCont.id}
            className="flex flex-col items-center p-5 why-shadow"
          >
            <div className="p-5 rounded-full bg-[#F4F9F9]">
              <img src={whyCont.img} alt="logo" width={50} height={50} />
            </div>
            <h3 className="text-[22px] text-[#013321] font-[500] ftRoboto my-5">
              {whyCont.whH}
            </h3>
            <p className="text-[15px] text-[#01332199] font-[600] text-center ftDMSans">
              {whyCont.whP}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyUs;
