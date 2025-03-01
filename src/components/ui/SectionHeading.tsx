import React from "react";
import clsx from "clsx";

type TitleProps = {
  title: string;
  titleColor?: `text-${string}`;
  description?: string;
  className?: string;
};

const Title: React.FC<TitleProps> = ({
  title,
  titleColor,
  description,
  className,
}) => {
  return (
    <div
      className={clsx(
        "max-w-2xl mx-auto text-center pb-6 lg:pb-12 xl:pb-16",
        className
      )}
    >
      <h1
        className={clsx(
          titleColor
            ? titleColor
            : "bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent",
          "font-bold text-3xl mb-4 2xl:text-4xl"
        )}
      >
        {title}
      </h1>
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  );
};

export default Title;
