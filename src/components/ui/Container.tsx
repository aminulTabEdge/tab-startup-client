import { ChildrenType } from "@/app/layout";
import React from "react";

type TailwindClassProps = ChildrenType & {
  className?: string;
  backgroundColor?: string;
};

const Container = ({
  children,
  className,
  backgroundColor,
}: TailwindClassProps) => {
  return (
    <section className={backgroundColor}>
      <div
        className={`py-8 lg:py-14 xl:py-16 2xl:py-24 px-2 mx-auto ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
