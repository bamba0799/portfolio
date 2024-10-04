import React from 'react';

type PrimaryLayoutProps = {
    children: React.ReactNode;
}

const PrimaryLayout: React.FC<PrimaryLayoutProps> = ({children}) => {
    return (
        <div className='mt-[70px]'>
            {children}
        </div>
    );
}

export default PrimaryLayout;
