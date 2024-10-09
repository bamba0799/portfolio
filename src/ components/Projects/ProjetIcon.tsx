import React from 'react';
import messi from '../../assets/lionel-messi.jpg';

interface ProjetIconProps {
    className?: string;
    image: string;
}
const ProjetIcon:React.FC<ProjetIconProps> = ({className, image}) => {
    return (
        <div className={`${className} backdrop-blur-lg bg-white/30 border rounded-full h-[76px] md:h-[70px] w-[76px] md:w-[70px] row-center shadow-md`}>
            <div className='border  rounded-full h-[65px] md:h-[60px] w-[65px] md:w-[60px]'>
                <img src={messi} alt="logo" className='w-full h-full rounded-full object-cover'/>
            </div>
        </div>
    );
}

export default ProjetIcon;
