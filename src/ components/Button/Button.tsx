import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;

}

const Button:React.FC<ButtonProps> = ({children,className,...props}) => {
    return (
        <div className={`py-[6px] md:py-[12px] row-center px-[6px] md:px-[12px] rounded-[5px] md:rounded-[8px] ${className}`} {...props}>
            {children}
        </div>
    );
}

export default Button;
