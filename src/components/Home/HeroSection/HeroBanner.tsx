import Image from "next/image";
import React from "react";
import HeroAnimation from "./HeroAnimation";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/assets/home/hero-banner.svg"
        alt="Tabedge Hero banner"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay & Text */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center p-6 md:p-12 text-white">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <HeroAnimation />
          <p className="mt-2 md:mt-4 text-base md:text-lg max-w-2xl">
            We are building a digital platform to empower startups with
            mentorship, funding opportunities, essential tools, and educational
            resources—helping entrepreneurs grow and scale faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
