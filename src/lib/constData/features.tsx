import {
  Handshake,
  Users,
  Rocket,
  CreditCard,
  File,
  Cloud,
} from "lucide-react"; // Added Cloud icon

const features = [
  {
    id: 1,
    icon: <Handshake className="text-5xl text-yellow-400" />,
    title: "Comprehensive Support",
    description:
      "From co-founder matching to fundraising and technology support, we provide end-to-end services to help your startup succeed.",
  },
  {
    id: 2,
    icon: <Users className="text-5xl text-green-400" />,
    title: "Personalized Approach",
    description:
      "We take the time to understand your unique needs and provide tailored resources and connections for your success.",
  },
  {
    id: 3,
    icon: <Rocket className="text-5xl text-blue-400" />,
    title: "Vibrant Community",
    description:
      "Join a network of passionate entrepreneurs, experienced mentors, and investors who are committed to helping you thrive.",
  },
  {
    id: 4,
    icon: <CreditCard className="text-5xl text-red-400" />,
    title: "Access to Funding",
    description:
      "TabStartup opens doors to investors actively seeking the next big idea, providing a clear path to funding and growth.",
  },
  {
    id: 5,
    icon: <File className="text-5xl text-purple-400" />,
    title: "Technology-Driven",
    description:
      "Leverage the latest tools, software, and infrastructure to accelerate product development and scale quickly.",
  },
  {
    id: 6,
    icon: <Cloud className="text-5xl text-teal-400" />, // New Scalable Solutions icon
    title: "Scalable Solutions",
    description:
      "Build products that grow with your business, supported by scalable infrastructure and operational strategies.",
  },
];

export default features;
