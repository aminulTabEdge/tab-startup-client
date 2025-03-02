import ContactUs from "@/components/ContactUs/ContactUs";
import BusinessPlan from "@/components/Home/BusinessPlan";
import ConncetUs from "@/components/Home/ConncetUs";
import FAQ from "@/components/Home/FAQ";
import HeroBanner from "@/components/Home/HeroSection/HeroBanner";
import Mission from "@/components/Home/Mission";
import Services from "@/components/Home/Services";
import Vision from "@/components/Home/Vision";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <Services />
      <Mission />
      <Vision />
      <BusinessPlan />
      <ConncetUs />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default HomePage;
