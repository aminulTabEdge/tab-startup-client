import React from "react";

type SectionHeadingType = {
  title: string;
  description?: string;
  tailwindClass?: string;
};

const SectionHeading = ({
  title,
  description,
  tailwindClass,
}: SectionHeadingType) => {
  return (
    <div
      className={`max-w-xl mx-auto text-center pb-6 lg:pb-12 xl:pb-16 ${
        tailwindClass || ""
      }`}
    >
      <h1 className="font-bold text-3xl mb-4  2xl:text-4xl ">{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeading;
