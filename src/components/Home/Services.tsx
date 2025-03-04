import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import services from "@/lib/constData/services";
import Container from "../ui/Container";
import Title from "../ui/SectionHeading";

const Services = () => {
  return (
    <Container>
      <Title
        title="Offered Services"
        description="We’re committed to empowering entrepreneurs and startups by providing the support they need to thrive. Our platform offers mentorship, funding opportunities, essential tools, and educational resources to help businesses grow and scale effectively."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Card
            key={index}
            className="shadow-lg p-6 flex flex-col items-center text-center bg-white border border-gray-200 hover:cursor-pointer"
          >
            {React.createElement(service.icon, {
              className: "h-12 w-12 text-blue-500 mb-4",
            })}
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Services;
