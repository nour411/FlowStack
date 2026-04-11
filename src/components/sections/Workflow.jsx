import { CheckCircle2 } from "lucide-react";
import codeImg from "../../assets/code.jpg";
import { checklistItems } from "../../constants/data";

const Workflow = () => {
  return (
    <section id="workflow" className="mt-20">
      {/* Title */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-emerald-700 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      {/* Content */}
      <div className="flex flex-wrap justify-center items-center mt-10 max-w-7xl mx-auto">
        {/* Image */}
        <div className="w-full lg:w-1/2 p-4">
          <img
            src={codeImg}
            alt="Code workflow"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Checklist */}
        <div className="w-full lg:w-1/2 p-4">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-10 items-start">
              {/* Icon */}
              <div className="flex shrink-0 h-10 w-10 bg-neutral-900 text-green-400 items-center justify-center rounded-full">
                <CheckCircle2 size={20} />
              </div>

              {/* Text */}
              <div className="ml-4">
                <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
