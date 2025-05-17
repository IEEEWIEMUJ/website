import React from 'react'
import { motion } from 'framer-motion'
function Sponsors() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-purple-950 text-white py-24 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl py-20 font-bold text-center text-purple-100 mb-8 font-cambo"
        >
          Our Sponsors
          
        </motion.h2>
      </div>
    </>
  )
}

export default Sponsors