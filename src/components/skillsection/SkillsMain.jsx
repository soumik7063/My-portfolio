import React from "react";
import Skilltext from "./Skilltext";
import Skillall from "./Skillall";
import Allskillsm from "./AllSkillsm"
const SkillsMain = () => {
  return (
    <div id="skills">
      <div>
        <div className="max-w-[1200px] px-4 mx-auto relative min-h-[400px] overflow-hidden">
          <Skilltext />
        </div>
        <div className="hidden lg:block">
          <Skillall />
        </div>
        <div className="block lg:hidden">
            <Allskillsm/>
        </div>
      </div>
    </div>
  );
};

export default SkillsMain;
