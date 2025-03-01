import { ChildrenType } from "@/app/layout";
import React from "react";

type TailwindClassProps = ChildrenType & {
  tailwindClass?: string;
  backgroundColor?: string;
};

const SectionContainer = ({
  children,
  tailwindClass,
  backgroundColor,
}: TailwindClassProps) => {
  return (
    <section className={backgroundColor}>
      <div
        className={`py-8 lg:py-14 xl:py-16 2xl:py-24 px-2  ${tailwindClass}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
