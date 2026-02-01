import React from "react";
import CPtext from "./CPtext";
import SingleCPprofile from "./SingleCPprofile";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode,SiCodeforces } from "react-icons/si";
const CPaccount = [
  {
    logo: <SiLeetcode className="h-10 w-10 text-orange-400" />,
    platform: "LeetCode",
    badge: "Specialist",
    rating: "1600+",
    problems: "500+",
    achievements: "200+ days streak",
    maxRating: "1720",
    bestRank: "1699",
    contests: "20",
    externalUrl: "https://leetcode.com/u/soumik7063/",
  },
  {
    logo: <SiCodeforces className="h-10 w-10 text-cyan-400" />,
    platform: "Codeforces",
    badge: "pupil",
    rating: "1200+",
    problems: "350+",
    achievements: "200+ days streak",
    maxRating: "1235",
    bestRank: "",
    contests: "29",
    externalUrl: "https://codeforces.com/contests/with/soumik7063/",
  },
  {
    logo: <SiCodechef className="h-10 w-10 " />,
    platform: "Codechef",
    badge: "3 star",
    rating: "1600+",
    problems: "150+",
    achievements: "29+ contests",
    maxRating: "1631",
    bestRank: "509 (Starters 178 Division 3)",
    contests: "29",
    externalUrl: "https://www.codechef.com/users/pie_314/",
  },
];
const CPmain = () => {
  return (
    <div id="CP">
      <div>
        <div className="max-w-[1200px] px-4 mx-auto relative min-h-[300px] overflow-hidden">
          <CPtext />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px] items-center justify-items-center gap-8 mx-auto">
          
          {
            CPaccount.map((item,id)=>(
              <SingleCPprofile logo={item.logo} platform={item.platform} badge={item.badge} rating={item.rating} problems={item.problems} achievements={item.achievements} maxRating={item.maxRating} bestRank={item.bestRank} contests={item.contests} externalUrl={item.externalUrl}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default CPmain;
