import React, { useState } from "react";
import "./Events.css";

function Events() {
  const events = [
    {
      id: 2,
      title: "TechEden: A Premier Tech Symposium",
      image: "/techeden.jpg",
      date: "April 4, 2025",
      description:
        "A dynamic gathering of industry leaders and tech enthusiasts, diving into the latest trends in AI, blockchain, and cutting-edge innovations shaping tomorrow.",
    },
    {
      id: 3,
      title: "NextTech: Computing Session",
      image: "/nexttech.jpg",
      date: "April 4, 2025",
      description:
        "Discover the future of computing with quantum technologies and photonics, and explore their power to solve today's most pressing challenges.",
    },
    {
      id: 4,
      title: "FutureSync: 3D Printing and Robotics Session",
      image: "/futuresync.jpg",
      date: "April 4, 2025",
      description:
        "A hands-on workshop for 3D printing, applying creativity and problem-solving to real-world challenges.",
    },
    {
      id: 5,
      title: "DataPulse: Mock Quant Datathon",
      image: "/datapulse.jpg",
      date: "April 4/5, 2025",
      description:
        "An intense, high-energy datathon where participants analyze real-world datasets, applying quantitative methods to tackle complex challenges.",
    },
    {
      id: 6,
      title: "Binary Bloom: Web3 Development Indulgence",
      image: "/Binary Bloom.jpg",
      date: "April 5, 2025",
      description:
        "Delve into blockchain and Web3, learning to create decentralized solutions that are set to transform industries and everyday life.",
    },
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
  ];

  const [flippedCards, setFlippedCards] = useState({});

  const handleCardFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="events-section eventss py-20 px-6 md:px-20 bg-gradient-to-b  from-purple-900/80 via-black/70 to-purple-900/80">
      <div  className="container mx-auto mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-tomorrow-regular text-purple-200 mb-10 relative">
          <div className="wavy-glow-line "></div>
          Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className={`event-card ${
                flippedCards[event.id] ? "flipped" : ""
              }`}
              onClick={() => handleCardFlip(event.id)}
              style={{
                height: "500px", // Taller card
                maxWidth: "300px", // Less wide
                margin: "0 auto", // Center in grid cell
              }}
            >
              <div
                className="card-inner"
                style={{ height: "100%", width: "300px" }}
              >
                {/* Card Front */}
                <div className="card-front bg-purple-800/40 rounded-xl p-6 shadow-md border border-purple-700">
                  {/* Image container - increased height ratio */}
                  <div
                    className="relative w-full mb-4 bg-purple-900/50 rounded-md overflow-hidden"
                    style={{ height: "300px" }}
                  >
                    {" "}
                    {/* Fixed height for image container */}
                    <img
                      src={event.image}
                      alt={event.title}
                      className="absolute top-0 left-0 object-cover w-full h-full"
                    />
                  </div>

                  {/* Content area */}
                  <h3 className="text-lg font-semibold text-purple-100 mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-xs text-purple-300 mb-2">
                    <span className="text-purple-500">Date:</span> {event.date}
                  </p>
                  <div className="mt-auto pt-2 text-center font-agdasima-regular text-purple-300 text-xl min-h-[40px] flex items-end justify-center">
                    <span>Click to view details</span>
                  </div>
                </div>

                {/* Card Back */}
                <div className="card-back bg-purple-900/70 rounded-xl p-6 shadow-md border border-purple-500 flex flex-col">
                  <h3 className="text-2xl font-bold text-purple-200 mb-4">
                    {event.title}
                  </h3>

                  {/* Scrollable description area */}
                  <div
                    className="flex-grow overflow-y-auto mb-4"
                    style={{ maxHeight: "250px" }}
                  >
                    <p className="text-purple-200 text-xl font-agdasima-regular">{event.description}</p>
                  </div>

                  {/* Footer area */}
                  <div className="mt-auto">
                    <p className="text-xs text-purple-300 mb-4">
                      <span className="text-purple-400">Date:</span>{" "}
                      {event.date}
                    </p>
                    <div className="text-center">
                      <button className="w-4/5 px-4 py-2 border border-purple-400 text-purple-200 rounded hover:bg-purple-700 transition-colors duration-300">
                        Register Now
                      </button>
                    </div>
                    <div className="mt-4 text-center text-purple-300 text-sm">
                      <span>Click to flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
