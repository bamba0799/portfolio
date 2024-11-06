import React, { useEffect, useState } from "react";
import HomeCard from "../ components/Card/HomeCard";
import Chart from "react-apexcharts";
import BandeGraph from "../ components/Graphs/BandeGraph";
import CircularGraph from "../ components/Graphs/CircularGraph";
import PrimaryLayout from "../ components/Layout/PrimaryLayout";
import Button from "../ components/Button/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import photo from "../assets/bmdev.jpeg";
import messi from '../../../assets/lionel-messi.jpg';
import ProjectCard from "../ components/Projects/ProjectCard";
import FollowButton from "../ components/Button/FollowButton";
import Modal from "../ components/Modal";
import CopyToClipboard from "react-copy-to-clipboard";

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const email = "mousbamba18@gmail.com";


  const myProjects = [
    {
      name: "FanXp",
      description: "Application de mobile de CAN 2023",
      image: "lionel-messi.jpg",
    },
    {
      name: "FanXp",
      description: "Application de mobile de CAN 2023",
      image: "lionel-messi.jpg",
    },
    {
      name: "FanXp",
      description: "Application de mobile de CAN 2023",
      image: "lionel-messi.jpg",
    },
  ]




  const copy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);

  }


  return (
    <PrimaryLayout>
      <div>
        <div className="row-between px-[5px]">
          <div className="row-center">
            <div className="rounded-full h-[5px] w-[5px] bg-primary_gray row-center-x"></div>
            <p className="text-secondary_gray ml-[7px] font-bold text-[10px] md:text-[18px]">Développeur d'application</p>
          </div>
          <div className="row-center bg-green-200 px-[10px] py-[3px] rounded-[10px]">
            <div className="rounded-full h-[4px] w-[4px] bg-primary_gray row-center-x"></div>
            <p className="ml-[7px] font-bold text-green-700 text-[10px] md:text-[18px]">Disponible pour travailler</p>
          </div>
        </div>
        {/* second line */}
        <div className="mt-[25px] row-between px-[5px]">
          <div className="flex flex-col justify-between gap-y-[14px] md:gap-y-[20px] w-[260px] md:w-[550px] py-[10px] pr-[3px] md:pr-0">
            <h1 className="text-h1rimary_gray font-bold text-[17px] md:text-[30px] md:leading-24 ">Je suis Bamba Moussa</h1>
            <p className="text-[14px] md:text-[18px] text-secondary_gray">Software ingenieur formé à l'ESATIC. Actuellement développeur d'Application chez e-sphere</p>
            <div className="row-between w-[230px] md:w-[360px]">
              <Button className="bg-black text-white">
                <Icon icon="ri:star-s-line" className="w-[14px] h-[14px]  md:w-[20px] md:h-[20px] text-white border rounded-full" />
                <p className="text-white ml-[6px] md:ml-[10px] button-text-size">Embauche Moi</p>
              </Button>
              {!isCopied ?
                <CopyToClipboard text={email} onCopy={() => copy()}>
                  <Button className="bg-white text-black border shadow-md">
                    <Icon icon="carbon:copy" className="w-[14px] h-[14px] md:w-[20px] md:h-[20px]" />
                    <p className="text-black ml-[6px] md:ml-[10px] button-text-size font-bold">Copier Email</p>
                  </Button>
                </CopyToClipboard>
                :
                    <p className="text-green-500 text-[12px] lg:text-[14px]">Copié avec succès</p>
              }

            </div>
          </div>
          <button onClick={() => setOpenModal(true)} className="rounded-full w-[120px] h-[120px] md:w-[240px] md:h-[240px] p-[5px] md:p-[8px] border bg-white md:mr-[13px]">
            <img src={photo} alt="profile" className="object-cover h-full w-full  rounded-full" />
          </button>
        </div>
        {/* third line */}
        <div className="bg-secondary_background rounded-[5px] py-[10px] px-[5px] mt-[20px]">
          <div className="row-between">
            <div className="row-center">
              <div className="rounded-full h-[5px] w-[5px] bg-slate-400"></div>
              <p className="text-secondary_gray ml-[7px]  text-[16px] md:text-[20px]">Projets</p>
            </div>
            <div>
              <Button className="bg-white text-black border">
                <p className="text-black ml-[6px]  button-text-size font-bold">Voir plus</p>
                <Icon icon="lsicon:arrow-right-outline" className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] ml-[3px] md:ml-[10px]" />
              </Button>
            </div>
          </div>
          {
            myProjects.map((project, index) => (
              <div key={index} className={`flex flex-col ${index == 0 ? "mt-4" : 'mt-[10px] md:mt-[0px]'}`}>
                <ProjectCard name={project.name} description={project.description} image={project.image} />
              </div>
            ))
          }

          {/* <div className="backdrop-blur-sm border bg-white/30 h-20 w-20">
        </div> */}
        </div>
        <div className=" border-black flex flex-col items-center justify-center mt-[14px]">
          <div className=" border-red-600 flex flex-col items-center justify-center">
            <span className="font-bold text-[20px] md:text-[30px] text-black/80 text-center">Mettons-nous ensemble pour travailler</span>
            <span className="text-[14px] text-secondary_gray text-center">Créer une expérience utilisateur et un design visuel attrayant</span>
          </div>
        </div>
        <div className="px-[5px] mt-[10px] mb-[20px]">
          <FollowButton onClickFb={() => { console.log("fb") }} onClickGitlab={() => { console.log("gitlab") }} onClickGithub={() => { console.log("github") }} />
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)} >
        <div className="border">
          <img src={photo} alt="profile" className="object-cover w-full" />
        </div>
      </Modal>

    </PrimaryLayout>
  );
};

export default Home;

