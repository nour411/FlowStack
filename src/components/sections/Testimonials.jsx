import React from "react";
import { testimonials } from "../../constants/data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What people are saying
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <artical
            key={index}
            className="bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-neutral-600 transition duration-300"
          >
            <p className="text-neutral-300 leading-relaxed">
              {testimonial.text}
            </p>
            <div className="flex mt-8 items-start">
              <img
                className="w-12 h-12 mr-4 rounded-full border border-neutral-500 object-cover"
                src={testimonial.image}
                alt={testimonial.user}
              />
              <div>
                <h6>{testimonial.user}</h6>
                <span className="text-sm font-normal italic text-neutral-600">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </artical>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
