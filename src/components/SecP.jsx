import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motion";

const SecP = ({ label }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.p
        variants={textVariant(0.2)}
        className="text-[25px] text-[#013321] mb-[16px] font-[700] text-center ftOpenSans"
      >
        {label}
      </motion.p>
    </motion.div>
  );
};

export default SecP;
