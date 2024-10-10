'use client'
import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
// // import Aliyan from "../../assets/Aliyan.webp";
// // import Wajid from "../../assets/Wajid.webp";
// // import Ghous from "../../assets/Ghous.webp";
// // import zeeshan from "../../assets/zeeshan-ajjaz.webp";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Link from "next/link";
// import { Link } from "react-router-dom";

// Team members array
const teamMembers = [
    {
      id: 1,
      name: "Aliyan Sheikh",
      position: "Project Manager",
      description: "Expert in full-stack development",
      image: '/Ghous.webp',
    },
    {
      id: 2,
      name: "Zeshan Ajjaz",
      position: "lead manager",
      description: "Specialized in Node.js and databases",
      image: '/Aliyan.webp',
    },
    {
      id: 3,
      name: "Wajid Ahmed",
      position: "UI/UX Designer",
      description: "Creating user-friendly designs",
      image: '/Aliyan.webp',
    },
    {
      id: 4,
      name: "Ghous Ahmed",
      position: "Devolopers Head",
      description: "Overseeing project execution ",
      image: '/Aliyan.webp',
    },
  ];
const TeamSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  // Slider settings
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 2000,
    centerPadding: "60px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#131319] py-14">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10"
          data-aos="fade-up"
        >
          Meet Our Experts
        </h2>
        <p className="text-sm md:text-lg text-white dark:text-neutral-400 text-center px-20"
          data-aos="fade-up">While vulnerability can help build trust, it s not the only way. Trust also grows through reliability, clear communication,
          and consistent actions, allowing team members to feel secure without needing to expose personal vulnerabilities.</p>

      </div>
      <div className="h-16 bg-[#131319] rounded-t rounded-[600px/40px] relative z-10">
      </div>
      <Slider {...settings} className="-mt-12 relative z-0">
        {teamMembers.map((member,i) => (
          <div
            className="lg:w-1/3 sm:w-1/2 w-full cursor-pointer"
            key={member.id}
            data-aos="zoom-in"
          >
          
              <img
                alt="gallery"
                className={`w-full   h-full object-cover object-center `}
                src={member.image}
              />
              {/* <div className="absolute inset-0 bg-white bg-opacity-0 flex flex-col justify-center items-center transition-opacity duration-300 opacity-0 hover:bg-opacity-90 hover:opacity-100 p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                  {member.position}
                </h2>
                <h1 className="title-font text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h1>
                <p className="leading-relaxed mb-2 text-center text-sm">
                  {member.description}
                </p>
                <Link
                  to="/services"
                  className="text-indigo-500 inline-flex items-center hover:text-indigo-700 transition duration-300 ease-in-out"
                >
                  Learn More
                </Link>
              </div> */}

          </div>
        ))}
      </Slider>
      <div className="h-16 bg-[#131319] rounded-b rounded-[600px/40px] relative z-10 -mt-12">

      </div>
    </section>
  );
};

export default TeamSection;