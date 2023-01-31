import React from 'react';
import Slide from 'react-reveal/Slide';
import SkillBar from 'react-skillbars';
import html from '../../assets/download.png'
import node from '../../assets/nodejs-logo.png'
import JavaScript from '../../assets/JavaScript.png'
import css from '../../assets/CSS.png'
import react from '../../assets/React-logo.png'
import mongodb from '../../assets/MongoDb.png'
import express from '../../assets/express.png'
import firebase from '../../assets/firebase.webp'
import mui from '../../assets/mui.png'
import Bootstrap from '../../assets/Bootstrap_logo.svg.png'
import Tailwind from '../../assets/Tailwind_CSS_Logo.svg.png'
import { HiArrowCircleDown } from 'react-icons/hi';

const Skills = () => {

    const skills = [
        { type: 'React', level: 94 },
        { type: 'Javascript', level: 92 },
        { type: 'Tailwind', level: 98 },
        { type: 'Bootstrap', level: 97 },
        { type: 'HTML', level: 100 },
        { type: 'CSS', level: 95 },
        { type: 'NodeJS', level: 57 },
        { type: 'Mongodb', level: 70 },
        { type: 'ExpressJs', level: 55 },
    ];
    const colors = {
        bar: "#006064",
        title: {
            text: "#fff",
            background: "#006064"
        }
    };
    return (
        <div id='resume'>
            <div>
                <h1 className='text-4xl font-bold text-center'>MY SKILLS</h1>
            </div>
            <div>
                <h1 className='text-xl text-center font-semibold'>Language ,FrameWork & Database</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5'>
                    <Slide bottom>
                        <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={html} alt="" />
                            </div>
                            <h1 className='text-xl text-center'>HTML</h1>
                        </div>
                        <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={css} alt="" />
                            </div>
                            <h1 className='text-xl text-center'>CSS</h1>
                        </div>
                        <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={Tailwind} alt="" />
                            </div>
                            <h1 className='text-xl text-center'>Tailwind CSS</h1>
                        </div>
                        <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={Bootstrap} alt="" />
                            </div>
                            <h1 className='text-xl text-center'>Bootstarp</h1>
                        </div>
                        <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={mui} alt="" />
                            </div>
                            <h1 className='text-xl text-center'>Material UI</h1>
                        </div>
                        <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={react} alt="" />
                            </div>
                            <h1 className='text-xl text-center'>React</h1>
                        </div>
                        <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={JavaScript} alt="" />
                            </div>
                            <h1 className='text-xl text-center'>JavaScript</h1>
                        </div>
                        <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={firebase} alt="" />
                            </div>
                            <h1 className='text-xl text-center'>Firebase</h1>
                        </div>
                        <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={node} alt="" />
                            </div>
                            <h1 className='text-xl text-center'>NodeJS</h1>
                        </div>
                        <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={express} alt="" />
                            </div>
                            <h1 className='text-xl text-center'>ExpressJS</h1>
                        </div>
                        <div className='border border-cyan-900 p-5 rounded-xl shadow-2xl'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={mongodb} alt="" />
                            </div>
                            <h1 className='text-xl text-center'>MongoDB</h1>
                        </div>
                    </Slide>

                </div>
            </div>

            <div className='flex justify-center my-10 '>
                <Slide bottom>
                    <div className='lg:w-1/2 py-10 bg-black p-5 rounded-lg shadow-2xl '>
                        <SkillBar skills={skills} colors={colors}></SkillBar>
                    </div>
                </Slide>
            </div>
            <div className='flex justify-center mb-10'>
                <div id='btn' className='w-60 rounded-2xl ml-0 md:ml-5'>
                    <a href='' download>

                        <button id='text' >
                            <div className='flex items-center'>
                                <p className='mx-5'>DOWNLOAD RESUME</p>
                                <p className='bg-cyan-500 rounded-full text-xl'><HiArrowCircleDown></HiArrowCircleDown></p>
                            </div>

                        </button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Skills;