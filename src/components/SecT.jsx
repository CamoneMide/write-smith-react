import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";

const SecT = ({ label }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      <motion.h2
        variants={textVariant(0.1)}
        className="text[15px] text-[#F35E33] rounded-md mb-[8px] py-[5px] px-[10px] bg-[#F35E331A] font-[500] text-center ftRoboto"
      >
        {label}
      </motion.h2>
    </motion.div>
  );
};

export default SecT;
