import ContactUs from "@/components/ContactUs/ContactUs";
import FAQ from "@/components/Home/FAQ";
import HeroBanner from "@/components/Home/HeroBanner";
import Services from "@/components/Home/Services";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <Services />
      <FAQ />
      <ContactUs />
    </>
  );
};

export default HomePage;
