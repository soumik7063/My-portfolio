import React from "react";
import ContactInfo from "./ContactInfo";
import SocialContact from "./SocialContact";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const Contactpic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col items-center justify-center gap-3"
    >
      <img
        className="max-h-[300px]"
        src="./images/email-image.png"
        alt="contact us"
      />
      <div>
        <ContactInfo />
        <SocialContact />
      </div>
    </motion.div>
  );
};

export default Contactpic;
