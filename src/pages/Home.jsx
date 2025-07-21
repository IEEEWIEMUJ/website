import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import SliderSection from "./SliderSection";

export default function Home() {
  const words = ["Programmer", "Coder", "Woman", "Developer"];
  const [text, setText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const blogData = [
    {
      id: 1,
      title: "Control + Alt + Curiosity",
      author: "Ashita Saxena",
      imageUrl: "/blog4.jpg",
      readMoreUrl:
        "https://medium.com/@ieee.wiemuj/control-alt-curiosity-why-every-student-should-explore-beyond-the-syllabus-4891ec6b7313",
    },
    {
      id: 2,
      title: "Stepping Into the 5G Era: Speed, Innovation & What Lies Ahead",
      author: "Ashita Saxena",
      imageUrl: "/blog1.jpg",
      readMoreUrl:
        "https://medium.com/@ieee.wiemuj/the-transformative-impact-of-5g-on-communication-and-industry-a4839be39911",
    },
    {
      id: 3,
      title: "Dorm Cleanout? Don’t Trash Your Tech—Here’s Why",
      author: "Chinmayee Khanna",
      imageUrl: "/blog2.jpg",
      readMoreUrl:
        "https://medium.com/@ieee.wiemuj/dorm-room-cleanout-dont-trash-your-tech-3354fb277fbd",
    },
    
  ];

  const eventData = [
    {
      id: 93,
      title: "Cyber Arena",
      image: "/Events/cyberarena.jpg",
      date: "30 June - 2 July",
      year: "2025",
      isPast: true,
      description:
        "International event based on cybersecurity, where participants will compete in various challenges related to cybersecurity..",
    },
    {
      id: 92,
      title: "BrandIT 2.0",
      image: "/Events/brandit2.0.jpg",
      date: "18 June",
      year: "2025",
      isPast: true,
      description:
        "Where design meets dev, and brands are born. BrandIt is a dynamic and engaging event. Participants will develop unique brand ideas into websites. ",
    },
    {
      id: 91,
      title: "HardWired",
      image: "/Events/hardwired.jpg",
      date: "5 April",
      year: "2025",
      isPast: true,
      description:
        "A creative competition that challenges participants to design innovative, practical projects using Arduino, pushing the boundaries of technology and hands-on development.",
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 120;
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWordIndex]);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-16 bg-cover bg-center"
        style={{ backgroundImage: "url(/bg1.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-purple-950/90 z-0" />
        <img
          src="/wie_logo.png"
          alt="WIE Watermark"
          className="absolute inset-0 m-auto w-72 md:w-96 opacity-10 z-1 pointer-events-none"
        />
        <motion.div
          className="relative z-10 max-w-4xl w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl md:text-2xl text-purple-300 tracking-widest mb-2">
            IEEE
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-purple-100 mb-2 drop-shadow-md">
            Women In Engineering
          </h1>
          <p className="text-sm md:text-base text-purple-300 mb-4">
            Manipal University Jaipur
          </p>
          <p className="text-base md:text-lg text-purple-200 mt-4 max-w-xl mx-auto">
            Exploring the fusion of technology, creativity, and empowerment.
          </p>
          <h3 className="text-2xl md:text-4xl font-bold mt-8 text-purple-100">
            I am a <span className="text-red-500">{text}</span>
          </h3>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b  from-purple-950 to-black">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h2 className="text-5xl font-bold text-purple-100 mb-4">
            IEEE Women in Engineering
          </h2>
          <p className="text-purple-300 text-xl mb-12">
            Advancing Technology for Humanity
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "About WIE",
                content:
                  "Global network of IEEE members dedicated to promoting women engineers and scientists.",
              },
              {
                title: "IEEE's Vision",
                content:
                  "To facilitate recruitment and retention of women in technical disciplines globally.",
              },
              {
                title: "IEEE WIE MUJ",
                content:
                  "Empowering college girls passionate about tech through mentorship and collaboration.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-black/60 border border-purple-700 rounded-3xl p-8 shadow-xl hover:shadow-purple-500/30 transition-all backdrop-blur-md"
                data-aos="fade-up"
                data-aos-delay={200 * (i + 1)}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl font-semibold text-purple-100 mb-4">
                  {card.title}
                </h3>
                <p className="text-purple-200">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BLOGS */}
      <section className="py-20 px-6 md:px-20 bg-black">
        <h2
          className="text-4xl font-bold text-center text-purple-200 mb-12"
          data-aos="fade-up"
        >
          Blogs
        </h2>
        <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
          {blogData.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-purple-900/40 rounded-xl p-6 border border-purple-700 shadow-md hover:shadow-purple-500/40 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full  mb-4 rounded overflow-hidden">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className=" w-full h-full px-2 object-cover"
                />
              </div>
              <h3 className="text-xl text-purple-100 font-semibold mb-2">
                {blog.title}
              </h3>
              <p className="text-purple-400 text-sm mb-2">
                By <span className="font-medium">{blog.author}</span>
              </p>
              <a
                href={blog.readMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-300 hover:text-purple-100 underline"
              >
                Read more
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-20 px-6 md:px-20 bg-black" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-purple-200 mb-12">
          Events
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {eventData.map((event) => (
            <motion.div
              key={event.id}
              className="bg-purple-900/50 rounded-2xl p-6 border border-purple-700 shadow-md hover:shadow-purple-500/40 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className=" h-120 mb-4 rounded-xl bg-black/40 flex items-center justify-center overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect width='300' height='200' fill='%23181824'/%3E%3Ctext x='150' y='100' fill='%239CA3AF' font-size='16' text-anchor='middle'%3EImage Not Available%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              <h3 className="text-xl text-purple-100 font-semibold mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-purple-400 mb-3">Date: {event.date}</p>

              {event.eventUrl && (
                <Link
                  to={event.eventUrl}
                  className="text-sm text-purple-300 hover:text-purple-100 underline transition-colors"
                >
                  Learn More
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/events"
            className="inline-block px-6 py-3 text-purple-200 border border-purple-500 hover:bg-purple-800 hover:text-white rounded-xl transition-all"
          >
            See More Events
          </Link>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-purple-950">
        <div data-aos="fade-up">
          <h2 className="text-4xl font-bold text-center text-purple-100 mb-8">
            Past Events
          </h2>
          <SliderSection />
        </div>
        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-block px-6 py-3 text-purple-200 border border-purple-500 hover:bg-purple-800 hover:text-white rounded-xl transition-all"
          >
            Go to Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
