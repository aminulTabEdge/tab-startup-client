import React from "react";
import Container from "../ui/Container";
import Title from "../ui/SectionHeading";
import programDetails from "@/lib/constData/programDetails";

const AcceleratorModel = () => {
  return (
    <Container className="max-w-4xl">
      <Title title=" The Accelerator Model" />
      <div className="space-y-6">
        {programDetails.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <section.icon /> {section.title}
            </h3>
            <ul className="list-disc pl-6">
              {section.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AcceleratorModel;
