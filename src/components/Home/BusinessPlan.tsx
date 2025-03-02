import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Container from "../ui/Container";
import Title from "../ui/SectionHeading";
import problems from "@/lib/constData/problems";

const BusinessPlan = () => {
  return (
    <Container>
      <Title
        title="Business Plan"
        description="Our business plan addresses the key challenges faced by entrepreneurs and provides targeted solutions to help them overcome obstacles and thrive."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {problems.map((problem, index) => (
          <Card
            key={index}
            className="shadow-lg p-6 flex flex-col items-center text-center bg-white border border-gray-200 hover:cursor-pointer"
          >
            <CardHeader className="text-6xl mb-4">
              {React.createElement(problem.icon, {
                className: "text-blue-500",
                size: 45,
              })}
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-semibold text-gray-800">
                {problem.title}
              </CardTitle>
              <p className="mt-2 text-gray-600">{problem.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default BusinessPlan;
