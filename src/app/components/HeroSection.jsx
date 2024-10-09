'use client';
import { Button } from "@/app/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0"
      >
        <source src="/building.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-4xl bg-clip-text text-transparent md:text-[80px] md:leading-[117.6px] font-bold bg-gradient-to-r  from-[#9B9B9B] tracking-[-2px]  to-[#FFFFFF] mb-4">
         Saylani Tech Limited
        </h1>
        <p className="text-xl font-normal  md:text-2xl  text-white mb-8 max-w-2xl">
        Transforming businesses with custom software solutions and innovation technology expertise. 
        </p>
        <div className="space-x-4">
          <Button size="lg" className="bg-primary text-primary-foreground text-white hover:bg-primary/90">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className=" border-white hover:bg-white hover:text-black">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}