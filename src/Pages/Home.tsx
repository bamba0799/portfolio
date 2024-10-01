import React, { useEffect } from "react";
import HomeCard from "../ components/Card/HomeCard";
import Chart from "react-apexcharts";
import BandeGraph from "../ components/Graphs/BandeGraph";
import CircularGraph from "../ components/Graphs/CircularGraph";

const Home: React.FC = () => {


  const pieChartSeries = [44, 55, 13, 43];

  useEffect(() => {
  
    
  }, []);

  return (
    <div className="mt-[50px] flex flex-col gap-y-4 pt-7 pb-10 md:grid md:grid-cols-4 md:gap-x-3 md:ml-[190px] border">
      <HomeCard name="Home" number={1} date="2022-01-01" icon="home" />
      <HomeCard name="Home" number={1} date="2022-01-01" icon="home" />
      <HomeCard name="Home" number={1} date="2022-01-01" icon="home" />
      <HomeCard name="Home" number={1} date="2022-01-01" icon="home" />
      <div className="border-2  ">
        <BandeGraph />
      </div>

    </div>
  );
};

export default Home;
