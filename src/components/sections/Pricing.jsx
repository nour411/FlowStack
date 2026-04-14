import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../../constants/data";

const Pricing = () => {
  return (
    <section id="pricing" className="mt-40 ">
      {/* Title */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>

      {/* Grid Layout  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="p-10 border border-neutral-700 rounded-xl hover:border-emerald-500 transition duration-300"
          >
            {/* title */}
            <p className="text-4xl mb-8">
              {option.title}
              {option.title === "Pro" && (
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                  (Most Popular)
                </span>
              )}
            </p>

            {/* Price */}
            <p className="mb-8">
              <span className="text-5xl mt-6 mr-2">{option.price}</span>
              <span className="text-neutral-400 tracking-tight">/Month</span>
            </p>

            {/* Features */}
            <ul>
              {option.features.map((feature, index) => (
                <li key={index} className="mt-8 flex items-center">
                  <CheckCircle2 className="text-green-400 w-5 h-5 shrink-0" />
                  <span className="ml-2 text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-emerald-900 border border-emerald-900 rounded-lg transition duration-200"
            >
              Subscribe
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
