import React from 'react'

import { motion } from "framer-motion";

function EventBanner() {
  return (
    <motion.div
      className="relative bg-cover bg-center rounded-3xl overflow-hidden shadow-xl mb-16"
      style={{ backgroundImage: "url('/techeden.jpg')" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }} 
      transition={{ duration: 1 }}
    >
      <div className="bg-black/60 backdrop-blur-sm w-full h-full flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 gap-6">
        
        <motion.img
          src="/techeden.jpg"
          alt="TechEden"
          className="w-full max-w-xs rounded-xl shadow-md"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        <div className="text-purple-100">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            TechEden: A Premier Tech Symposium
          </motion.h2>
          
          <motion.p
            className="text-sm text-purple-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            April 4, 2025
          </motion.p>
          
          <motion.p
            className="text-base text-purple-200 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            A dynamic gathering of industry leaders and tech enthusiasts, diving into the latest trends in AI, blockchain, and cutting-edge innovations shaping tomorrow.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default EventBanner;
