import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
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
      description:
        "Explore the transformative impact of artificial intelligence on various engineering disciplines. From design optimization to predictive maintenance, AI is revolutionizing the field.",
      imageUrl: "/images/blog-1.jpg", // Replace with actual image path
      readMoreUrl: "/blogs/the-future-of-ai-in-engineering", // Replace with actual link
    },
    {
      id: 2,
      title: "Sustainable Practices in Software Development",
      author: "Kenji Tanaka",
      description:
        "Learn about eco-friendly approaches to software development, including energy-efficient coding, reducing digital waste, and building sustainable applications for a greener future.",
      imageUrl: "/images/blog-2.jpg", // Replace with actual image path
      readMoreUrl: "/blogs/sustainable-software-development", // Replace with actual link
    },
    {
      id: 3,
      title: "Women Leading Innovation in Tech",
      author: "Priya Patel",
      description:
        "An inspiring look at the contributions of women leaders who are driving innovation and shaping the future of technology across different industries.",
      imageUrl: "/images/blog-3.jpg", // Replace with actual image path
      readMoreUrl: "/blogs/women-in-tech-innovation", // Replace with actual link
    },
    // You can add more blog objects here
  ];

  const eventData = [
    {
      id: 7,
      title: "Pandora: AR/VR Workshop for Innovators",
      image: "/pandora.jpg",
      date: "April 5, 2025",
      description:
        "Step into the immersive world of AR/VR, where participants will create and experiment with technologies reshaping industries and experiences.",
    },
    {
      id: 8,
      title: "Artemis: Mental Health Check-In",
      image: "/artemis.jpg",
      date: "April 5, 2025",
      description:
        "An empowering session dedicated to mental wellness, offering tools and strategies to manage stress, build resilience, and maintain balance in today's fast-paced world.",
    },
    {
      id: 9,
      title: "HardWired",
      image: "/hardwired.jpg",
      date: "April 5, 2025",
      description:
        "A creative competition that challenges participants to design innovative, practical projects using Arduino, pushing the boundaries of technology and hands-on development.",
    },
    // Add more event objects here
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
        // Wait before starting to delete the word
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout); // Cleanup timeout on re-renders
  }, [charIndex, isDeleting, currentWordIndex]);

  return (
    <>
      <div className="bg-gradient-to-r from-purple-950 via-black to-purple-950 text-white font-cambo">
        {/* Section 1: Hero */}
        <section
          className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-8 md:px-16 bg-cover bg-center"
          style={{ backgroundImage: "url(bg1.jpg)" }}
        >
          {/* Top and Bottom Purple Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-transparent to-purple-900/80 backdrop-blur-sm z-0" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl w-full">
            {/* NEW LINE: IEEE WIE */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-tomorrow-regular text-purple-300  extra-wide">
              IEEE
            </h2>

            <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl  font-bold mb-2 sm:mb-2 text-purple-100 drop-shadow-xl leading-tight">
              Women In Engineering
            </h2>

            {/* NEW LINE: Manipal University Jaipur */}
            <p className="text-xs sm:text-sm md:text-base font-tomorrow-regular text-purple-300 mb-4 sm:mb-10 tracking-widest xt-wide">
              Manipal University Jaipur
            </p>

            <p className="text-sm sm:text-base md:text-lg text-purple-200 mt-2 sm:mt-4 max-w-xl mx-auto px-2">
              Exploring the fusion of technology, creativity, and empowerment.
            </p>

            {/* Existing heading */}
            <h1 className="text-xl sm:text-2xl md:text-4xl font-tomorrow-regular font-bold mt-6 sm:mt-8 text-purple-100 drop-shadow-xl">
              I am a{" "}
              <span className="text-red-500 transition-all duration-500 ease-in-out">
                {text}
              </span>
            </h1>
          </div>
        </section>

        <div className="bg-black">
          {/* Section 2: About IEEE WIE */}

          <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-purple-900/80 to-black backdrop-blur-sm -z-1">
            <div data-aos="fade-up">
              <div className="absolute inset-0 " />
              <div className="rounded-xl p-10 max-w-5xl mx-auto text-center">
                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-purple-100 mb-2">
                  IEEE Women in Engineering
                </h2>

                {/* Subtitle */}
                <p className="text-purple-300 text-lg md:text-xl font-medium mb-10">
                  Advancing Technology for Humanity
                </p>

                <div className="md:flex md:space-x-8 text-center">
                  {/* Subsection 1: About WIE */}
                  <div className="border border-purple-700 rounded-lg p-6 mb-6 md:mb-0 md:w-1/3 bg-black shadow-2xl shadow-purple-500">
                    <h3 className="text-2xl font-semibold text-purple-100 mb-3">
                      About WIE
                    </h3>
                    <p className="text-purple-200 text-lg leading-relaxed">
                      IEEE Women in Engineering (WIE) is a global network of
                      IEEE members and volunteers dedicated to promoting women
                      engineers and scientists, and inspiring girls around the
                      world to follow their academic interests in a career in
                      engineering and science.
                    </p>
                  </div>

                  {/* Subsection 2: IEEE's Vision */}
                  <div className="border border-purple-700 rounded-lg p-6 mb-6 md:mb-0 md:w-1/3 bg-black shadow-2xl shadow-purple-500">
                    <h3 className="text-2xl font-semibold text-purple-100 mb-3">
                      IEEE's Vision
                    </h3>
                    <p className="text-purple-200 text-lg leading-relaxed">
                      IEEE WIE's goal is to facilitate the recruitment and
                      retention of women in technical disciplines globally. We
                      envision a vibrant community of IEEE women and men
                      collectively using their diverse talents to innovate for
                      the benefit of humanity.
                    </p>
                  </div>

                  {/* Subsection 3: IEEE WIE MUJ */}
                  <div className="border border-purple-700 rounded-lg p-6 mb-6 md:mb-0 md:w-1/3 bg-black shadow-2xl shadow-purple-500">
                    <h3 className="text-2xl  font-semibold text-purple-100 mb-3">
                      IEEE WIE MUJ
                    </h3>
                    <p className="text-purple-200 text-lg leading-relaxed">
                      IEEE WIE MUJ seeks to empower girls in our college who are
                      interested in technical fields and to assist them in
                      becoming competent by learning from other outstanding
                      women engineers and gaining the confidence to lead on
                      real-world projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="w-[80%] mx-auto h-0.5 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 opacity-90 rounded-full mb-12 blur-[0.5px] glow-line"></div>
          {/* Section 3: Blogs */}

          <section className="py-20 px-6 md:px-20 ">
            <div className=" rounded-2xl p-6 md:p-10 bg-black/50">
              <div data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-200 mb-10 relative">
                  <div className="wavy-glow-line"></div>
                  Blogs
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {blogData.map((blog) => (
                    <div
                      key={blog.id}
                      className="bg-purple-800/40 rounded-xl p-6 shadow-md border border-purple-700 transition duration-300 hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] hover:border-purple-400"
                    >
                      {/* Image */}
                      <div className="relative w-full pt-[56.25%] mb-4 bg-purple-900/50 rounded-md overflow-hidden">
                        <img
                          src={blog.imageUrl}
                          alt={blog.title}
                          className="absolute top-0 left-0 w-full h-full object-cover"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-purple-100 mb-2">
                        {blog.title}
                      </h3>
                      {/* Author */}
                      <p className="text-purple-400 text-sm mb-4">
                        By{" "}
                        <span className="text-purple-300 font-medium">
                          {blog.author}
                        </span>
                      </p>
                      {/* Read More Button (optional, if you want to keep it) */}
                      <button className="text-sm text-purple-300 hover:text-purple-100 underline">
                        Read more
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="w-[80%] mx-auto h-0.5 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 opacity-90 rounded-full mb-12 blur-[0.5px] glow-line"></div>

          <section className="py-20 px-6 md:px-20 bg-black">
            <div data-aos="fade-up" className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-200 mb-10 relative">
                <div className="wavy-glow-line"></div>
                Events
              </h2>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventData.map((event) => (
                  <div
                    key={event.id}
                    className="bg-purple-900/50 rounded-xl p-6 shadow-md border border-purple-700 transition duration-300 hover:shadow-[0_0_15px_4px_rgba(192,132,252,0.6)] hover:border-purple-400 max-w-[85%] h-[500px] flex flex-col mx-auto"
                  >
                    {/* Image */}
                    {event.image && (
                      <div className="relative h-[400px] mb-4 bg-purple-900/50 rounded-md overflow-hidden flex items-center justify-center">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="object-contain max-w-full max-h-full"
                        />
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-purple-100 mb-2">
                      {event.title}
                    </h3>

                    {/* Date */}
                    <p className="text-xs text-purple-500">
                      Date: {event.date}
                    </p>

                    {/* Optional: Link to event details */}
                    {event.eventUrl && (
                      <div className="mt-auto">
                        <Link
                          to={event.eventUrl}
                          className="inline-block mt-4 text-sm text-purple-300 hover:text-purple-100 underline"
                        >
                          Learn More
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Link
                  to="/events"
                  className="inline-block px-6 py-3 text-purple-200 border border-purple-500 hover:bg-purple-800 hover:text-white rounded transition-all duration-300"
                >
                  See More Events
                </Link>
              </div>
            </div>
          </section>
          <div className="w-[80%] mx-auto h-0.5 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 opacity-90 rounded-full mb-12 blur-[0.5px] glow-line"></div>

          <section className="bg-gradient-to-b from-black to-purple-900/80 py-20 px-6 md:px-20">

          <SliderSection />
          </section>

        </div>
      </div>
    </>
  );
}
