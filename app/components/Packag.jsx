import React from "react";
import { ourPackages } from "../../Data/Data";
import PackageCard from "./PackageCard";

const Services = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-40" id="Packages">
        <h1 className="text-zinc-800 text-4xl font-bold border-b-[4px] border-orange-500 pb-2">
          Our Packages
        </h1>
        <p className="text-zinc-700 mt-4 sm:block hidden">
          experiences tailored to your desires. From serene getaways
        </p>
        <p className="text-zinc-700 sm:mt-0 mt-3">and cultural adventures to thrilling the-clock</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-16 mt-20  mx-auto">
        {ourPackages.map((services, index) => (
          <PackageCard
            key={index}
            img={services.img}
            price={services.price}
            title={services.title}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
