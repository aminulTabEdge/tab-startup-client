import React from "react";
import Title from "../ui/SectionHeading";
import Container from "../ui/Container";
import { FaLightbulb } from "react-icons/fa";

const Vision = () => {
  return (
    <Container className="text-center max-w-3xl">
      <Title title="Our Vision" />
      <FaLightbulb className=" mx-auto mb-4 text-6xl text-yellow-500" />
      <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
        Our vision is to establish ourselves as a trusted platform within the
        startup ecosystem, both locally in Bangladesh and internationally, by
        providing valuable tools, insights, and support to entrepreneurs and
        innovators.
      </p>
    </Container>
  );
};

export default Vision;
