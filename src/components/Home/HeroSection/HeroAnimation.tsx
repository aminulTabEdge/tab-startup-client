"use client";
import { TypeAnimation } from "react-type-animation";

const HeroAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Start Business",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Boost Business",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="text-3xl lg:text-5xl font-bold"
      repeat={Infinity}
    />
  );
};

export default HeroAnimation;
