import { Briefcase, Users, DollarSign } from "lucide-react";
const valuePropositionData = [
  {
    title: "For Startups",
    icon: <Briefcase className="w-6 h-6 text-blue-500" />,
    description:
      "At TAB Startup, we empower early-stage startups to unlock their full potential through tailored mentorship, strategic funding, and a vibrant entrepreneurial community.",
    points: [
      "Personalized Mentorship: Access to seasoned industry experts providing tailored guidance.",
      "Global Investor Network: Connect with local and international investors.",
      "Funding Opportunities: Pre-seed, seed, and Series A funding access.",
      "Structured Accelerator Programs: Industry-specific programs for growth.",
      "Market-Ready Focus: Helping startups achieve product-market fit.",
      "Support for Emerging Markets: Resources for startups in underrepresented regions.",
      "Post-Program Alumni Support: Continued access to community and follow-on funding.",
    ],
  },
  {
    title: "For Mentors",
    icon: <Users className="w-6 h-6 text-green-500" />,
    description:
      "Join an impactful ecosystem by mentoring startups while expanding your professional influence.",
    points: [
      "Meaningful Impact: Guide startups solving real-world problems.",
      "Expand Professional Influence: Gain recognition and valuable connections.",
      "Equity or Financial Incentives: Potential for equity participation or stipends.",
      "Join a Global Network: Connect with a diverse community of innovators.",
    ],
  },
  {
    title: "For Investors",
    icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
    description:
      "Discover and fund high-potential startups with strong growth trajectories.",
    points: [
      "Curated Deal Flow: Exclusive access to vetted startups.",
      "Early-Stage Investment Opportunities: Gain early access to high-growth startups.",
      "Diversified Portfolio: Invest across multiple industries.",
      "Mentorship and Influence: Opportunity to advise startups.",
      "Transparency and Reporting: Regular updates and performance metrics.",
      "Global and Emerging Market Focus: Support startups in underrepresented regions.",
    ],
  },
];

export default valuePropositionData;
