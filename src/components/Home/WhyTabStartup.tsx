import features from "@/lib/constData/features";
import React from "react";

const WhyTabStartup = () => {
  return (
    <div className="relative bg-[url('/assets/background/business.jpg')] bg-local md:bg-fixed bg-center bg-cover h-auto min-h-[550px] flex items-center justify-center py-16 px-4">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative w-full max-w-7xl mx-auto text-white text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Why TabStartup?
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Empowering entrepreneurs with the tools, connections, and support to
          succeed.
        </p>

        {/* Cards Container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 md:mt-16 w-full ">
          {features.map(({ id, icon, title, description }) => (
            <div key={id} className="flex flex-col items-center">
              {icon}
              <h2 className="text-xl sm:text-2xl md:text-2xl mt-2 font-semibold">
                {title}
              </h2>
              <p className="mt-3 text-gray-200 text-sm sm:text-base">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyTabStartup;
