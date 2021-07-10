import React from "react";
import { Link } from "react-router-dom";
import { OnboardingSlider } from "../../components/OnboardingSlider";

const Landing = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="card-body z-10">
        <div className="bg-white shadow-none lg:shadow-lg">
          <div className="hidden lg:block bg-primary w-full p-8 text-center">
            <h3 className="text-white text-2xl al">How to get started</h3>
          </div>
          <div className="relative  p-4 lg:pß-28">
            <div className="swiper-wrapper p-0 lg:p-16 ">
              <OnboardingSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
