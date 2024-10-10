"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const sponsors = [
  { src: "/bykea.png?height=50&width=100&text=HBL", alt: "HBL Logo" },
  { src: "/hbl.png?height=50&width=100&text=BYKEA", alt: "BYKEA Logo" },
  { src: "/pakola.png?height=50&width=100&text=Pakola", alt: "Pakola Logo" },
  { src: "/pasha.png?height=50&width=100&text=P@SHA", alt: "P@SHA Logo" },
  { src: "/hbl.png?height=50&width=100&text=SIRAT", alt: "SIRAT Logo" },
  
]

export default function SponsorLogoSlider() {
  const [isHovered, setIsHovered] = useState(false)
  const sliderRef = useRef(null)

  
  
  return (
    <div className="w-full bg-gray-100 py-8 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Our Sponsors</h2>
        <Marquee className='flex items-center w-[460px] '>
        {[...sponsors,...sponsors].map((sponsor)=>{
        return(
         
          <Image src={sponsor.src} alt={sponsor.alt} className='mr-6' width={92} height={24} />
      
      )})}
    </Marquee>
      </div>
    </div>
  )
}