import React from 'react';

type SecondaryLayoutProps = {
    children: React.ReactNode;
    title: string;
}

const SecondaryLayout: React.FC<SecondaryLayoutProps> = ({children, title}) => {
    return (
        <div className='mt-[70px] px-[5px]'>
            <div className='flex flex-row items-center mb-[20px]'>
                <div className='h-[5px] w-[5px] border rounded-full bg-primary_gray'></div>
                <p className="text-secondary_gray ml-[7px] text-[16px] md:text-[20px]">{title}</p>
            </div>
            {children}
        </div>
    );
}

export default SecondaryLayout;
