import React from "react";
import { FaRocket } from "react-icons/fa";
import Title from "../ui/SectionHeading";
import Container from "../ui/Container";

const Mission = () => {
  return (
    <Container className="max-w-3xl text-center">
      <Title title="Our Mission" />
      <FaRocket className=" mx-auto mb-4 text-6xl text-red-500" />
      <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
        Our mission is to create a robust support system for startups, equipping
        them with the essential knowledge, cutting-edge technology, and
        financial resources needed to thrive in a competitive market. We empower
        innovators to turn ideas into successful ventures through strategic
        guidance, funding opportunities, and state-of-the-art technology.
      </p>
    </Container>
  );
};

export default Mission;
