import React from 'react'
import { testimonials } from '../data/data';
import { StarIcon } from "@heroicons/react/24/solid";

function Testimonial() {
    return (
        <section className='py-20 flex justify-center items-center flex-col lg:h-screen h-full'>
            <h3 className='uppercase mt-10 text-slate-400 font-bold mb-2 tracking-wider text-xl'>Testimonials</h3>
            <hr className='lg:w-[8%] w-[25%] border-2 border-[#c39d63]' />
            <h4 className='text-6xl mt-10 mb-12 text-center'>What People are Saying</h4>
            <div className='flex justify-center items-center px-20 flex-wrap'>
                {
                    testimonials.map((testimonial, i) => {
                        return (
                            <div key={i} className='lg:w-[18%] mx-4 py-4'>
                                <div className='flex mb-4'>
                                    <StarIcon className="h-6 w-6 text-[#c39d63]" aria-hidden="true" />
                                    <StarIcon className="h-6 w-6 text-[#c39d63]" aria-hidden="true" />
                                    <StarIcon className="h-6 w-6 text-[#c39d63]" aria-hidden="true" />
                                    <StarIcon className="h-6 w-6 text-[#c39d63]" aria-hidden="true" />
                                    <StarIcon className="h-6 w-6 text-[#c39d63]" aria-hidden="true" />
                                </div>
                                <p className='text-2xl text-[#000] font-semibold'>{testimonial.title}</p>
                                <p className='text-lg text-slate-500 font-semibold my-6'>{testimonial.description}</p>
                                <p className='text-lg text-[#000] font-semibold'>{testimonial.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonial;