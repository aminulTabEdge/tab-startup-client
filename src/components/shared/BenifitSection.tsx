import { Benefit } from "@/lib/constData/investorBenefits";
import Container from "../ui/Container";
import Title from "../ui/SectionHeading";

type BenefitSectionProps = {
  title: string;
  benefits: Benefit[];
};
const BenefitSection = ({ title, benefits }: BenefitSectionProps) => {
  return (
    <Container className="max-w-7xl">
      <Title title={title} />
      <div className="grid gap-4 lg:grid-cols-2 ">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 bg-white rounded-lg p-6"
          >
            <div className="text-blue-500">{benefit.icon}</div>
            <div className="text-center">
              <h3 className="text-lg lg:text-xl font-medium">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BenefitSection;
