import { PiFileLock } from "react-icons/pi";
import { LuDatabaseBackup } from "react-icons/lu";
import { LuFolderSearch } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoTimerOutline } from "react-icons/io5";
import { CiEraser } from "react-icons/ci";
import { TbProgressBolt } from "react-icons/tb";

const ToolsManagement = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-4xl">Security Management Tools</h1>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-5 p-20">
          <div className="md:w-96 h-[600px] bg-[#f9f9f9] flex items-center">
            <div className="px-3 space-y-2">
              <PiFileLock className="text-7xl text-[#D61B21]"></PiFileLock>
              <p className="text-2xl font-bold">Safe Storage</p>
            </div>
          </div>
          <div className="md:w-96 h-[600px] bg-[#f9f9f9] flex items-center">
            <div className="px-3 space-y-2">
              <LuDatabaseBackup className="text-7xl text-[#D61B21]"></LuDatabaseBackup>
              <p className="text-2xl font-bold">Backup</p>
            </div>
          </div>
          <div className="md:w-96 h-[600px] bg-[#f9f9f9] flex items-center">
            <div className="px-3 space-y-2">
              <LuFolderSearch className="text-7xl text-[#D61B21]"></LuFolderSearch>
              <p className="text-2xl font-bold">System audit</p>
            </div>
          </div>
        </div>

        <div className="px-20 grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="md:w-72 h-[600px] bg-[#f9f9f9] flex items-center">
            <div className="px-3 space-y-2">
              <TfiMenuAlt className="text-7xl text-[#D61B21]"></TfiMenuAlt>
              <p className="text-2xl font-bold">Process Manager</p>
            </div>
          </div>
          <div className="md:w-72 h-[600px] bg-[#f9f9f9] flex items-center">
            <div className="px-3 space-y-2">
              <IoTimerOutline className="text-7xl text-[#D61B21]"></IoTimerOutline>
              <p className="text-2xl font-bold">Quarantine</p>
            </div>
          </div>
          <div className="md:w-72 h-[600px] bg-[#f9f9f9] flex items-center">
            <div className="px-3 space-y-2">
              <CiEraser className="text-7xl text-[#D61B21]"></CiEraser>
              <p className="text-2xl font-bold">System Cleaning</p>
            </div>
          </div>
          <div className="md:w-72 h-[600px] bg-[#f9f9f9] flex items-center">
            <div className="px-3 space-y-2">
              <TbProgressBolt className="text-7xl text-[#D61B21]"></TbProgressBolt>
              <p className="text-2xl font-bold">Arcabit Rescue Disk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsManagement;
