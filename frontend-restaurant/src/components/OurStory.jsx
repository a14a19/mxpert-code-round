import React from 'react'

function OurStory() {
    return (
        <section className='flex px-20 py-20 lg:flex-row'>
            <div className='lg:w-[60%] mr-4'>
                <h4 className='uppercase text-slate-400 font-bold mb-2 tracking-wider text-xl'>
                    our story
                </h4>
                <hr className='lg:w-[10%] w-[25%] border-2 border-[#c39d63]'/>
                <h2 className='text-6xl mt-10 mb-12'>
                    Welcome To Royal
                </h2>
                <p className='text-lg text-slate-500 font-semibold mb-6'>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoeaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. doloremque laudatium, totam rem aperiam, eaque ipsa quae ab illo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
                <p className='text-lg text-slate-500 font-semibold'>
                    Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore vertiatis et quasi architecto.
                </p>
            </div>
            <div className='lg:w-[40%] ml-4'>
                <img src="https://images.pexels.com/photos/3434523/pexels-photo-3434523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our Story" className='w-[90%]'/>
            </div>
        </section>
    )
}

export default OurStory;