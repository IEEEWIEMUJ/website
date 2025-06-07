import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
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
      text: `At Manipal University Jaipur (MUJ), the IEEE WIE chapter is dedicated to promoting women in engineering and empowering girls interested in technical fields. Our goal is to create a supportive community where young women gain valuable exposure, collaborate on real-world projects, and learn from the experiences of outstanding women engineers.`,
    },
    {
      text: `IEEE, being the world’s largest technical professional organization, plays a crucial role in advancing technology for the benefit of humanity. Through WIE, MUJ seeks to enhance this mission by encouraging girls to pursue their academic interests in engineering, technology, and science, while providing them the confidence to lead future projects and contribute to groundbreaking technological advancements.`,
    },
    {
      text: `The IEEE WIE MUJ chapter stands as a pillar of support for all women in technical disciplines at our college. Whether you're just starting out or already on your path as a budding engineer, we offer the resources and community to help you become a competent, confident leader ready to tackle the challenges of the future.`,
    },
  ];

  return (
    <section
      aria-labelledby="about-wie-title"
      className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-purple-950 text-white px-6 md:px-20 py-28"
    >
      <header className="text-center mb-20 max-w-3xl mx-auto">
        <motion.h2
          id="about-wie-title"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-[clamp(2rem,5vw,3.25rem)] font-bold text-purple-100 font-cambo relative inline-block mb-4"
        >
          IEEE Women in Engineering
          <span className="block h-1.5 w-24 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-2 mx-auto" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-purple-400 tracking-wider text-sm md:text-base"
        >
          Manipal University Jaipur
        </motion.p>
      </header>

      <div className="max-w-4xl mx-auto space-y-16">
        {sections.map((section, index) => (
          <motion.article
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white/5 border border-purple-800 rounded-2xl p-8 shadow-xl backdrop-blur-md hover:shadow-purple-500/40 transition-shadow duration-300 cursor-default"
            tabIndex={0}
          >
            <p className="text-base md:text-lg text-purple-300 leading-relaxed select-text">
              {section.text}
            </p>
          </motion.article>
        ))}
      </div>

      <motion.footer
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={sections.length + 1}
        className="text-center mt-24 max-w-3xl mx-auto"
      >
        <p className="text-sm md:text-lg text-purple-400 leading-relaxed mb-8">
          Join us in our journey toward making a difference and becoming the
          change we wish to see in the world of engineering!
        </p>
        <a
          href="#join"
          className="inline-block bg-purple-600 hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
        >
          Join Us
        </a>
      </motion.footer>
    </section>
  );
}
