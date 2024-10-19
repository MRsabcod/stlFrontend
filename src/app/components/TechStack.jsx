'use client'
import { useState, useRef } from 'react'


import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function TechStackSection() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll();

    const [hookedYPostion, setHookedYPosition] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
        setHookedYPosition(latest);
    })

    return (
        <>
            <section className="w-full  px-[40px] p-[40px] bg-[#131319] flex justify-between items-center flex-wrap overflow-hidden">
                <div className='w-1/2 h-full flex flex-col gap-[24px] justify-center'>
                    <h1 className='w-[402px] h-[124px] text-white text-[42px] font-bold leading-[3.859rem]'>We Use <span className='inline-flex flex-col items-center gap-1'>Top Notch <span className="border-b-4 w-3/4  border-b-[#7e22ce86]"></span></span> 100% Technologies</h1>
                    <p className='w-[550px] h-[116px] text-white text-[20px]  font-normal leading[1.838rem]'>We leverage cutting-edge, 100% reliable technologies to deliver robust, high-performance solutions. Our focus on innovation ensures you get the best tools and systems tailored to your needs, driving success and efficiency.</p>
                </div>
                <div className='w-1/2 h-full flex justify-center items-center'>
                    <div className='Container1'>
                        <motion.div
                            ref={ref}
                            // style={{ rotate: `${hookedYPostion * -100}deg` }}
                            className='Shell1'
                            
                            animate={{rotate:360}}
        transition={{ duration: 10, loop: Infinity, ease: "linear",repeat:Infinity }}

                        >
                            <motion.img
                                ref={ref}
                               
                                className='Icon4'
                                src={'/arrow.png'}
                                
                                alt="" />

                        </motion.div>
                        <motion.div
                                    ref={ref}
                                    // style={{ rotate: `${hookedYPostion * 45}deg `}}
                                    animate={{rotate:360}}
                                    transition={{ duration: 10, loop: Infinity, ease: "linear",repeat:Infinity }}
                                    className='Shell1'
                                >
                                    <motion.img
                                        ref={ref}
                                        style={{ rotate: `${hookedYPostion * 90}deg` }}
                                        className='Icon6' src={'/react.png'} alt="" />
                                </motion.div>
                                <motion.div
                                    ref={ref}
                                    // style={{ rotate: `${hookedYPostion * 45}deg `}}
                                    animate={{rotate:360}}
                                    transition={{ duration: 10, loop: Infinity, ease: "linear",repeat:Infinity }}
                                    className='Shell1'
                                >
                                    <motion.img
                                        ref={ref}
                                        style={{ rotate: `${hookedYPostion * 360}deg` }}
                                        className='Icon5' src={'data:image/webp;base64,UklGRioFAABXRUJQVlA4WAoAAAAQAAAAfwAAfwAAQUxQSDYDAAARX6CgbRsWF8PbjYgA+8/bv03I0fa/TSSZEzhwgEwPk2rChDaHNo+3JUyoydTR9DvYvsBi3U4WQv7/NpUR/YcgSWrEZoFaQEi2E51fYLpiZuvPg4UfBDwIRh83+zmL0Uq23hn6Ad+SwBve7NsGIczK88KPuFJC7+MmT6dWrbMI+E4JRq8Fi65MnVV1etu3aexyoLJdVW8HNpFxbfE+DmxC00wmV6suWwL3rWAk+9RaXxhSy21hifXWSVL0tIiSg48PU/q5+pzCePipn6rEORK9c7Rzax4LScrQHVHkiMhN63HL52SyOjW0OO5DRl9pQ5MJ9TS1my8EU4ogTcY1m7VZRAv+6exA5kkwMR3uoLKYc9Tiqsm8XHNyjIuGklsRPcIzJRTVtAM7qvhRismLSwrK9gQjwpQinnPOIaG6NyQsKtaMFAM7l2ccJK4t4+IbhXF6a9QNCqG89jLyqKBBNVogm0dtjcO4aEgtOHhxQ6YV4RDepeIWJFyBqjTrkDPvYY2EV2Rmc4PE6sgwu1stsKWbnWHh2mWpEjnzq6IS2/F8g4VXfIiwWJWaYIRHXQ7G2RQMfv8Tjm80fqzR+PqFxniDxgSOVfSnI/z/x+aPhw+f97/gWMP3je8/HV8zNFz8udGN0OcW/tyEn9uHF/B7A/7egr83ZWbYBtc2ewLQi7fZ3GDHMuD3ZgN8b/9Kg98N3HUYy3Qj5KrbfjdhH47nwMJVWno3zoGVDvjdyuNnG4tfPshZy6ANqyJjcgO2RZp5uFkny6OP2jO3Uf1GxluDYmJ7G+aDj4uRnT+lWNEZFCvCC8DUHRcNFRjg9Ry6IlYS/dTz5GplMaZaWdzaEI98mtoFszqPaLlg7AKzWj5p+6kYeSfVKClUsHpgSvLidg0SBxghM6alj2uyKS/mnJ6Uez5R7s6RodeFrI+uZB4XFDo+sZm+lNt+Yg29Wzmnm6r0/cRFb3lhSbTe95PavsWSSeZy4CeyjwObJZWs0GRmMALt+5F2q2QU2lkEOghGr5KRaL298CMd2xdGJFblebAM1E7gfZzkbUYnZuWyI5xga64Gy4+bfdtijFKtSkMU+IEQbyS8vKVbxgBWUDggzgEAANAPAJ0BKoAAgAA+kUigS6WkIyGilmmgsBIJaQAV47/IO2lBO8pno7rwA8qW8AeVLdV0LPnxzMR2o+GFNt81S96Z/Qn1tU1k+Jy00G9vuiIgHpOpYuRQTuJU9i0AYf+iJbsUDSgoj9HTy8qxX9+w9G5gA/uraQUf1e3k8jx80zTypgpXUowgAAD++iDVkIFDeKDKR/BZBHxxjEqYvqTVHyMOsHrVyQN/9jQg9UcfhbOf3dHWyfWirLks/Q9GwVrmczPU+MP8y5xzgxAchNEtH9E6aVu/PUNm+BMzYBqeSrQhsIEtsa+pRt1zR5e+XMZhCQhHNkkLgV2ej+1RH89rVOT2HKhfcCeqVkWBl40It4cYYxl94VG6nQ+gh0yrFC3Dh/2VBdGiacPikdWT/Jl6FCZosJEgbmyXDGr3K9lQNQuIc0Q+PWavVyIipFp/GrI2CR6hhuSLvhqoDKJvuw6DFA3JD4E136vXDFj99Q+vuQJi10wfITpZ8s7D4KHbxvaZ2THeAeVwEhN/pK+f3/58cssslMf9pnhrTRleaY6/R/YCCjxK+VmoIRIuUsw8LambjUIOH9MrRA2v7Gbxz9MGWOElXhsQwx/O/XkAAAAAAA=='} alt="" />
                                </motion.div>
{/*                           
                          <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                          <motion.div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          borderBottom: '2px solid blue',
          position: 'absolute',
          top: '50%',
          left: '50%',
          translate: '-50% -50%',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, loop: Infinity, ease: "linear",repeat:Infinity }}
      />
      <motion.img
                                ref={ref}
                                
                                className='Icon4'
                                src={'/react.png'}
                                animate={{rotate:200}}
        transition={{ duration: 2, loop: Infinity, ease: "linear",repeat:Infinity }}

                                alt="" />
    </div> */}

                        <div className='Container2'>
                            <motion.div
                                ref={ref}
                                // style={{ rotate: `${hookedYPostion * 75}deg` }}
                                className='Shell2'
                                animate={{rotate:360}}
                                transition={{ duration: 10, loop: Infinity, ease: "linear",repeat:Infinity }}
                            >
                                <motion.img
                                    ref={ref}
                                    // style={{ rotate: `${hookedYPostion * -75}deg` }}
                                    className='Icon2' src={'/c+.png'} alt="" />

                            </motion.div>
                            <motion.div
                                ref={ref}
                                // style={{ rotate: `${hookedYPostion * 15}deg `}}
                                animate={{rotate:360}}
                                transition={{ duration: 10, loop: Infinity, ease: "linear",repeat:Infinity }}
                                className='Shell2'
                            >
                                <motion.img
                                    ref={ref}
                                    // style={{ rotate: `${hookedYPostion * -15}deg` }}
                                    className='Icon3' src={'/angular.png'} alt="" />
                            </motion.div>
                            

                            <div className='Container3'>
                                <motion.div
                                    ref={ref}
                                    // style={{ rotate: `${hookedYPostion * 45}deg `}}
                                    animate={{rotate:360}}
                                    transition={{ duration: 10, loop: Infinity, ease: "linear",repeat:Infinity }}
                                    className='Shell3'
                                >
                                    <motion.img
                                        ref={ref}
                                        style={{ rotate: `${hookedYPostion * 360}deg` }}
                                        className='Icon1' src={'/w.png'} alt="" />
                                </motion.div>
                            
                                <h2 className="SaylaniText">
                                    Saylani Tech limited
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TechStackSection;