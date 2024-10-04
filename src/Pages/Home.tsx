import React, { useEffect } from "react";
import HomeCard from "../ components/Card/HomeCard";
import Chart from "react-apexcharts";
import BandeGraph from "../ components/Graphs/BandeGraph";
import CircularGraph from "../ components/Graphs/CircularGraph";
import PrimaryLayout from "../ components/Layout/PrimaryLayout";
import Button from "../ components/Button/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import photo from "../assets/bmdev.jpeg";

const Home: React.FC = () => {
  const pieChartSeries = [44, 55, 13, 43];
  useEffect(() => {

  }, []);
  return (
    <PrimaryLayout>
      <div>
        <div className="row-between">
          <div className="row-center">
            <div className="rounded-full h-[4px] w-[4px] bg-primary_gray row-center-x"></div>
            <p className="text-secondary_gray ml-[7px] font-bold text-[10px] md:text-[18px]">Développeur d'application</p>
          </div>
          <div className="row-center bg-green-200 px-[10px] py-[3px] rounded-[10px]">
            <div className="rounded-full h-[4px] w-[4px] bg-primary_gray row-center-x"></div>
            <p className="ml-[7px] font-bold text-green-700 text-[10px] md:text-[18px]">Disponible pour travailler</p>
          </div>
        </div>
        {/* second line */}
        <div className="mt-[25px] row-between ">
          <div className="flex flex-col justify-between gap-y-[14px] md:gap-y-[20px] w-[260px] md:w-[550px] py-[10px] pr-[3px] md:pr-0">
            <h1 className="text-h1rimary_gray font-bold text-[17px] md:text-[30px] md:leading-24 ">Je suis Bamba Moussa</h1>
            <p className="text-[12px] md:text-[18px] text-wrap text-secondary_gray">Software ingenieur formé à l'ESATIC. Actuellement développeur d'Application chez e-sphere</p>
            <div className="row-between w-[230px] md:w-[360px]">
              <Button className="bg-black text-white">
                <Icon icon="ri:star-s-line" className="w-[14px] h-[14px]  md:w-[20px] md:h-[20px] text-white border rounded-full" />
                <p className="text-white ml-[6px] md:ml-[10px] button-text-size">Embauche Moi</p>
              </Button>
              <Button className="bg-white text-black border shadow-md">
                <Icon icon="carbon:copy" className="w-[14px] h-[14px] md:w-[20px] md:h-[20px]" />
                <p className="text-black ml-[6px] md:ml-[10px] button-text-size font-bold">Copier Email</p>
              </Button>
            </div>
          </div>
          <div className="rounded-full w-[120px] h-[120px] md:w-[240px] md:h-[240px] p-[5px] md:p-[8px] border bg-white md:mr-[13px]">
            <img src={photo} alt="profile" className="object-cover h-full w-full  rounded-full"/>
          </div>
        </div>
        {/* third line */}
        <div className="border bg-secondary_background h-20 rounded-[5px]">

        </div>
      </div>
    </PrimaryLayout>
  );
};

export default Home;

// <div className="mt-[50px] flex flex-col gap-y-4 pt-7 pb-10  ">
//   <p>dlks,fdknfk</p>
//   {/* <div className="border-2">
//     <BandeGraph />
//   </div> */}

// </div>
// md:grid md:grid-cols-4 md:gap-x-3 lg:ml-[190px]
