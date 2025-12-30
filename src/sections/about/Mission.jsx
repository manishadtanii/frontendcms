import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaSmile, FaClock } from "react-icons/fa";

const Mission = ({ data }) => {
  if (!data) return null;
  const { statement } = data;
  return (
    <section className="">
      <div className="container-fluid ">
        <motion.p
          className="text-center max-w-[1360px] mx-auto leading-[1.5] text-h3 font-parkinsans"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {statement ? statement : " Our goal is to serve as a trusted partner, delivering expert services as an extension of your team. We make your operations simpler, your results stronger, and give you more time to focus on what truly matters to you."}
        
        {/*  Our mission is to deliver expert court reporting,
         <img src="m-1.png" alt="" className="mx-2 inline w-6 md:w-4 lg:w-10" />
         
         legal video, association and administrative services as a true extension of your team. We simplify operations, 
         <img src="m-2.png" alt="" className="mx-2 inline w-6 md:w-14 lg:w-10" />
          
         strengthen results and free you to focus on what matters most. More than support, we partner closely with you to anticipate client needs and elevate your success.
         <img src="m-3.png" alt="" className="mx-2 inline w-6 md:w-14 lg:w-10" />. */}
        </motion.p>
      </div>
    </section>
  );
};

export default Mission;
