import React from 'react'
import { ArrowDownIcon } from "@heroicons/react/24/solid";

function HeroBanner() {
    return (
        <section style={{ backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.5) 100%), url(https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/10/Blog-10-845x321.jpg)" }} className='min-h-[50%] pt-20 text-slate-50 text-center flex items-center flex-col bg-no-repeat bg-cover'>
            <h1 className='text-8xl my-10'>Only Quality Food</h1>
            <p className='lg:w-4/6 text-2xl text-center mb-10'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoeaque ipsa quae ab illo inventore
            </p>
            <div className='w-3/6 mb-8 flex justify-center items-center flex-wrap'>
                <button className='uppercase border-2 px-4 py-2 md:mr-3'>view menu</button>
                <button className='uppercase bg-[#c39d63] border-2 border-[#c39d63] px-4 py-2 md:ml-3'>reservation</button>
            </div>
            <div className='mb-10'>
                <ArrowDownIcon className="h-6 w-6" aria-hidden="true" />
            </div>
        </section>
    )
}

export default HeroBanner