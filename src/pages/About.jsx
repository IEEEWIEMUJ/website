import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-6 md:px-20 bg-gradient-to-b from-purple-900/80 via-black/70 to-purple-900/80">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl pt-10 font-bold text-center font-cambo text-purple-200 mb-4 relative">
          IEEE Women in Engineering 
        </h2>
        <p className="text-xs sm:text-sm md:text-base pb-10 text-purple-300 mb-4 sm:mb-10 tracking-widest xt-wide">
              Manipal University Jaipur
            </p>
        <p className="text-sm md:text-lg text-purple-300 mb-8 sm:max-w-3xl mx-auto leading-relaxed">
          IEEE Women in Engineering (WIE) is a global network within IEEE that strives to support women engineers,
          scientists, and technology leaders by fostering an inclusive environment that nurtures their growth and
          provides them with the skills and confidence needed to succeed in technical fields. The IEEE WIE network connects
          like-minded individuals, mentors, and role models across the world to provide opportunities, resources, and
          platforms for women to thrive in their careers.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mb-10"
      >
        <p className="text-sm md:text-lg text-purple-300 mb-8 sm:max-w-3xl mx-auto leading-relaxed">
          At <strong>Manipal University Jaipur (MUJ)</strong>, the IEEE WIE chapter is dedicated to promoting women in
          engineering and empowering girls who have an interest in technical fields. Our goal is to create a supportive
          community where young women can gain valuable exposure, collaborate on real-world projects, and learn from the
          experiences of outstanding women engineers. We aim to inspire and motivate our members by hosting skill-building
          workshops, talks, and networking events with industry leaders, researchers, and innovators.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center mb-10"
      >
        <p className="text-sm md:text-lg text-purple-300 mb-8 sm:max-w-3xl mx-auto leading-relaxed">
          IEEE, being the world’s largest technical professional organization, plays a crucial role in advancing technology
          for the benefit of humanity. Through WIE, MUJ seeks to enhance this mission by encouraging girls to pursue their
          academic interests in engineering, technology, and science, while providing them with the confidence to lead future
          projects and contribute to groundbreaking technological advancements.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-center"
      >
        <p className="text-sm md:text-lg text-purple-300 mb-8 sm:max-w-3xl mx-auto leading-relaxed">
          The IEEE WIE MUJ chapter stands as a pillar of support for all women in technical disciplines at our college.
          Whether you're just starting out or already on your path as a budding engineer, we offer the resources and
          community to help you become a competent, confident leader ready to tackle the challenges of the future. Join us in
          our journey towards making a difference and becoming the change we wish to see in the world of engineering!
        </p>
      </motion.div>
    </div>
  );
}

export default About;
