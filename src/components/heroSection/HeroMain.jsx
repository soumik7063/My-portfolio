import React from "react";
import HeroText from "./HeroText";
import Heropic from "./Heropic";
const HeroMain = () => {
  return (
    <div className="pt-40 pb-16">
      <div className="flex md:flex-row flex-col max-w-[1200px] mx-auto justify-between">
        <HeroText />
        <Heropic />
      </div>
    </div>
  );
};

export default HeroMain;
