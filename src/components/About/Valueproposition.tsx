import React from "react";
import Container from "../ui/Container";
import Title from "../ui/SectionHeading";
import valuePropositionData from "@/lib/constData/valuePropositionData";

const ValueProposition = () => {
  return (
    <Container className="max-w-4xl" backgroundColor="bg-white">
      <Title title="TAB Startup Value Proposition" />
      {valuePropositionData.map((section, index) => (
        <section key={index} className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            {section.icon}
            <h2 className="text-2xl font-semibold">{section.title}</h2>
          </div>
          <p className="mt-2">{section.description}</p>
          <ul className="list-disc ml-5 mt-4">
            {section.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>
      ))}
    </Container>
  );
};

export default ValueProposition;
