import React from 'react';
import SecondaryLayout from '../ components/Layout/SecondaryLayout';
import messi from '../assets/lionel-messi.jpg';


interface ProfileProps {

 }

const Profile:React.FC<ProfileProps> = () => {
    return (
        <SecondaryLayout title='Profile'>
            <div className='overflow-hidden text-wrap'>
                <h1 className='font-bold text-[24px] tracking-[-1px]'>C'est moi Moussa</h1>
                <p className='mt-[5px] leading-[30px] text-[14px] md:text-[18px] text-secondary_gray'>Je suis, développeur d'applications web et mobiles avec expertise en React.js, React Native, et Node.js. Je conçois des solutions performantes et centrées sur l'utilisateur, alliant front-end et back-end pour créer des interfaces modernes et des services robustes. Toujours à la recherche de nouveaux défis, je suis disponible pour collaborer sur des projets innovants.</p>
                <div className='border p-[10px] rounded-[10px] mt-[5px] h-[300px]'>
                    <img className=' rounded-[10px] h-full w-full object-cover' src={messi} alt="" />
                </div>
            </div>
        </SecondaryLayout>
    );
}
export default Profile;
