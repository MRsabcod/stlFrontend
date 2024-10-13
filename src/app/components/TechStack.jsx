import React from 'react'
import TechStackAnimation from './ui/TechStacksAnimation'

const TechStackSection = () => {
  return (
    <div className='flex bg-[#131319] text-white min-h-screen justify-between p-[40px]'>
        <div className='flex flex-wrap justify-center gap-4 mt-4 flex-col'>
            <h1 className='md:text-[40px] md:leading-[61.24px] font-bold md:w-[420px] '>
            We Use Top Notch 100% Technologies
            </h1>
        
        <p className="text-xl font-light md:w-[600px]">
        We leverage cutting-edge, 100% reliable technologies to deliver robust, high-performance solutions. Our focus on innovation ensures you get the best tools and systems tailored to your needs, driving success and efficiency.
        </p>

        </div>
        <TechStackAnimation/>
    </div>
  )
}

export default TechStackSection