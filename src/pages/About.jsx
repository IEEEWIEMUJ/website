import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.3,
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
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white px-6 md:px-20 py-35">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-purple-100 mb-8 font-cambo"
      >
        IEEE Women in Engineering
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-sm md:text-base text-center text-purple-400 tracking-wider mb-16"
      >
        Manipal University Jaipur
      </motion.p>

      <div className="max-w-4xl mx-auto space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white/5 border border-purple-800 rounded-2xl p-8 shadow-2xl backdrop-blur-md"
          >
            <p className="text-base md:text-lg text-purple-300 leading-relaxed">
              {section.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-center mt-20"
      >
        <p className="text-sm md:text-lg text-purple-400 max-w-3xl mx-auto leading-relaxed">
          Join us in our journey towards making a difference and becoming the
          change we wish to see in the world of engineering!
        </p>
      </motion.div>
    </div>
  );
}
