import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;

}

const Button:React.FC<ButtonProps> = ({children,className, onClick,...props}) => {
    return (
        <button onClick={onClick} className={`py-[6px] md:py-[12px] row-center px-[6px] md:px-[12px] rounded-[5px] md:rounded-[8px] ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;
