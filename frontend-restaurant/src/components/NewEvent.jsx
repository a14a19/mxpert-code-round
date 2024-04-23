import React from 'react'
import { newsEvents } from '../data/data';

function NewEvent() {
    return (
        <section className='py-20 bg-[#f7f7f7] flex justify-center items-center flex-col'>
            <h3 className='uppercase mt-10 text-slate-400 font-bold mb-2 tracking-wider text-xl'>Don't miss</h3>
            <hr className='lg:w-[6%] w-[25%] border-2 border-[#c39d63]' />
            <h4 className='text-6xl mt-10 mb-12 text-center'>Our News and Events</h4>
            <p className='text-lg text-slate-500 font-semibold mb-6 text-center lg:w-[50%] w-[75%]'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            </p>
            <div className='flex justify-center items-center px-20 flex-wrap'>
                {
                    newsEvents.map((newsEvent, i) => {
                        return (
                            <div key={i} className='lg:w-[25%] bg-[#fff] mx-12'>
                                <div className='w-full'>
                                    <img src={newsEvent.img} alt="" className='w-full' />
                                </div>
                                <div className='px-4 py-6'>
                                    <p className='text-2xl text-[#000] font-semibold'>{newsEvent.title}</p>
                                    <p className='text-md text-[#c39d63] font-semibold my-4'>{newsEvent.cat}</p>
                                    <p className='text-lg text-slate-500 font-semibold'>{newsEvent.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className='uppercase bg-[#c39d63] px-6 py-1 text-slate-50 tracking-wider mb-8 mt-16'>
                read more
            </button>
        </section>
    )
}

export default NewEvent;