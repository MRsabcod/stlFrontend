"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AtomIcon, CodeIcon, DatabaseIcon, GlobeIcon, ServerIcon } from 'lucide-react'

const ReactLogo = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
)

export default function TechStackAnimation() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const logos = [
    { Icon: AtomIcon, color: '#61DAFB', orbit: 3 },
    { Icon: CodeIcon, color: '#DD0031', orbit: 2 },
    { Icon: DatabaseIcon, color: '#02569B', orbit: 1 },
    { Icon: GlobeIcon, color: '#A8B9CC', orbit: 2 },
    { Icon: ReactLogo, color: '#61DAFB', orbit: 3 },
  ]

  return (
    <div ref={containerRef} className="  flex justify-center">
      <div className=" top-1/2 -translate-y-1/2 w-[300px] h-[300px] relative">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {[3, 2, 1].map((radius, index) => (
            <circle
              key={index}
              cx="50"
              cy="50"
              r={radius * 15}
              fill="none"
              stroke="#FFFFFF2E"
              strokeWidth="0.5"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-pink-500">
          <p className="text-sm font-medium">Saylani Tech limited</p>
        </div>
        {logos.map((Logo, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5"
            style={{
              rotate,
              x: useTransform(rotate, (r) => 
                Math.cos((r + index * (360 / logos.length)) * Math.PI / 180) * Logo.orbit * 45
              ),
              y: useTransform(rotate, (r) => 
                Math.sin((r + index * (360 / logos.length)) * Math.PI / 180) * Logo.orbit * 45
              ),
            }}
          >
            <Logo.Icon className="w-full h-full" color={Logo.color} />
          </motion.div>
        ))}
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-red-500 rounded-full"
            style={{
              rotate,
              x: useTransform(rotate, (r) => 
                Math.cos((r + index * 72) * Math.PI / 180) * (40 + (index % 2) * 40)
              ),
              y: useTransform(rotate, (r) => 
                Math.sin((r + index * 72) * Math.PI / 180) * (40 + (index % 2) * 40)
              ),
            }}
          />
        ))}
      </div>
    </div>
  )
}