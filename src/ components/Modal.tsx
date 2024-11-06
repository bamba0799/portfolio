import React from 'react';

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const Modal:React.FC<ModalProps> = ({open, onClose, children}) => {
    return (
        <div className={` fixed inset-0 flex justify-center items-center transition-colors ${open?"visible bg-black/50":"invisible"}`} 
            onClick={onClose}>
        <div onClick={(e)=>e.stopPropagation()} className={`bg-white shadow  transition-all w-[90%] lg:w-[50%] ${open?"scale-100 opacity-100":"scale-110 opacity-0"}`}>
                <button onClick={onClose} className=' absolute top-2 right-2 w-7 h-7 border border-neutral-200 rounded-[2px] text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600'>
                    x
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
