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
            <section className="w-full h-[1024px] px-[30px] bg-[#131319] flex justify-between items-center flex-wrap overflow-hidden">
                <div className='w-1/2 h-full flex flex-col gap-[24px] justify-center'>
                    <h1 className='w-[402px] h-[124px] text-white text-[42px] font-bold leading-[3.859rem]'>We Use Top Notch 100% Technologies</h1>
                    <p className='w-[617px] h-[116px] text-white text-[20px] font-normal leading[1.838rem]'>We leverage cutting-edge, 100% reliable technologies to deliver robust, high-performance solutions. Our focus on innovation ensures you get the best tools and systems tailored to your needs, driving success and efficiency.</p>
                </div>
                <div className='w-1/2 h-full flex justify-center items-center'>
                    <div className='Container1'>
                        <motion.div
                            ref={ref}
                            style={{ rotate: `${hookedYPostion * -40}deg` }}
                            className='Shell1'
                        >
                            <motion.img
                                ref={ref}
                                style={{ rotate: `${hookedYPostion * 40}deg` }}
                                className='Icon4'
                                src={'/arrow.png'}
                                alt="" />

                        </motion.div>
                        <motion.div
                            ref={ref}
                            style={{ rotate: `${hookedYPostion * -60}deg` }}
                            className='Shell1'
                        >
                            <motion.img
                                ref={ref}
                                style={{ rotate: `${hookedYPostion * -60}deg` }}
                                className='Icon5' src={'/react.png'} alt="" />
                        </motion.div>

                        <div className='Container2'>
                            <motion.div
                                ref={ref}
                                style={{ rotate: `${hookedYPostion * 75}deg` }}
                                className='Shell2'
                            >
                                <motion.img
                                    ref={ref}
                                    style={{ rotate: `${hookedYPostion * -75}deg` }}
                                    className='Icon2' src={'/c+.png'} alt="" />

                            </motion.div>
                            <motion.div
                                ref={ref}
                                style={{ rotate: `${hookedYPostion * 15}deg `}}
                                className='Shell2'
                            >
                                <motion.img
                                    ref={ref}
                                    style={{ rotate: `${hookedYPostion * -15}deg` }}
                                    className='Icon3' src={'/angular.png'} alt="" />
                            </motion.div>

                            <div className='Container3'>
                                <motion.div
                                    ref={ref}
                                    style={{ rotate: `${hookedYPostion * 45}deg `}}
                                    className='Shell3'
                                >
                                    <motion.img
                                        ref={ref}
                                        style={{ rotate: `${hookedYPostion * -45}deg` }}
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