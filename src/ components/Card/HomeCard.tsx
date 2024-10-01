import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface HomeCardProps {
    name: string;
    number: number;
    icon: string;
    date: string;
}
// streamline:graph-arrow-decrease
const HomeCard: React.FC<HomeCardProps> = ({ name, number, date, icon }) => {
    return (
        <div className="bg-white  flex flex-col  justify-between  w-full h-[110px] rounded-md p-4 ">
            <div className="flex flex-row items-center">
                <div className=" bg-red-50 w-8 h-8 rounded-full flex justify-center items-center">
                    <Icon icon="clarity:employee-solid" className="w-4 h-4 text-red-500" />
                </div>
                <span className="ml-2 text-[13px] text-gray-500">Total employés</span>
            </div>
            <div className="flex flex-row justify-between items-center">
                <span className="text-2xl">100</span>
                <div className="flex flex-col items-start">
                    <div className="flex justify-between w-16">
                        <Icon icon="streamline:graph-arrow-increase" className="w-5 h-5 text-red-500" />
                        <span className="text-[12px] font-bold text-red-500">0,4%</span>
                    </div>
                    <span className="text-[10px]  text-gray-400">vs mois passé</span>
                </div>
            </div>

        </div>
    );
}
export default HomeCard;