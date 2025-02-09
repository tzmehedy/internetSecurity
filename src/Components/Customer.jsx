import { FaArrowRight } from "react-icons/fa";
import bg from "../assets/images/bg1.jpg"

const Customer = () => {
    return (
      <div
        className="md:h-[500px]  w-full my-20 bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="bg-linear-to-r from-red-500 to-red-600 opacity-85 h-full flex items-center p-20">
          <div>
            <div className="space-y-2">
              <h1 className="text-white font-bold text-4xl">
                Arcabit Internet Security
              </h1>
              <p className="text-white">
                Protection against viruses and online threats
              </p>
            </div>
            <div className="mt-20">
              <button className="btn bg-[#000000] border-none shadow-none text-[#E31910] font-bold rounded-3xl text-xl p-6">
                I&apos;m buying
                <div className="bg-[#383838] p-2 rounded-full">
                  <FaArrowRight className="text-[#E31910]"></FaArrowRight>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Customer;