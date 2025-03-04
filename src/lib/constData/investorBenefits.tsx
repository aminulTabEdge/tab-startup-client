import { Briefcase, DollarSign, Globe, Users } from "lucide-react";
import { JSX } from "react";

export type Benefit = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const investorBenefits: Benefit[] = [
  {
    icon: <Briefcase />,
    title: "Curated Deal Flow",
    description:
      "Exclusive access to a pipeline of investor-ready startups vetted by industry experts.",
  },
  {
    icon: <Users />,
    title: "Early-Stage Investment Opportunities",
    description:
      "Gain early access to high-growth startups with scalable business models in emerging and global markets.",
  },
  {
    icon: <DollarSign />,
    title: "Diversified Portfolio",
    description:
      "Invest in a wide range of industries, from Fintech to Healthtech, ensuring a balanced risk-return profile.",
  },
  {
    icon: <Users />,
    title: "Mentorship and Influence",
    description:
      "Opportunity to provide advisory support to startups, enhancing your role as an active investor.",
  },
  {
    icon: <Globe />,
    title: "Transparency and Reporting",
    description:
      "Regular updates, performance metrics, and growth reports for each investment, ensuring accountability.",
  },
  {
    icon: <Globe />,
    title: "Global and Emerging Market Focus",
    description:
      "Be part of unlocking untapped potential in underrepresented regions and industries, ensuring long-term growth and impact.",
  },
];

export default investorBenefits;
