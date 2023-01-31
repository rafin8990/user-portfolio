import React from 'react';
import appone from '../../assets/project/doctors-portal-349f1.firebaseapp.com_.png'
import appTwo from '../../assets/project/exclusive-photography.firebaseapp.com_ (2).png'
import appThree from '../../assets/project/skillshop-academy.firebaseapp.com_.png'
import appfour from '../../assets/project/ema-john-authentication-76f63.firebaseapp.com_ (1).png'
import appFive from '../../assets/project/rafin8990.github.io_panda-comerce_.png'
import appSix from '../../assets/project/rafin8990.github.io_Digital-learning_.png'
import Slide from 'react-reveal/Slide';

const Portfolio = () => {

    const apps = [
        {
            id: 1,
            name: "Doctor's Portal",
            image: appone,
            live: 'https://doctors-portal-349f1.firebaseapp.com/',
            githubClient: "https://github.com/rafin8990/doctors-portal-client",
        },
        {
            id: 2,
            name: "Exclusive Photography",
            image: appTwo,
            live: 'https://exclusive-photography.firebaseapp.com/',
            githubClient: "https://github.com/rafin8990/exclusive-photography-client",
        },
        {
            id: 3,
            name: "Skillshop Academy",
            image: appThree,
            live: 'https://skillshop-academy.firebaseapp.com/',
            githubClient: "https://github.com/rafin8990/skillshop-academy-client",
        },
        {
            id: 4,
            name: "Doctor's Portal",
            image: appFive,
            live: 'https://doctors-portal-349f1.firebaseapp.com/',
            githubClient: "https://github.com/rafin8990/doctors-portal-client",
        },
        {
            id: 5,
            name: "Ema John",
            image: appfour,
            live: 'https://ema-john-authentication-76f63.web.app/',
            githubClient: "https://github.com/rafin8990/ema-john-project-authentication",
        },
        {
            id: 6,
            name: "Doctor's Portal",
            image: appSix,
            live: 'https://doctors-portal-349f1.firebaseapp.com/',
            githubClient: "https://github.com/rafin8990/doctors-portal-client",
        },
    ]
    return (
        <div id='portfolio'>
            <Slide bottom>
                <div>
                    <h1 className='text-4xl text-center font-semibold mt-20'>Here is my All Project</h1>
                </div>
            </Slide>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:ml-5 lg:mx-72  my-10 gap-5'>
                {
                    apps.map(app =>

                        <Slide bottom>

                            <div key={app.id} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={app.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{app.name}</h2>

                                    <div className="card-actions">
                                        <a href={app.live}> <button className="btn btn-secondary">Live Link</button></a>
                                        <a href={app.githubClient}><button className="btn btn-primary">Github</button></a>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    )
                }
            </div>
        </div>
    );
};

export default Portfolio;