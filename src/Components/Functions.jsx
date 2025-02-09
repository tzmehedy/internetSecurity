import { PiFileLock } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { RiSpam3Line } from "react-icons/ri";
import { TbBrowserX } from "react-icons/tb";
import { GiFirewall } from "react-icons/gi";
import { MdDesktopAccessDisabled } from "react-icons/md";
import { TbBrowserCheck } from "react-icons/tb";
import { BsUsbDriveFill } from "react-icons/bs";
const Functions = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-4xl">
          The main protective functions of the package
        </h1>
      </div>

      <div className="p-20 grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="md:w-72 h-[600px] bg-[#f9f9f9] flex items-center">
          <div className="px-3 space-y-2">
            <PiFileLock className="text-7xl text-[#D61B21]"></PiFileLock>
            <p className="text-2xl font-bold">File Protection</p>
          </div>
        </div>
        <div className="md:w-72 h-[600px] bg-[#f9f9f9] flex items-center">
          <div className="px-3 space-y-2">
            <MdOutlineEmail className="text-7xl text-[#D61B21]"></MdOutlineEmail>
            <p className="text-2xl font-bold">Mail Protection</p>
          </div>
        </div>
        <div className="md:w-72 h-[600px] bg-[#f9f9f9] flex items-center">
          <div className="px-3 space-y-2">
            <RiSpam3Line className="text-7xl text-[#D61B21]"></RiSpam3Line>
            <p className="text-2xl font-bold">Spam Filter</p>
          </div>
        </div>
        <div className="md:w-72 h-[600px] bg-[#f9f9f9] flex items-center">
          <div className="px-3 space-y-2">
            <TbBrowserX className="text-7xl text-[#D61B21]"></TbBrowserX>
            <p className="text-2xl font-bold">Browser Protection</p>
          </div>
        </div>
        <div className="md:w-72 h-[600px] bg-[#f9f9f9] flex items-center">
          <div className="px-3 space-y-2">
            <GiFirewall className="text-7xl text-[#D61B21]"></GiFirewall>
            <p className="text-2xl font-bold">Firewall</p>
          </div>
        </div>
        <div className="md:w-72 h-[600px] bg-[#f9f9f9] flex items-center">
          <div className="px-3 space-y-2">
            <MdDesktopAccessDisabled className="text-7xl text-[#D61B21]"></MdDesktopAccessDisabled>
            <p className="text-2xl font-bold">Access Control</p>
          </div>
        </div>
        <div className="md:w-72 h-[600px] bg-[#f9f9f9] flex items-center">
          <div className="px-3 space-y-2">
            <TbBrowserCheck className="text-7xl text-[#D61B21]"></TbBrowserCheck>
            <p className="text-2xl font-bold">Safe Browser</p>
          </div>
        </div>
        <div className="md:w-72 h-[600px] bg-[#f9f9f9] flex items-center">
          <div className="px-3 space-y-2">
            <BsUsbDriveFill className="text-7xl text-[#D61B21]"></BsUsbDriveFill>
            <p className="text-2xl font-bold">USB device control</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Functions;
