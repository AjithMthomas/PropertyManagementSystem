import React from 'react';
import bannerImg from '../../images/banner.jpg';

function Banner() {
  return (
    <div className=" w-full h-[90vh] bg-black bg-blend-overlay">
      <img src={bannerImg} alt="" className="w-full h-full object-cover brightness-90" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[600px] flex flex-col items-center text-white p-4">
        <h1 className="font-extrabold text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight text-center">
          Find Your Special Properties
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-center">
          Effortless property management made easy. Streamline tasks, manage properties, tenants, and maintenance hassle-free. Experience it today.
        </p>
      </div>
    </div>
  );
}

export default Banner;
