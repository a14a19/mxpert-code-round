import React from 'react'

function OnlyBest() {
  return (
    <section className='py-20 bg-[#f7f7f7] flex justify-center items-center flex-col'>
        <h3 className='uppercase mt-10 text-slate-400 font-bold mb-2 tracking-wider text-xl'>only the best</h3>
        <hr className='lg:w-[10%] w-[25%] border-2 border-[#c39d63]'/>
        <h4 className='text-6xl mt-10 mb-12 text-center'>Fresh Ingredient, Tasty Meals</h4>
        <p className='text-lg text-slate-500 font-semibold mb-6 text-center w-[66%]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sed nihil similique! Autem ad, porro rem harum ut perferendis, consequuntur voluptatibus accusamus voluptatem modi aliquam nihil sit id laboriosam quae.
        </p>
        <button className='uppercase bg-[#c39d63] px-6 py-1 text-slate-50 tracking-wider mb-8'>
            View items
        </button>
    </section>
  )
}

export default OnlyBest;