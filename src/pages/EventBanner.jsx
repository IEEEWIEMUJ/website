import React from 'react';
import { motion } from "framer-motion";

function EventBanner({ event }) {
  return (
    <motion.div
      className="relative bg-cover bg-center rounded-3xl overflow-hidden shadow-xl mb-16"
      style={{ backgroundImage: `url('${event.image}')` }}  
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="bg-black/60 backdrop-blur-sm w-full h-full flex flex-col lg:flex-row items-center justify-between p-6 md:p-12 gap-6">
        
        <motion.img
          src={event.image}  
          alt={event.alt || event.title}  
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
            {event.title}
          </motion.h2>

          <motion.p
            className="text-sm text-purple-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {event.date}
          </motion.p>

          <motion.p
            className="text-base text-purple-200 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {event.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export default EventBanner;
