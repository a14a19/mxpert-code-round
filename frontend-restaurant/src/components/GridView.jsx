import React from 'react'
import { products } from '../data/data'

function GridView() {
    
  return (
    <section className='w-full bg-[#000] flex justify-center flex-wrap h-full'>
        {
            products.map((product, i) => {
                if(product.type === "text-card"){
                    return(
                        <div key={i} className='lg:w-[30%] w-[280px] bg-[#fff] flex justify-center items-center flex-col py-3'>
                            <div className='text-[#c39d63] font-semibold text-2xl'>{product.amt}</div>
                            <div className='text-[#000] font-semibold text-2xl lg:my-6 my-1'>{product.name}</div>
                            <div className='text-slate-500 font-semibold text-lg text-center px-4'>{product.description}</div>
                        </div>
                    )
                } else {
                    return(
                        <div key={i} className='lg:w-[30%] w-[280px]'>
                            <img src={product.img} alt="" className='h-full w-full'/>
                        </div>
                    )
                }
            })
        }
    </section>
  )
}

export default GridView