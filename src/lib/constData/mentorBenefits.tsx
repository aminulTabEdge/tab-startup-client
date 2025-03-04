import { Briefcase, DollarSign, Globe, Users } from "lucide-react";
import { Benefit } from "./investorBenefits";

const mentorBenefits: Benefit[] = [
  {
    icon: <Briefcase />,
    title: "Meaningful Impact",
    description:
      "Help guide and shape the journeys of startups solving real-world problems and creating lasting change.",
  },
  {
    icon: <Users />,
    title: "Expand Professional Influence",
    description:
      "Gain recognition as a thought leader and make valuable connections with startups, investors, and other mentors.",
  },
  {
    icon: <DollarSign />,
    title: "Equity or Financial Incentives",
    description:
      "Opportunities for equity participation, stipends, or honorariums as a token of appreciation for your time and expertise.",
  },
  {
    icon: <Globe />,
    title: "Join a Global Network",
    description:
      "Be part of a diverse community of innovators, entrepreneurs, and industry leaders.",
  },
];
export default mentorBenefits;
