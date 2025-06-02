import showcaseP from "../assets/images/vb1.png";
import Button from "../components/Button";

import { motion } from "framer-motion";
// import { TypingText } from '../components';
import { staggerContainer, slideIn, textVariant } from "../utils/motion";

const Showcase = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="fixed z-[2] py-10 flex flex-row max-lg:flex-col w-[100vw] h-[100vh]"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.15, 0.5)}
        className="flex flex-col justify-center pr-10"
      >
        <motion.h2
          variants={textVariant(0.5)}
          className="text-[#013321] text-[50px] font-[700] ftDMSans"
        >
          Writting & Proofreading
        </motion.h2>
        <motion.h4
          variants={textVariant(0.6)}
          className="text-[#000] text-[16px] font-[400] ftRoboto mb-10 mt-[8px]"
        >
          We are trusted by our client base and we are preferred for our
          professional and cost-effective services.
        </motion.h4>
        <div>
          <Button href="#pricing" label="Get Started" />
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.15, 0.5)}
        className="w-[100%]"
      >
        <img
          className="pt-10 md:pr-[140px] pb-[140px] w-[100%] h-[100%] md:h-auto"
          src={showcaseP}
          alt="showcase"
        />
      </motion.div>
    </motion.div>
  );
};

export default Showcase;
