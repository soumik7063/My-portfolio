import React from "react";
import CPtext from "./CPtext";
import SingleCPprofile from "./SingleCPprofile";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
const CPmain = () => {
  return (
    <div id="CP">
      <div>
        <div className="max-w-[1200px] px-4 mx-auto relative min-h-[400px] overflow-hidden">
          <CPtext />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] items-center justify-items-center gap-8 mx-auto">
          <SingleCPprofile
            logo={<SiLeetcode className="h-10 w-10 text-yellow-400"/>}
            platform="LeetCode"
            badge="Specialist"
            rating="1600+"
            problems="500+"
            achievements= "100+ days streak"
            maxRating="1720"
            bestRank=""
            contests="20"
            externalUrl="https://leetcode.com/u/soumik7063/"
          />
          <SingleCPprofile
            logo={<SiCodechef className="h-10 w-10 text-white"/>}
            platform="Codechef"
            badge="3 star"
            rating="1600+"
            problems="150+"
            achievements= ""
            maxRating="1631"
            bestRank="509 (Starters 178 Division 3)"
            contests="29"
            externalUrl="https://www.codechef.com/users/pie_314"
          />
        </div>
      </div>
    </div>
  );
};

export default CPmain;
