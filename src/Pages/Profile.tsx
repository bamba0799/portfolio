import React from 'react';
import SecondaryLayout from '../ components/Layout/SecondaryLayout';
import messi from '../assets/lionel-messi.jpg';


interface ProfileProps {

}

const Profile: React.FC<ProfileProps> = () => {
    return (
        <SecondaryLayout title='Profile'>
            <div className='overflow-hidden text-wrap'>
                <h1 className='font-bold text-[24px] tracking-[-1px]'>Je suis Moussa</h1>
                <p className='mt-[5px] leading-[30px] text-[14px] md:text-[18px] text-secondary_gray'>Je suis, développeur d'applications web et mobiles avec expertise en React.js, React Native, et Node.js. Je conçois des solutions performantes et centrées sur l'utilisateur, alliant front-end et back-end pour créer des interfaces modernes et des services robustes. Toujours à la recherche de nouveaux défis, je suis disponible pour collaborer sur des projets innovants.</p>
                <div className='border p-[10px] rounded-[10px] mt-[5px] h-[300px] md:h-[500px]'>
                    <img className=' rounded-[10px] h-full w-full object-cover' src={messi} alt="" />
                </div>
                <h1 className='font-bold text-[24px] tracking-[-1px] mt-[20px]'>Plus d'infos sur Moi</h1>
                <p className='mt-[5px] leading-[30px] text-[14px] md:text-[18px] text-secondary_gray'>Je suis titulaire d'une licence en développement d'applications, diplômé de l'ESATIC, la meilleure école d'informatique, où j'ai acquis des compétences avancées en développement logiciel. J'ai débuté ma carrière chez Orange Côte d'Ivoire, travaillant sur des projets télécom innovants et perfectionnant mes compétences en développement à grande échelle.
                    Aujourd'hui, je suis freelance, spécialisé dans la création de solutions web et mobiles sur mesure. J'excelle dans le front-end (React, React Native), le back-end (Node.js, NestJS) et le développement d'applications mobiles multiplateformes. Mon objectif est de fournir des solutions performantes, sécurisées et adaptées aux besoins des clients.
                    Toujours à la recherche de nouveaux défis, je suis disponible pour collaborer sur des projets ambitieux.</p>
            </div>
        </SecondaryLayout>
    );
}
export default Profile;
