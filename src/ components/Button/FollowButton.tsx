import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

type FollowButtonProps = {
    // isFollowing: boolean,
    onClickFb: () => void
    onClickGitlab: () => void
    onClickGithub: () => void
}
const FollowButton:React.FC<FollowButtonProps> = ({onClickFb,onClickGitlab,onClickGithub}) => {
    return (
        <div className='border bg-secondary_background h-[80px] w-full rounded-[6px] flex flex-row items-center justify-between px-[10px]'>
            <div className='flex flex-row items-center space-x-[10px]'>
                <div className='h-[10px] w-[10px] bg-tertiary_gray rounded-full'></div>
                <p className='text-6 font-bold'>Suivez-moi</p>
            </div>
            <div className=' flex flex-row items-center space-x-[7px]'>
                <button onClick={onClickFb} className='border bg-white p-[0.5rem] rounded-full shadow-sm '>
                    <Icon icon="iconoir:facebook" className='w-[1.7rem] h-[1.7rem] text-secondary_gray' />
                </button>
                <button onClick={onClickGitlab} className='border bg-white p-[0.5rem] rounded-full shadow-sm '>
                    <Icon icon="lucide:gitlab" className='w-[1.7rem] h-[1.7rem] text-secondary_gray' />
                </button>
                <button onClick={onClickGithub} className='border bg-white p-[0.5rem] rounded-full shadow-sm '>
                    <Icon icon="line-md:github-loop" className='w-[1.7rem] h-[1.7rem] text-secondary_gray' />
                </button>
            </div>
        </div>
    );
}

export default FollowButton;
