import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

// Executive Committee Data
const executiveCommittee = [
  {
    id: 1,
    name: "Kashish Kumar",
    designation: "Chairperson",
    img: "/Team/chair.jpg",
    instagram: "https://instagram.com/ananta",
    linkedin: "https://linkedin.com/in/ananta",
    github: "https://github.com/ananta",
  },
  {
    id: 2,
    name: "Guneet Pahwa",
    designation: "Vice-Chairperson",
    img: "/Team//vice.jpg",
    instagram: "https://instagram.com/saumya",
    linkedin: "https://linkedin.com/in/saumya",
    github: "https://github.com/saumya",
  },
  {
    id: 3,
    name: "Ishani Arora",
    designation: "Human Resource Director",
    img: "/Team//hrd.jpg",
    instagram: "https://instagram.com/shivangi",
    linkedin: "https://linkedin.com/in/shivangi",
    github: "https://github.com/shivangi",
  },
  {
    id: 4,
    name: "Shambhavi Sharma",
    designation: "Managing Director",
    img: "/Team//md.jpg",
    instagram: "https://instagram.com/gouri",
    linkedin: "https://linkedin.com/in/gouri",
    github: "https://github.com/gouri",
  },
  {
    id: 5,
    name: "Tanishk Mittal",
    designation: "General Secretary",
    img: "/Team//gensec.jpg",
    instagram: "https://instagram.com/shashwat",
    linkedin: "https://linkedin.com/in/shashwat",
    github: "https://github.com/shashwat",
  },
  {
    id: 6,
    name: "Akshit Gupta",
    designation: "Treasurer",
    img: "/Team//tres.jpg",
    instagram: "https://instagram.com/devishi",
    linkedin: "https://linkedin.com/in/devishi",
  },
  {
    id: 7,
    name: "Aarav",
    designation: "Technical Secretary",
    img: "/Team//techsec.jpg",
    instagram: "https://instagram.com/aaranay",
    linkedin: "https://linkedin.com/in/aaranay",
    github: "https://github.com/AaroAarav",
  },
];

// Core Committee Data
const coreCommittee = [
  {
    id: 8,
    name: "Core Member 1",
    designation: "Design Lead",
    img: "/core1.jpg",
    instagram: "https://instagram.com/core1",
    linkedin: "https://linkedin.com/in/core1",
    github: "https://github.com/core1",
  },
  {
    id: 9,
    name: "Core Member 2",
    designation: "Tech Lead",
    img: "/core2.jpg",
    instagram: "https://instagram.com/core2",
    linkedin: "https://linkedin.com/in/core2",
    github: "https://github.com/core2",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Card Component
const TeamCard = ({ member }) => {
  const { name, designation, img, instagram, linkedin, github } = member;

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl hover:scale-[1.03] transition-transform duration-300 w-full max-w-xs group"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-64 object-cover rounded-2xl border border-purple-500 mb-4 transition-transform group-hover:scale-105"
      />
      <h3 className="text-xl font-semibold text-purple-100 mb-1 text-center">
        {name}
      </h3>
      <p className="text-purple-400 text-sm mb-4 text-center">{designation}</p>
      <div className="flex justify-center gap-5 text-xl text-purple-300">
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

// Main Component
export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-purple-950 text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Executive Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-purple-100 mb-16"
        >
          Executive Committee
        </motion.h2>

        {/* Executive Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {executiveCommittee.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>

        {/* Core Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-purple-100 mt-28 mb-16"
        >
          Core Committee
        </motion.h2>

        {/* Core Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coreCommittee.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
