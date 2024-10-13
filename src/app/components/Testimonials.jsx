import React from 'react';

const Testimonial = () => {
  return (
    <div className=''>

    <div className="bg-[#42424b61] gap-2 text-white p-0 md:p-8 m-auto  md:w-[1320px] md:h-[502.5px] shadow-lg rounded-[22px] flex flex-col md:flex-row items-center">
      {/* Left Section: Testimonial Text */}
      <div className=" w-full p-6 h-full">
        <div className='flex flex-col justify-between h-full'>
        <img
          src="/logo.png"
          alt="Company Logo"
          className="mb-6 w-32" // Adjust width as needed
        />
        <div>
         <p className="font-light text-3xl mb-4">
        "From the initial concept discussions to the final product, their team was attentive,
          innovative, and professional throughout the entire process."
        </p>
        <div>
        <p className="font-bold text-xl">Romail Ahmed</p>
        <p className="text-gray-400">CEO of Shadowbey</p>
        </div>
        </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="md:w-[60%] h-full w-full">
        <img
          src="/romail.png" // Replace with your image URL
          alt="Presentation"
          className="rounded-lg object-cover object-center w-full h-full" // Fixed height for better alignment
        />
      </div>
    </div>
    </div>

  );
};

export default Testimonial;