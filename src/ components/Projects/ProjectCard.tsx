import React from 'react';
import ProjetIcon from './ProjetIcon';
import logo2 from '../../../assets/logo2.jpg';
import { Icon } from '@iconify/react/dist/iconify.js';

interface ProjectCardProps {
    className?: string;
    name: string;
    description: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ className, name, description, image, ...props }) => {
    return (
        <button className=' flex flex-row justify-center items-center w-full h-[170px] md:h-[111px] rounded-[6px] md:rounded-[10px] md:hover:transition-colors md:hover:duration-500 md:hover:border md:hover:bg-gray-200 '>
            <div className={`border flex flex-col items-start md:flex-row md:items-center justify-between shadow-md bg-white w-full md:w-[98.9%] h-[170px] md:h-[100px] rounded-[6px] md:rounded-[10px] p-[14px] ${className}`} {...props}>
                <ProjetIcon image={image} className='md:hidden' />
                <div className=' h-[55px] flex flex-col md:flex-row md:items-center justify-between items-start'>
                    <div>
                        <ProjetIcon image={image} className='hidden md:flex' />
                    </div>
                    <div className='flex flex-col items-start md:ml-[20px]'>
                        <p className="text-[18px] font-bold">FanXp</p>
                        <p className="text-[14px] text-secondary_gray">Application de mobile de CAN 2023</p>
                    </div>
                </div>
                <div className='hidden md:flex'>
                    <Icon icon="fe:arrow-right" className="w-[20px] h-[20px] text-secondary_gray" />
                </div>
            </div>
        </button>
    );
}

export default ProjectCard;
