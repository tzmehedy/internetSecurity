import { FaComputer, FaGears } from "react-icons/fa6";
import { PiFileLock, PiLockKey } from "react-icons/pi";
import { MdDesktopAccessDisabled } from "react-icons/md";
import { BsArrowsExpandVertical } from "react-icons/bs";


const Services = () => {
    return (
      <div className="bg-[#1E1E1E] p-20">
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="flex flex-col items-center">
              <div className="text-5xl bg-[#2E1D1D] p-4 rounded-full">
                <FaComputer className="text-[#D61B21]"></FaComputer>
              </div>
              <p className="text-white text-center">
                Advanced workstation <br /> protection
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl bg-[#2E1D1D] p-4 rounded-full">
                <FaGears className="text-[#D61B21]"></FaGears>
              </div>
              <p className="text-white text-center">Two antivirus engines</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl bg-[#2E1D1D] p-4 rounded-full">
                <PiFileLock className="text-[#D61B21]"></PiFileLock>
              </div>
              <p className="text-white text-center">SafeStorage mechanism</p>
            </div>
          </div>

          <div className="flex  flex-col md:flex-row justify-evenly">
            <div className="flex flex-col items-center">
              <div className="text-5xl bg-[#2E1D1D] p-4 rounded-full">
                <MdDesktopAccessDisabled className="text-[#D61B21]"></MdDesktopAccessDisabled>
              </div>
              <p className="text-white text-center">Access control</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl bg-[#2E1D1D] p-4 rounded-full">
                <BsArrowsExpandVertical className="text-[#D61B21]"></BsArrowsExpandVertical>
              </div>
              <p className="text-white text-center">Two-way firewall</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl bg-[#2E1D1D] p-4 rounded-full">
                <PiLockKey className="text-[#D61B21]"></PiLockKey>
              </div>
              <p className="text-white text-center">Security management</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;