import SectionBanner from "@/components/ui/SectionBanner";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <SectionBanner
        backgroundImagePath="/assets/background/blue-gradiant.png"
        className="text-white"
        title="About Tab Startup"
      />
    </div>
  );
};

export default AboutPage;
