"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const showcaseItems = [
  {
    title: "BESPOKE",
    subtitle: "Shadowbey",
    description: "App Development",
    image: "/portfolio.png?height=400&width=600",
  },
  {
    title: "CUSTOM",
    subtitle: "Pixelcraft",
    description: "Web Design",
    image: "/portfolio.png?height=400&width=600",
  },
  {
    title: "INNOVATIVE",
    subtitle: "TechNova",
    description: "Software Solutions",
    image: "/Ghous.webp?height=400&width=600",
  },
]

export default function ShowcaseSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + showcaseItems.length) % showcaseItems.length)
  }

  const nextIndex = (currentIndex + 1) % showcaseItems.length

  return (
    <div className="min-h-screen  text-white p-8 pr-0">
      <div className="max-w-6xl mr-0 mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Our Showcase</h1>
        <p className="text-center mb-8 text-gray-400">
          Explore our showcase of cutting-edge projects, highlighting the
          innovative solutions we've crafted for our clients.
        </p>

        <div className="flex space-x-4 ">
          <div className="relative overflow-hidden rounded-lg bg-gray-800 shadow-xl  w-3/4
          " >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="aspect-video"
              >
                <Image
                  src={showcaseItems[currentIndex].image}
                  alt={showcaseItems[currentIndex].title}
                  className="w-full h-full object-cover"
                  
              fill
                />
                <div className="absolute inset-0 bg-none bg-opacity-40 p-8 flex flex-col justify-between">
                  {/* <div>
                    <h2 className="text-5xl font-bold mb-4">{showcaseItems[currentIndex].title}</h2>
                    <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                      View Project
                    </button>
                  </div>
                  <div className="text-sm">
                    <p>Website / Ecommerce / Mobile / UI</p>
                  </div> */}
                </div> 
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-1/4 overflow-hidden flex flex-col justify-center">
          <div className="h-[70%] w-[150%] relative overflow-hidden rounded-lg  ">
            <Image
              src={showcaseItems[nextIndex].image}
              alt={`Preview of ${showcaseItems[nextIndex].title}`}
              className="max-w-none object-cover "
         
              fill
            />
           
          </div>
          </div>
        </div>

        <div className="mt-4 flex w-3/4 justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">{showcaseItems[currentIndex].subtitle}</h3>
            <p className="text-gray-400">{showcaseItems[currentIndex].description}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
            //   className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeftCircle className={`w-[45px]  h-[45px] ${currentIndex>0?'text-white':'text-[#FFFFFF1F]'}`} strokeWidth={1} />
            </button>
            <button
              onClick={nextSlide}
            //   className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
              aria-label="Next slide"
            >
              <ArrowRightCircle className={`w-[45px]  h-[45px] ${currentIndex===showcaseItems.length-1?'text-[#FFFFFF1F]':'text-white'}`} strokeWidth={1}   />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}