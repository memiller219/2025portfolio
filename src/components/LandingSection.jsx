import React from "react";
import { ArrowDown } from "lucide-react";

const LandingSection = () => {
  return (
    <div id="home">
      <div id="hero">
        <div data-aos="fade-down" data-aos-delay="200" className="mb-50">
          <h1 className=" md:text-7xl font-bold drop-shadow-lg">
            <span className="opacity-0 animate-fade-in-delay-1">
              Not Another Developer
            </span>
          </h1>
          <p className="opacity-0 animate-fade-in-delay-3 mt-3 md:text-lg max-2-2xl mx-auto">
            <span className="opacity-0 animate-fade-in-delay-4">
              Mid-level developer, full-time bug whisperer, part-time stack
              overflow archaeologist.
            </span>
          </p>
        </div>
      </div>
      <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-delay-5 pt-10">
        <span className="text-small text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-white animate-bounce" />
      </button>
    </div>
  );
};

export default LandingSection;
