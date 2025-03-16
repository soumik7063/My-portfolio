import React from "react";

const AboutmePic = () => {
  return (
    <div className="md:h-[500px] h-[350px] w-[300px] relative">
      <div className="md:h-[500px] h-[350px] w-[300px] rounded-2xl absolute overflow-hidden">
        <img className="h-full w-auto object-cover " src="./images/about-me.jpg" alt="about me" />
      </div>
      <div className="md:h-[500px] h-[350px] w-[250px] md:w-[250px] absolute -z-10  bg-orange-600 -left-[30px] -bottom-[40px] rounded-tl-2xl rounded-b-4xl"></div>
    </div>
  );
};

export default AboutmePic;
