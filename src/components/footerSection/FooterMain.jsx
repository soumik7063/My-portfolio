import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const FooterMain = () => {
  return (
    <div className="mt-[100px] py-10">
        <div className="h-[1px] bg-gray-800 w-full"></div>
        <div className="max-w-[1200px] flex flex-col lg:flex-row justify-between items-center mx-auto">
            <FooterLeft/>
            <FooterRight/>
        </div>
    </div>
  );
};

export default FooterMain;
