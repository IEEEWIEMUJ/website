import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function About() {
  const sections = [
    {
      text: `IEEE Women in Engineering (WIE) is a global network within IEEE that strives to support women engineers, scientists, and technology leaders by fostering an inclusive environment that nurtures their growth and provides them with the skills and confidence needed to succeed in technical fields. The IEEE WIE network connects like-minded individuals, mentors, and role models across the world to provide opportunities, resources, and platforms for women to thrive in their careers.`,
    },
    {
      text: `At Manipal University Jaipur (MUJ), the IEEE WIE chapter is dedicated to promoting women in engineering and empowering girls who have an interest in technical fields. Our goal is to create a supportive community where young women can gain valuable exposure, collaborate on real-world projects, and learn from the experiences of outstanding women engineers.`,
    },
    {
      text: `IEEE, being the world’s largest technical professional organization, plays a crucial role in advancing technology for the benefit of humanity. Through WIE, MUJ seeks to enhance this mission by encouraging girls to pursue their academic interests in engineering, technology, and science, while providing them with the confidence to lead future projects and contribute to groundbreaking technological advancements.`,
    },
    {
      text: `The IEEE WIE MUJ chapter stands as a pillar of support for all women in technical disciplines at our college. Whether you're just starting out or already on your path as a budding engineer, we offer the resources and community to help you become a competent, confident leader ready to tackle the challenges of the future.`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-purple-950 text-white px-6 md:px-20 py-28">
      
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-purple-100 mb-4 font-cambo">
          IEEE Women in Engineering
        </h2>
        <p className="text-sm md:text-base text-purple-400 tracking-wider mb-16">
          Manipal University Jaipur
        </p>
      </motion.div>

      
      <div className="max-w-4xl mx-auto space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/5 border border-purple-800 rounded-2xl p-8 shadow-xl backdrop-blur-md hover:shadow-purple-500/20 transition-shadow duration-300"
          >
            <p className="text-base md:text-lg text-purple-300 leading-relaxed">
              {section.text}
            </p>
          </motion.div>
        ))}
      </div>

      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={sections.length + 1}
        className="text-center mt-24"
      >
        <p className="text-sm md:text-lg text-purple-400 max-w-3xl mx-auto leading-relaxed">
          Join us in our journey towards making a difference and becoming the
          change we wish to see in the world of engineering!
        </p>
      </motion.div>
    </div>
  );
}
