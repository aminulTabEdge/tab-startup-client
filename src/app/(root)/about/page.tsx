import Mission from "@/components/About/Mission";
import Vision from "@/components/About/Vision";
import AcceleratorModel from "@/components/About/AcceleratorModel";
import SectionBanner from "@/components/ui/SectionBanner";
import { Metadata } from "next";
import React from "react";
import Valueproposition from "@/components/About/Valueproposition";

export const metadata: Metadata = {
  title: "About | Tab Startup ",
  description: "Generated by create next app",
};

const AboutPage = () => {
  return (
    <>
      <SectionBanner
        backgroundImagePath="/assets/background/blue-gradiant.png"
        className="text-white"
        title="About Tab Startup"
      />
      <Mission />
      <Vision />
      <AcceleratorModel />
      <Valueproposition />
    </>
  );
};

export default AboutPage;
