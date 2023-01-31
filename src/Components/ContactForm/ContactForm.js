import React from 'react';
import { useForm } from 'react-hook-form';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Slide } from 'react-reveal';
import './ContactForm.css'

const ContactForm = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {

    }

    return (
        <div id='contact'>
            <Slide bottom>
                <div>
                    <h1 className='text-center text-4xl text-emerald-900 font-semibold'>Get In Touch</h1>
                </div>
                <div>
                    <div className='flex justify-center mt-5'>
                        <form onBlur={handleSubmit(handleLogin)} className=' border rounded-lg p-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="">Name</span>
                                </label>
                                <input {...register("name", { required: "Name is required" })} type="text" placeholder="Enter Your Name" className="input input-bordered md:w-[450px] " />
                                {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="">Email</span>
                                </label>
                                <input {...register("email", { required: "Please Enter a valid email address" })} type="email" placeholder="Enter Your Email" className="input input-bordered md:w-[450px] " />
                                {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="">Your Text</span>
                                </label>
                                <textarea {...register("text", { required: "Enter text is required" })} type="text" placeholder="Enter Your Text" className="input input-bordered md:w-[450px] " />
                                {errors.text && <p className="text-red-600">{errors.text?.message}</p>}
                            </div>
                            <div id='btn' className='form-control rounded-xl  w-44 mt-5'>
                                <button id='text' type='submit' value="Send">
                                    <div className='flex items-center'>
                                        <p className='mx-5'>Send Message</p>
                                        <p className='bg-cyan-500 rounded-full '><HiArrowNarrowRight></HiArrowNarrowRight></p>
                                    </div>

                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </Slide>
        </div>
    );
};

export default ContactForm;