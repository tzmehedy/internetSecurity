import logo1 from "../assets/images/logo1-removebg-preview.png"
import logo2 from "../assets/images/logo2-removebg-preview.png"
import logo3 from "../assets/images/logo3-removebg-preview.png"
import logo4 from "../assets/images/logo4-removebg-preview.png"
import logo5 from "../assets/images/logo5-removebg-preview.png"
import logo6 from "../assets/images/logo6-removebg-preview.png"
const Services = () => {
    return (
      <div className="bg-[#1E1E1E] p-20 space-y-10">
        <div className="flex flex-col md:flex-row justify-evenly">
          <div className="flex flex-col items-center">
            <img className="w-20 h-20" src={logo1} alt="" />
            <p className="text-white text-center">
              Advanced workstation <br /> protection
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20 h-20" src={logo2} alt="" />
            <p className="text-white text-center">Two antivirus engines</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20 h-20" src={logo3} alt="" />
            <p className="text-white text-center">SafeStorage mechanism</p>
          </div>
        </div>

        <div className="flex  flex-col md:flex-row justify-evenly">
          <div className="flex flex-col items-center">
            <img className="w-20 h-20" src={logo4} alt="" />
            <p className="text-white text-center">Access control</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20 h-20" src={logo5} alt="" />
            <p className="text-white text-center">Two-way firewall</p>
          </div>
          <div className="flex flex-col items-center">
            <img className="w-20 h-20" src={logo6} alt="" />
            <p className="text-white text-center">Security management</p>
          </div>
        </div>
      </div>
    );
};

export default Services;