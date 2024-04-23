import React from 'react'

function Footer() {
    return (
        <footer className='text-slate-50'>
            <aside className="w-full min-h-screen bg-no-repeat bg-cover flex lg:justify-around lg:items-center flex-col lg:flex-row lg:px-16" style={{ backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.5) 100%), url(https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1674823998.jpg?fit=around|562.5:360&crop=562.5:360;*,*)" }}>
                <div className='lg:w-2/6 bg-[#1f1f1f] h-3/4 py-16 px-12'>
                    <p className='text-center mb-14 text-xl'>
                        Hours of Operation
                    </p>
                    <p className='text-center uppercase mb-2'>
                        Mon - Fri
                    </p>
                    <p className='text-center mb-2'>
                        10:00am - 1:00pm
                    </p>
                    <p className='text-center'>
                        4:00pm - 10:30pm
                    </p>
                    <hr className='border-2 border-[#c39d63] my-4' />
                    <p className='text-center uppercase mb-2'>
                        sat
                    </p>
                    <p className='text-center'>
                        3:00pm - 10:30pm
                    </p>
                    <hr className='border-2 border-[#c39d63] my-4' />
                    <p className='text-center uppercase mb-2'>
                        sun
                    </p>
                    <p className='text-center mb-2'>
                        We are closed
                    </p>
                    <p className='w-full flex justify-center items-center mt-10'>
                        <button className='text-center uppercase w-[66%] bg-[#c39d63] p-2'>
                            make a reservation
                        </button>
                    </p>
                </div>
                <div className='lg:w-2/6 bg-[#1f1f1f] h-3/4 py-16 px-12'>
                    <div className='mb-8'>
                        <p className='text-center mb-2 text-xl'>
                            Drop Us a Line
                        </p>
                        <p className='text-center mb-6'>
                            Don't be shy. Let us know if you have any questions!
                        </p>
                        <p className='w-full'>
                            <div className='mx-auto text-center uppercase w-[66%] bg-[#c39d63]'>
                                Contact Us
                            </div>
                        </p>
                    </div>
                    <div>
                        <p className='text-center mb-2 text-xl'>
                            Our Newsletter
                        </p>
                        <p className='text-center mb-2'>
                            Dialogue is an essential part of any script
                        </p>
                        <form className='flex justify center w-full flex-col'>
                            <input type="text" placeholder='First Name' className='w-full bg-[#111111] my-2 p-2'/>
                            <input type="text" placeholder='Last Name' className='w-full bg-[#111111] my-2 p-2'/>
                            <input type="email" placeholder='Email' className='w-full bg-[#111111] my-2 p-2'/>
                            <button role='submit' type='button' className='w-full bg-[#c39d63] my-2 p-2'>Contact Us</button>
                        </form>
                    </div>
                </div>
            </aside>
            <aside className='flex justify-between px-10 py-2 bg-[#171717]'>
                <div>Designed By Elegant Themes | Powered by WordPress </div>
                <div>
                    Google
                </div>
            </aside>
        </footer>
    )
}

export default Footer;