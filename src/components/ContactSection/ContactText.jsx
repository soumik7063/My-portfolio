import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const ContactText = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col w-full"
    >
      <h1 className="text-3xl text-yellow-500 mb-4">Get in Touch</h1>
      <p className="text-white">
        Fell free to reach out if you'd like to collaborate <br />
        You are just few clicks away
      </p>
      <ContactForm />
    </motion.div>
  );
};

export default ContactText;
