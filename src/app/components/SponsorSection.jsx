"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const sponsors = [
  { src: "/bykea.png?height=50&width=100&text=HBL", alt: "HBL Logo" },
  { src: "data:image/webp;base64,UklGRo4DAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSMkAAAARX6C2jSQ1ePnpIsaHiAjAe5T1JX+C01rb3uT7Nsj703QvI0RmBGwckTiQkcjI4PglnX+BNl5QvB4i+j8BIpKhesb09a6ZAypdVCFRnhf6qQiJ1A7QGT8SbW1UBKfI43IIxq9EbA3kEJnSKMMtUZcYBy5rtpHLDdpEvr6xlZ7NRjZH9/f/L5CRzfEFNntn27Vs603kcgN4Lmtw4SqBfaRaKsZPJmsAHCOPy1WB8Z2nNiIqKDxL09eOoHpxNHOoSIYMqF4Erp4BKgoAVlA4IJ4CAAAQEgCdASqAAIAAPpFCmkilv6KhL5WoA/ASCUAaYwIPafyKc1DzAect0SXUZ89x7OOQ3ggOuw2ntryxRbTAsoEdry1Ivb2WbsotAWYEguA2E/wVrWg4SYWMFBj6j195tK2Ilhrv4K9IU9zJgOAv4VjgAqQNzT9jzAdz8mb94CZPxjfGUI20EbH8cHsuTes2ZYWK8qzySlErqIAA/u2QOmn8Nf/5sCXQD85SyNOG3gAjjliq3/WAoF3v+3X3E4IeCWyxET/0UcsNVsnQXezqj9+rwqIo2ygxcZD5o1fzwebVfw4k+DdT+kTBj4pKujEAwdab+vOSI99XeqH/uh31658g/0y9MscrxnM2aUp+YjJAL8Vs4WWIZMC94GdwP1YcKTvPFttVYe6Nn4bZOGU1sy+FyyXG+SzNF6OePB+XSqkdaqfCbfSuxjpB7LLwEMp3VcAKtbD8MVTEZPT725RpFWWn5FOOuOPdESlT2xmc6IuSF1w4G3Y9NDWKXtUZXKEO99If7mCpJ7N2TtMU/GvepU9y7aPc23HrrOvD4naHnakw3IGSdSSzT8KJ8ZaXj4Ot3JWsmFbUi2pspkYPJRqQZrfhOgVXY61RLHH8gjclubSVvf7GkCDq3wrn+PLyYFQl4MJPGZowk2uQsCJkvsx8/w+QKnJT9ufvHE1c9s3hTEff/uBeJ7Idk8ZCwI9sCo88AfWtE9RCiD4kk+Hcxk53PWC3XOuVxOcVg6kSkqe2V8PZnfJYjJLp0X/e75u00oARRQ1blmoPIM+n2DyKFoR1/co8wx/ty6l9wuz503PpvDE0kRklRq+t/2xgnlTai39fslyPzA46kFmt9a0nn3WJ4fllqZlgOgGW9/5AcBAAnpbBrH3nXQjP3Yf1J4GAzAgA", alt: "BYKEA Logo" },
  { src: "/pakola.png?height=50&width=100&text=Pakola", alt: "Pakola Logo" },
  { src: "data:image/webp;base64,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", alt: "P@SHA Logo" },
  { src: "/hbl.png?height=50&width=100&text=SIRAT", alt: "SIRAT Logo" },
  
]

export default function SponsorLogoSlider() {
  const [isHovered, setIsHovered] = useState(false)
  const sliderRef = useRef(null)

  
  
  return (
    <div className="w-full  py-8 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Our Partners</h2>
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