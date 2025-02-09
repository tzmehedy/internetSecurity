import heroImg1 from "../assets/images/buildingmanagementimages1.jpg";
import { FaArrowRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-5">
      <div className="md:w-1/2">
        <img src={heroImg1} alt="" />
      </div>
      <div className="md:w-1/2 text-white space-y-10 flex flex-col justify-center">
        <div>
          <h1 className="font-bold text-4xl">Arcabit Internet Security</h1>
          <p className="text-[#898989] font-bold">
            Protection against viruses and network threats
          </p>
        </div>
        <div>
          <button className="btn bg-linear-to-r from-red-800 to-red-600 text-white font-bold text-lg border-none shadow-none rounded-3xl hover:bg-linear-to-r hover:from-red-600 hover:to-red-600">
            Arcabit Packages Specification
            <div className="bg-[#E94F54] p-2 rounded-full">
              <FaArrowRight></FaArrowRight>
            </div>
          </button>
        </div>
        <div className="space-y-1">
          <button className="btn bg-linear-to-r from-red-800 to-red-600 text-white font-bold text-lg border-none shadow-none rounded-3xl hover:bg-linear-to-r hover:from-red-600 hover:to-red-600">
            I am buying this version{" "}
            <div className="bg-[#E94F54] p-2 rounded-full">
              <FaArrowRight></FaArrowRight>
            </div>
          </button>
          <p className="text-[#898989]">30 day trail version</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
