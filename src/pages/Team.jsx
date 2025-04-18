import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const executiveCommittee = [
  {
    id: 1,
    name: "Ananta Taneja",
    designation: "Chairperson",
    img: "/chair.jpg",
    instagram: "https://instagram.com/ananta",
    linkedin: "https://linkedin.com/in/ananta",
    github: "https://github.com/ananta",
  },
  {
    id: 2,
    name: "Saumya Gupta",
    designation: "Vice-Chairperson",
    img: "/vice.jpg",
    instagram: "https://instagram.com/saumya",
    linkedin: "https://linkedin.com/in/saumya",
    github: "https://github.com/saumya",
  },
  {
    id: 3,
    name: "Shivangi Singh",
    designation: "Human Resource Director",
    img: "/hrd.jpg",
    instagram: "https://instagram.com/shivangi",
    linkedin: "https://linkedin.com/in/shivangi",
    github: "https://github.com/shivangi",
  },
  {
    id: 4,
    name: "Gouri Sharma",
    designation: "Managing Director",
    img: "/md.jpg",
    instagram: "https://instagram.com/gouri",
    linkedin: "https://linkedin.com/in/gouri",
    github: "https://github.com/gouri",
  },
  {
    id: 5,
    name: "Shashwat Singh",
    designation: "General Secretary",
    img: "/gensec.jpg",
    instagram: "https://instagram.com/shashwat",
    linkedin: "https://linkedin.com/in/shashwat",
    github: "https://github.com/shashwat",
  },
  {
    id: 6,
    name: "Devishi Mahajan",
    designation: "Treasurer",
    img: "/tres.jpg",
    instagram: "https://instagram.com/devishi",
    linkedin: "https://linkedin.com/in/devishi",
  },
  {
    id: 7,
    name: "Aaranay Aadi",
    designation: "Technical Secretary",
    img: "/techsec.jpg",
    instagram: "https://instagram.com/aaranay",
    linkedin: "https://linkedin.com/in/aaranay",
    github: "https://github.com/aaranay",
  },
];

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

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const TeamCard = ({ member, index }) => {
  const { name, designation, img, instagram, linkedin, github } = member;

  return (
    <motion.div
      className="bg-black/30 border border-purple-700 rounded-3xl p-6 shadow-xl backdrop-blur-md transition-transform hover:scale-105 w-full max-w-xs"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <img
        src={img}
        alt={name}
        className="w-full h-60 object-cover rounded-xl border-4 border-purple-700 mb-4"
      />
      <h3 className="text-xl font-semibold text-purple-100 mb-1">{name}</h3>
      <p className="text-purple-400 text-sm mb-4">{designation}</p>
      <div className="flex justify-center gap-4 text-xl text-purple-300">
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

export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white py-35 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-purple-200 mb-16"
        >
          Executive Committee
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-10">
          {executiveCommittee.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-purple-200 mt-24 mb-16"
        >
          Core Committee
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-10">
          {coreCommittee.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i + executiveCommittee.length} />
          ))}
        </div>
      </div>
    </div>
  );
}
