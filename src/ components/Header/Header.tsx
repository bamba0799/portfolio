import { Icon } from "@iconify/react/dist/iconify.js";
import React  from "react";
import esphereLogo from "../../assets/logo2.jpg"; // Import or define the 'esphereLogo' variable

interface HeaderProps {
  toggleSideBar: () => void;
}
const Header: React.FC<HeaderProps> = ({toggleSideBar}) => {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white ">
            {/* <h2>Header</h2> */}
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
              <div className="flex flex-items-center justify-between">
                <div className="flex items-center justify-start rtl:justify-end">
                  <button onClick={toggleSideBar} className=" inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <Icon icon="vaadin:menu" className="w-4 h-4 text-black" />
                  </button>
                  <div className="flex items-center ">
                    <img className="w-9 h-9 border  hidden md:flex md:items-center rounded-full" src={esphereLogo} alt="" />
                    <h1 className="text-blue-500 font-seld text-xl ml-2">E-sphere</h1>
                </div>
                </div>
                <button>
                  <span>Profile</span>
                </button>
              </div>
            </div>
        </nav>
    );
}

export default Header; 