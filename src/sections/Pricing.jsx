import SecP from "../components/SecP";
import SecT from "../components/SecT";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Pricing = ({ productList, addToCart }) => {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-col"
      >
        <div className="flex justify-center">
          <SecT label="Pricing" />
        </div>
        <SecP label="We provide quality services at affordable rates." />

        <div className="grid grid-cols-3 gap-5 mt-10 max-lg:grid-cols-1">
          {productList?.map((opric) => (
            <motion.div
              variants={fadeIn("up", "tween", opric.id / 6, 0.5)}
              className="flex flex-col p-4 bg-white pric-shadow rounded-xl"
              key={opric.id}
            >
              <h2 className="text-[#FFF] cursor-pointer bg-[#013321] mb-5 text-[20px] font-[500] ftRoboto border-[1px] border-[#013321] py-3 px-4 rounded-lg">
                {opric.htext}
              </h2>
              <div className="flex flex-col gap-y-[20px]">
                {opric.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      addToCart(item);
                    }}
                    className="flex flex-row items-center justify-between p-3 rounded-lg cursor-pointer pric-card-shadow"
                  >
                    <p className="text-[#013321CC] text-[15px] font-[500] ftDMSans max-w-[70%]">
                      {item.ptext}
                    </p>
                    <div className="flex flex-row items-center">
                      <h2 className="text-[#212529] text-[17px] font-[500] ftDMSans mr-2">
                        ${item.price}.00
                      </h2>
                      <div
                        className={`w-[20px] h-[20px] flex flex-col justify-center items-center rounded-[5px] border-[1px] border-[#F9AE99]`}
                      >
                        <div
                          className={`rounded-[3px] w-[12px] h-[12px] transt3s ${
                            item.isAddedToCart
                              ? " border-[1px] border-[#013321] bg-[#013321]"
                              : " border-[1px] border-transparent bg-transparent"
                          } `}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Pricing;
