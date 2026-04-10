import React from "react";
import { features } from "../../constants/data";

const Features = () => {
  return (
    <section
      id="features"
      className="relative mt-20 border-b border-neutral-800 min-h-200"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build
          <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 lg:mt-20 max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <article
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-900/50 transition"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-orange-700">
              {feature.icon}
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-2">{feature.text}</h5>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
