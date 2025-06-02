import blogImg from "../assets/images/3.jpg";
import logo2 from "/logo2.png";
import { FaClock, FaMailBulk, FaTools } from "react-icons/fa";

const BlogCard = () => {
  return (
    <div className="py-[30px] px-[15px] flex flex-col blogCardShadow bg-[#FFF] ftDMSans">
      <div className="">
        <img
          src={blogImg}
          alt="blogImg"
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-[24px] lg:text-[28px] text-[#013321] font-[600] mt-[20px] mb-[8px] ftRoboto">
        Proofreading Tips
      </h3>
      <p className="text-[16px] text-[#013321] font-[400] mb-[16px]">
        How did you feel when you spotted an error in your work (thesis,
        presentation or any...
      </p>
      <div className="flex flex-row items-center justify-between mb-[10px]">
        <a href="" className="text-[18px] text-[#013321] font-[500]">
          Read More
        </a>
        <div className="flex flex-row">
          <div className="w-[15px] h-[27px]">
            <img src={logo2} alt="logo2" />
          </div>

          <span className="text-[15px] text-[#013321] font-[500]">
            Write-smith
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between py-[5px] px-[10px] bg-[#01332180]">
        <div className="flex flex-row items-center text-[12px] lg:text-[15px] text-[#FFF]">
          <FaTools size={16} />
          <span className="ml-1">Proofreading</span>
        </div>
        <div className="flex flex-row items-center text-[12px] lg:text-[15px] text-[#FFF]">
          <FaClock size={16} />
          <span className="ml-1">5hrs ago</span>
        </div>
        <div className="flex flex-row items-center text-[12px] lg:text-[15px] text-[#FFF]">
          <FaMailBulk size={16} />
          <span className="ml-1">5</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
