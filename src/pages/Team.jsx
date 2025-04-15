import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Events.css";



// Executive Members
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

// Core Members
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
    github: "lol",
  },
];

// Animation config
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Team() {
  const renderCards = (members) =>
    members.map(
      ({ id, name, designation, img, instagram, linkedin, github }) => (
        <motion.div
          key={id}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: id * 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl shadow-lg text-center p-6 hover:scale-105 transition-transform duration-300 w-full max-w-xs"
        >
          <img
            src={img}
            alt={name}
            className="w-auto h-52 object-cover rounded-md mx-auto mb-4 border-4 border-purple-600"
          />
          <h3 className="text-xl font-semibold font-tomorrow-medium text-purple-100">
            {name}
          </h3>
          <p className="text-purple-400 font-tomorrow-regular mb-4">
            {designation}
          </p>
          <div className="flex justify-center space-x-4 text-purple-300 text-xl">
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
                <FaGithub className="hover:text-gray-400 transition" />
              </a>
            )}
          </div>
        </motion.div>
      )
    );

  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-4 sm:px-10 lg:px-20 bg-gradient-to-b from-purple-900/80 via-black/70 to-purple-900/80">
      {/* Executive Committee Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center font-tomorrow-regular text-purple-200 mb-10 relative">
          <div className="wavy-glow-line "></div>
          Executive Commitee
        </h2>
      <div className="flex flex-wrap justify-center gap-8 mb-20">
        {renderCards(executiveCommittee)}
      </div>

      {/* Core Committee Section */}
      <h2 className="text-3xl md:text-4xl  font-bold text-center font-tomorrow-regular text-purple-200 mb-10 mt-20">
        Core Committee
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {renderCards(coreCommittee)}
      </div>
    </div>
  );
}

export default Team;
