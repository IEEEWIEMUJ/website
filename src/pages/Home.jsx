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
      title: "The Future of AI in Engineering",
      author: "Dr. Anya Sharma",
      description: "Explore the transformative impact of artificial intelligence on various engineering disciplines...",
      imageUrl: "/images/blog-1.jpg",
      readMoreUrl: "/blogs/the-future-of-ai-in-engineering",
    },
    {
      id: 2,
      title: "Sustainable Practices in Software Development",
      author: "Kenji Tanaka",
      description: "Learn about eco-friendly approaches to software development...",
      imageUrl: "/images/blog-2.jpg",
      readMoreUrl: "/blogs/sustainable-software-development",
    },
    {
      id: 3,
      title: "Women Leading Innovation in Tech",
      author: "Priya Patel",
      description: "An inspiring look at the contributions of women leaders...",
      imageUrl: "/images/blog-3.jpg",
      readMoreUrl: "/blogs/women-in-tech-innovation",
    },
  ];

  const eventData = [
    {
      id: 1,
      title: "Pandora: AR/VR Workshop",
      image: "/pandora.jpg",
      date: "April 5, 2025",
      description: "Step into the immersive world of AR/VR...",
    },
    {
      id: 2,
      title: "Artemis: Mental Health Check-In",
      image: "/artemis.jpg",
      date: "April 5, 2025",
      description: "An empowering session dedicated to mental wellness...",
    },
    {
      id: 3,
      title: "HardWired",
      image: "/hardwired.jpg",
      date: "April 5, 2025",
      description: "A creative competition using Arduino...",
    },
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
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-16 bg-cover bg-center" style={{ backgroundImage: "url(/bg1.jpg)" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-purple-950/90 z-0" />
        <img src="/wie_logo.png" alt="WIE Watermark" className="absolute inset-0 m-auto w-72 md:w-96 opacity-10 z-1 pointer-events-none" />
        <motion.div
          className="relative z-10 max-w-4xl w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl md:text-2xl text-purple-300 tracking-widest mb-2">IEEE</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-purple-100 mb-2 drop-shadow-md">Women In Engineering</h1>
          <p className="text-sm md:text-base text-purple-300 mb-4">Manipal University Jaipur</p>
          <p className="text-base md:text-lg text-purple-200 mt-4 max-w-xl mx-auto">Exploring the fusion of technology, creativity, and empowerment.</p>
          <h3 className="text-2xl md:text-4xl font-bold mt-8 text-purple-100">I am a <span className="text-red-500">{text}</span></h3>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b  from-purple-950 to-black">
        <motion.div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-purple-100 mb-4">IEEE Women in Engineering</h2>
          <p className="text-purple-300 text-xl mb-12">Advancing Technology for Humanity</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "About WIE",
                content: "Global network of IEEE members dedicated to promoting women engineers and scientists.",
              },
              {
                title: "IEEE's Vision",
                content: "To facilitate recruitment and retention of women in technical disciplines globally.",
              },
              {
                title: "IEEE WIE MUJ",
                content: "Empowering college girls passionate about tech through mentorship and collaboration.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-black/60 border border-purple-700 rounded-3xl p-8 shadow-xl hover:shadow-purple-500/30 transition-all backdrop-blur-md"
                data-aos="fade-up"
                data-aos-delay={200 * (i + 1)}
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-2xl font-semibold text-purple-100 mb-4">{card.title}</h3>
                <p className="text-purple-200">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BLOGS */}
      <section className="py-20 px-6 md:px-20 bg-black">
        <h2 className="text-4xl font-bold text-center text-purple-200 mb-12" data-aos="fade-up">Blogs</h2>
        <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
          {blogData.map((blog) => (
            <motion.div
              key={blog.id}
              className="bg-purple-900/40 rounded-xl p-6 border border-purple-700 shadow-md hover:shadow-purple-500/40 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-full pt-[56.25%] mb-4 rounded overflow-hidden">
                <img src={blog.imageUrl} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <h3 className="text-xl text-purple-100 font-semibold mb-2">{blog.title}</h3>
              <p className="text-purple-400 text-sm mb-2">By <span className="font-medium">{blog.author}</span></p>
              <Link to={blog.readMoreUrl} className="text-sm text-purple-300 hover:text-purple-100 underline">Read more</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-20 px-6 md:px-20 bg-black">
        <h2 className="text-4xl font-bold text-center text-purple-200 mb-12">Events</h2>
        <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
          {eventData.map((event) => (
            <motion.div
              key={event.id}
              className="bg-purple-900/50 rounded-xl p-6 border border-purple-700 shadow-md hover:shadow-purple-500/40 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-60 overflow-hidden mb-4">
                <img src={event.image} alt={event.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl text-purple-100 font-semibold mb-1">{event.title}</h3>
              <p className="text-xs text-purple-400 mb-2">Date: {event.date}</p>
              {event.eventUrl && (
                <Link to={event.eventUrl} className="text-sm text-purple-300 hover:text-purple-100 underline">Learn More</Link>
              )}
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/events" className="inline-block px-6 py-3 text-purple-200 border border-purple-500 hover:bg-purple-800 hover:text-white rounded transition-all">See More Events</Link>
        </div>
      </section>

      {/* SLIDER */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-purple-950">
        <h2 className="text-4xl font-bold text-center text-purple-100 mb-8">Past Events</h2>
        <SliderSection />
      </section>
    </div>
  );
}
