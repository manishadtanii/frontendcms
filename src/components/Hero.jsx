import React from "react";

const Hero = ({ children, clCustom="container-fluid" }) => {
  return (
    <section className={`hero bg-black text-white relative overflow-hidden`}>
      <div className={`  relative z-10 ${clCustom}`}>
        {children}
      </div>
    </section>
  );
};

export default Hero;
