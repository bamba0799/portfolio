import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import esphereLogo from "../../assets/logo2.jpg";

interface SideBarProps {
    isSidebarOpen: boolean;
}
const sideBarItems = [
    { name: "Home", icon: "material-symbols:home", link: "/" },
    { name: "Employés", icon: "clarity:employee-solid", link: "/employes" },
    { name: "Visiteurs", icon: "mdi:user-clock", link: "/visitor" },
    { name: "Evènements", icon: "bxs:calendar-event", link: "/" },
    { name: "Liste d'attente", icon: "medical-icon:i-waiting-area", link: "/wait-list" },
];

const supportItems = [
    { name: "Aide", icon: "carbon:help-filled", link: "/help" },
    { name: "Paramètres", icon: "ant-design:setting-filled", link: "/settings" },
];

const SideBar: React.FC<SideBarProps> = ({ isSidebarOpen }) => {
    // State to track the active tab based on the current path
    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
        // Set the active tab based on the current URL path
        const currentPath = window.location.pathname;
        const activeItem = sideBarItems.find(item => item.link === currentPath) || supportItems.find(item => item.link === currentPath);
        if (activeItem) {
            setActiveTab(activeItem.name);
        }
    }, []);

    return (
        <aside
            className={`fixed top-0 left-0 z-40 bg-white w-[190px] h-screen pt-20 bg-white-300 border-r lg:translate-x-0 transition-transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="h-full px-3 pb-4 overflow-auto">
                <span className="text-blue-500 text-[14px]">Menu</span>
                <div className="my-2 border-b-[1px]"></div>
                {/* Menu items */}
                <div>
                    {sideBarItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className={`flex items-center rounded-md pl-2 py-2 text-gray-700 hover:bg-blue-[20px] mt-2 ${
                                activeTab === item.name ? " bg-paytou_orange text-white" : ""
                            }`}
                            onClick={() => setActiveTab(item.name)} // Update the active tab on click
                        >
                            <Icon icon={item.icon} className="w-5 h-5" />
                            <span className="mx-4 text-[13px]">{item.name}</span>
                        </a>
                    ))}
                </div>
                <div className="my-2 border-b-[1px]"></div>
                <span className="text-blue-500 text-[14px]">Support</span>
                <div>
                    {supportItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className={`flex items-center pl-2 py-2 text-gray-700 hover:bg-blue-[20px] mt-2 ${
                                activeTab === item.name ? "bg-green-500 text-white" : ""
                            }`}
                            onClick={() => setActiveTab(item.name)} // Update the active tab on click
                        >
                            <Icon icon={item.icon} className="w-5 h-5" />
                            <span className="mx-4 text-[13px]">{item.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default SideBar;
