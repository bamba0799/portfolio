import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import esphereLogo from "../../assets/logo2.jpg"; // Import or define the 'esphereLogo' variable

interface HeaderProps {
  toggleSideBar: () => void;
  className?: string;
}
type HeaderIconType = {
  icon: string,
  path: string
}
const HeaderIcon: HeaderIconType[] = [
  {
    icon: "mingcute:home-1-line",
    path: "/",
  },
  {
    icon: "solar:user-linear",
    path: "/profile",
  },
  {
    icon: "icon-park-outline:bank-card",
    path: "/projects",
  },

]

const Header: React.FC<HeaderProps> = ({className}) => {

  const [activeTab, setActiveTab] = useState<string>("");

  const getOnglet = () => {
    const currentPath = window.location.pathname;
    const activeItem = HeaderIcon.find(item => item.path === currentPath);
    if (activeItem) {
      setActiveTab(activeItem.path); 
    }
  }

  useEffect(() => {
    getOnglet();
  }, []);

  return (
    <nav className={`fixed top-0 z-50  bg-white py-[12px] px-[8px] shadow-md ${className}`}>
      <div className="h-full flex flex-row justify-between items-center">
        <div className="row-center gap-x-[4px] md:gap-x-[10px]">
          {HeaderIcon.map((item, index) => (
            <a key={index} href={item.path} onClick={()=>{
              setActiveTab(item.path)
            }} className={`row-center p-[6px] md:p-[8px] rounded-full ${activeTab==item.path?'bg-gray-200':''}`}>
              <Icon icon={item.icon} className={`w-[18px] md:w-[22px] h-[18px] md:h-[22px] ${activeTab==item.path? 'text-black':'text-secondary_gray'} `} />
            </a>
          ))}
        </div>
        <button className="row-between bg-black rounded-[5px] py-2 px-[10px]">
          <Icon icon="ri:star-s-line" className="w-[14px] h-[14px] text-white border rounded-full" />
          <p className="text-white ml-[5px] text-[10px] md:text-[16px]">Embauche moi</p>
        </button>
      </div>
    </nav>
  );
}

export default Header; 

// import React, { useState, useRef, useEffect } from "react";
// import { Icon } from "@iconify/react/dist/iconify.js";

// const Header: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const modalRef = useRef<HTMLDivElement>(null);

//   // Fonction pour ouvrir ou fermer la modal
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   // Fonction pour fermer la modal si l'utilisateur clique en dehors
//   const handleClickOutside = (event: MouseEvent) => {
//     if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//       setIsModalOpen(false); // Fermer la modal si on clique en dehors
//     }
//   };

//   // Utiliser useEffect pour attacher/détacher l'événement de clic
//   useEffect(() => {
//     if (isModalOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     // Nettoyage de l'écouteur lorsque le composant se démonte ou la modal se ferme
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isModalOpen]);

//   return (
//     <nav className="fixed top-0 z-50 w-full bg-white py-[12px] px-[8px] shadow-sm">
//       <div className="h-full flex flex-row justify-between items-center">
//         {/* Bouton "Embauche moi" */}
//         <div className="row-between bg-black rounded-[5px] h-[40px] px-[10px]">
//           <Icon icon="ri:star-s-line" className="w-[14px] h-[14px] text-white border rounded-full" />
//           <button className="text-white ml-[5px]" onClick={toggleModal}>
//             Embauche moi
//           </button>
//         </div>

//         {/* Modal pour le formulaire */}
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
//             <div
//               ref={modalRef}
//               className="bg-white p-6 rounded-lg shadow-lg w-[300px]"
//             >
//               <h2 className="text-lg font-bold mb-4">Contactez-moi</h2>
//               {/* Formulaire */}
//               <form>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Nom
//                   </label>
//                   <input
//                     type="text"
//                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                     placeholder="Votre nom"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                     placeholder="Votre email"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Message
//                   </label>
//                   <textarea
//                     className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                     placeholder="Votre message"
//                   />
//                 </div>
//                 <div className="flex justify-end">
//                   <button
//                     type="submit"
//                     className="bg-blue-500 text-white px-4 py-2 rounded"
//                   >
//                     Envoyer
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;
