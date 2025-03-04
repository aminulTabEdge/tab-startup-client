import React from "react";
import BenefitSection from "../shared/BenifitSection";
import mentorBenefits from "@/lib/constData/mentorBenefits";
import investorBenefits from "@/lib/constData/investorBenefits";

const WhyJoinTab = () => {
  return (
    <div className="p-8">
      <BenefitSection
        title="Why Mentors Should Join TAB Startup"
        benefits={mentorBenefits}
      />
      <BenefitSection
        title="Why Investors Should Choose TAB Startup"
        benefits={investorBenefits}
      />
    </div>
  );
};

export default WhyJoinTab;
