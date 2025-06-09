import React, { useState } from "react";
import { Search, Calendar, ChevronDown } from "lucide-react";
import EventBanner from "./EventBanner";

function Events() {
  const allEvents = [
    {
      id: 90,
      title: "BrandIT 2.0",
      image: "/Events/brandit2.0.jpg",
      date: "18 June",
      year: "2025",
      isPast: false,
      description:
        "A creative competition that challenges participants to design innovative, practical projects using Arduino, pushing the boundaries of technology and hands-on development.",
    },
    {
      id: 89,
      title: "HardWired",
      image: "/Events/hardwired.jpg",
      date: "5 April",
      year: "2025",
      isPast: true,
      description:
        "A creative competition that challenges participants to design innovative, practical projects using Arduino, pushing the boundaries of technology and hands-on development.",
    },
    {
      id: 88,
      title: "Artemis: Mental Health Check-In",
      image: "/Events/artemis.jpg",
      date: "5 April",
      year: "2025",
      isPast: true,
      description:
        "An empowering session dedicated to mental wellness, offering tools and strategies to manage stress, build resilience, and maintain balance in today's fast-paced world.",
    },
    {
      id: 87,
      title: "Pandora: AR/VR Workshop for Innovators",
      image: "/Events/pandora.jpg",
      date: "5 April",
      year: "2025",
      isPast: true,
      description:
        "Step into the immersive world of AR/VR, where participants will create and experiment with technologies reshaping industries and experiences.",
    },
    {
      id: 86,
      title: "Binary Bloom: Web3 Development Indulgence",
      image: "/Events/binarybloom.jpg",
      date: "5 April",
      year: "2025",
      isPast: true,
      description:
        "Delve into blockchain and Web3, learning to create decentralized solutions that are set to transform industries and everyday life.",
    },
    {
      id: 85,
      title: "DataPulse: Mock Quant Datathon",
      image: "/Events/datapulse.jpg",
      date: "4-5 April",
      year: "2025",
      isPast: true,
      description:
        "An intense, high-energy datathon where participants analyze real-world datasets, applying quantitative methods to tackle complex challenges.",
    },
    {
      id: 84,
      title: "FutureSync: 3D Printing and Robotics Session",
      image: "/Events/futuresync.jpg",
      date: "4 April",
      year: "2025",
      isPast: true,
      description:
        "A hands-on workshop for 3D printing, applying creativity and problem-solving to real-world challenges.",
    },
    {
      id: 83,
      title: "NextTech: Computing Session",
      image: "/Events/nexttech.jpg",
      date: "4 April",
      year: "2025",
      isPast: true,
      description:
        "Discover the future of computing with quantum technologies and photonics, and explore their power to solve today's most pressing challenges.",
    },
    {
      id: 82,
      title: "TechEden: A Premier Tech Symposium",
      image: "/Events/techeden.jpg",
      date: "4 April",
      year: "2025",
      isPast: true,
      description:
        "A dynamic gathering of industry leaders and tech enthusiasts, diving into the latest trends in AI, blockchain, and cutting-edge innovations shaping tomorrow.",
    },
    {
      id: 81,
      title: "BITS N' BREWS 5.0",
      image: "/Events/bits5.jpg",
      date: "11 January",
      year: "2025",
      isPast: true,
      description:
        "IEEE WIE MUJ is excited to present Bits N' Brews (Ep:5)—an inspiring alumni talk featuring Ms. Kritika Rag, Software Engineer at Google and tech trailblazer.",
    },
    {
      id: 80,
      title: "CODER'S CRUSADE",
      image: "/Events/coders_crusade.jpg",
      date: "27 November",
      year: "2024",
      isPast: true,
      description:
        "On 27th November 2024, IEEE WIE MUJ hosted Coders Crusade, an engaging and educational event designed to introduce budding programmers to C programming and competitive coding.",
    },
    {
      id: 79,
      title: "BALLISTIC",
      image: "/Events/BALLISTIC.avif",
      date: "3 October",
      year: "2024",
      isPast: true,
      description:
        "It is a gaming event where the shortlisted PC and mobile games are Fifa, BGMI and Mortal Kombat. Participants will progressively reach further rounds and the winners will bag the prize pool.",
    },
    {
      id: 78,
      title: "WRITE IT RIGHT",
      image: "/Events/WRITE.avif",
      date: "26 September",
      year: "2024",
      isPast: true,
      description:
        "Write it Right is a comprehensive session on research paper writing, led by an expert speaker. The event will cover essential tips and guidelines for crafting a well-structured research paper, ideal for both beginners and experienced writers.",
    },
    {
      id: 77,
      title: "FOR THE RECORD",
      image: "/Events/for_the_record.jpg",
      date: "27 September",
      year: "2024",
      isPast: true,
      description:
        "An IEEE community exclusive event where the participants will try to break existing world records.",
    },
    {
      id: 76,
      title: "TECH SUMMIT 3.0",
      image: "/Events/tech_summit.jpg",
      date: "5 October",
      year: "2024",
      isPast: true,
      description:
        "A workshop event where speakers, mostly tech enthusiasts and industry professionals are called to give insights in the field of tech. It fosters networking opportunities among industry professionals and educates the students about the emerging trends and possibilities.",
    },
    {
      id: 75,
      title: "BIT TO BYTE",
      image: "/Events/bit_to_byte.jpg",
      date: "4 October",
      year: "2024",
      isPast: true,
      description:
        "A 24 hour Hackathon with exhilarating problem statements and a platform to present innovation.",
    },
    {
      id: 74,
      title: "BREACOUT 5.0",
      image: "/Events/breacout_5.jpg",
      date: "5 October",
      year: "2024",
      isPast: true,
      description:
        "A Harry Potter themed treasure hunt where the participants will be divided into four groups and each group will follow a specific storyline to reach the final treasure. Scripts, clues, and mini games will be a major part of the event.",
    },
    {
      id: 73,
      title: "Networking Night With WIE",
      image: "/Events/networking_night.jpg",
      date: "6 October",
      year: "2024",
      isPast: true,
      description:
        "NWWIE is an overnight women only event, filled with technical and non-technical programs to engage the participants with fellow women.",
    },
    {
      id: 72,
      title: "TECHEXPO",
      image: "/Events/techexpo.jpg",
      date: "7 October",
      year: "2024",
      isPast: true,
      description:
        "A showcase event where participants from various domains come together to present their innovative projects. This event provides a platform for individuals and teams to demonstrate their creativity, technical expertise, and problem-solving skills across a wide range of fields including technology, design, business, engineering, and more.",
    },
    {
      id: 71,
      title: "Pixel Forge",
      image: "/Events/pixel_forge.jpg",
      date: "3 October",
      year: "2024",
      isPast: true,
      description:
        "Pixel Forge is a hands-on game development workshop featuring a guest speaker from IGDC. Participants will be introduced to key tools and techniques for game development, followed by an exciting game jam to put their skills to the test and create their own games.",
    },
    {
      id: 70,
      title: "Cyber Grid",
      image: "/Events/cybergrid.jpg",
      date: "28-31 August",
      year: "2024",
      isPast: true,
      description:
        "Cyber Grid, held from August 28th to 30th, 2024 in collaboration with IEEE WIE ISTIC Tunisia, was a premier international cybersecurity event dedicated to global collaboration, knowledge sharing, and empowering the future leaders of cybersecurity through expert-led sessions and insightful discussions.",
    },
    {
      id: 69,
      title: "BrandIT",
      image: "/Events/brandIT.jpg",
      date: "3-5 August",
      year: "2024",
      isPast: true,
      description:
        "BrandIt was a dynamic and engaging event from August 3rd to 5th, 2024. Participants developed unique brand ideas into real-life products or services. They crafted presentations, designed websites, and showcased their skills. The event concluded with pitches to a panel of three expert judges: Bibhu Kalyan Nayak, Kartik Singh, and Priya Bhola. The creativity and innovation displayed were truly inspiring.",
    },
    {
      id: 68,
      title: "LeetFleet",
      image: "/Events/leetfleet.jpg",
      date: "20 july",
      year: "2024",
      isPast: true,
      description:
        "LeetFleet, hosted on July 20, 2024, was a dynamic DSA learning event led by Mr. Gaurish Baliga, Master at Codeforces and SWE intern at Google. Streamed live on Discord and YouTube, participants engaged in live problem-solving, gained expert insights, and learned strategies to enhance their coding efficiency. The event fostered a collaborative community, bridging knowledge gaps and showcasing how coding skills translate to real-world challenges.",
    },
    {
      id: 67,
      title: "TechClash",
      image: "/Events/techClash.jpg",
      date: "28-30 june",
      year: "2024",
      isPast: true,
      description:
        "TechClash, organized by IEEE WIE MUJ for IEEE WIE Day, was a dynamic debating event featuring quizzes and debates on AI and some domains of 4IR (cybersecurity, biotechnology, and cloud computing). Held over a span of 3 days, the event began with a session on 'Mastering Research Papers'. In the following sessions, participants showcased their critical thinking and debating skills, culminating in a grand finale on 'Should consumers have the right to repair their own electronic devices or should manufacturers retain control over repairs'.",
    },
    {
      id: 66,
      title: "APOTHEOSIS",
      image: "/Events/APOTHEOSIS.jpg",
      date: "12 April",
      year: "2024",
      isPast: true,
      description:
        "An electrifying 12 hour hackathon adventure, overnight and filled with innovation and camaraderie, where diversity thrived.",
    },
    {
      id: 65,
      title: "BITS N' BREWS EPISODE 2",
      image: "/Events/bnbep2.jpg",
      date: "31 March",
      year: "2024",
      isPast: true,
      description:
        "IEEE WIE MUJ conducted the second edition of its alumni talk series “Bits N’ Brews” with Ms. Akruti Sinha. She spoke about her experience in the Masters programme at North Carolina State University and guided the audience members through the application process required to apply for the same. Some of her indispensable advice included having glowing LoRs and SoPs, identify dream and safety schools to maximise chances of acceptance and gaining some research experience at the undergraduate level.",
    },
    {
      id: 64,
      title: "EMPOWHER",
      image: "/Events/Empowher.jpg",
      date: "4-10 March",
      year: "2024",
      isPast: true,
      description:
        "This Women's Day, we dipped our brushes in the palette of sisterhood's brilliance and illuminated the canvas of creativity with EmpowHer: A Digital Art Competition.",
    },
    {
      id: 63,
      title: "FUTURE FORGE",
      image: "/Events/FUTURE_FORGE.avif",
      date: "23 February",
      year: "2024",
      isPast: true,
      description:
        "A journey through the present, future and the imaginary world of sci-fi where we created our own products inspired from them. The preexisting technology was reverse engineered and the ideas for a new product with an added twist were presented. The participants bought their primary products with points earned through a series of fastest finger first questions. All in all, a wholesome experience filled with learning and laughter.",
    },
    {
      id: 62,
      title: "WIENTER OF CODE",
      image: "/Events/WIENTER_OF_CODE.avif",
      date: "13 January-2 February",
      year: "2024",
      isPast: true,
      description:
        "A solid boost to your journey into coding, an offline workshop to cover your basics of open source with Git and GitHub followed by 21 days of practice facilitated by BLUELEARN all set to push you onto the right track.",
    },
    {
      id: 61,
      title: "BITS N BREWS",
      image: "/Events/BITS_N_BREWS.avif",
      date: "26 December",
      year: "2023",
      isPast: true,
      description:
        "“Connecting with our alumni, those who've walked the walk, is a fantastic way to map out your career and seek valuable guidance.” Keeping this in mind, IEEE WIE MUJ conducted 'BITS N' BREWS', an alumni talk with Ms. Shiksha Jaiswal (Class of 2021), who is currently working as a modern work consultant at Microsoft IGD, Hyderabad.",
    },
    {
      id: 60,
      title: "SINCONF'23",
      image: "/Events/SINCONF.avif",
      date: "20 November",
      year: "2023",
      isPast: true,
      description:
        "Manipal University Jaipur in collaboration with Hasan Kalyoncu University, Gaziantep, Türkiye and IEEE MUJ organised the 16th edition of International Conference on Security of Information and Networks from 20th to 21st November 2023.",
    },
    {
      id: 59,
      title: "Tech Trends",
      image: "/Events/Tech_Trends.avif",
      date: "31 October",
      year: "2023",
      isPast: true,
      description:
        "IEEE WIE MUJ was the proud host of Tech Trends where we were graced by the virtual presence of Ms Purnima Kochikar, vice president of Google play partnerships, an inspiration and an active promoter of women in engineering. The event was a tremendous success with all of our audience walking away with stirring takeaways.",
    },
    {
      id: 58,
      title: "IC Hack 2.0",
      image: "/Events/IC_Hack_2.avif",
      date: "7-8 October, 21-22 October",
      year: "2023",
      isPast: true,
      description:
        "IEEE Manipal University Jaipur conducted the 2nd edition of IEEE India Council Hackathon - IC Hack 2.0. The hackathon was conducted in two phases. Phase I was held from 7th to 8th October 2023 in online mode. Phase II was held from 21st to 22nd October 2023 in hybrid mode. Participants from across the country engaged in a fierce competition across four diverse tracks: Computer Vision, Healthcare, Open Innovation in Climate Change, and Innovation in Transport.",
    },
    {
      id: 57,
      title: "Elohim",
      image: "/Events/",
      date: "25 September",
      year: "2023",
      isPast: true,
      description:
        "IEEE MUJ conducted the closing ceremony ‘Elohim’ of their flagship technical fest Genesis 3.0. The event witnessed prolific standup comedian Akash Gupta who left the crowd in splits. The audience was also treated to performances by The Music Club, Litmus, and Coreografia. The performances were followed by a DJ set by Sunburn.",
    },
    {
      id: 56,
      title: "Ballistic 3.0",
      image: "/Events/ballistic_3.0.jpeg",
      date: "23-24 September",
      year: "2023",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 22nd to 25th September 23. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. The players engaged in battles of FIFA and Mortal Kombat and many popular retro games like Contra and Road Rash.",
    },
    {
      id: 55,
      title: "Network with WIE 2.0",
      image: "/Events/networkwithwie2.0.jpeg",
      date: "23 September",
      year: "2023",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 22nd to 25th September 23. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. An all-women event, the attendees got to interact with their peers and seniors overnight. The seniors spoke about their internship experiences at firms like Google, Microsoft, NXP, etc. Several ice-breaking sessions were also conducted to help attendees get to know each other better.",
    },
    {
      id: 54,
      title: "Tech Summit",
      image: "/Events/techsummit01.jpeg",
      date: "23 September",
      year: "2023",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 22nd to 25th September 23. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. 'Learn from and ask questions to the best of the tech industry' - A panel full of experienced veterans such as Paritosh Anand, Sandeep Jain, Tejas Patil and Aditi Gupta spoke about their entrepreneurial journeys and gave out indispensable guidance to the audience.",
    },
    {
      id: 53,
      title: "Breacout 4.0",
      image: "/Events/breacout4.jpeg",
      date: "23 September",
      year: "2023",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 22nd to 25th September 23. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. Top 30 teams engaged in a MARVELous treasure hunt sprawling the entire campus and scavenged for the precious infinity stones in a day-long event.",
    },
    {
      id: 52,
      title: "Lights Camera Auction",
      image: "/Events/lca3.jpeg",
      date: "22-23 September",
      year: "2023",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 22nd to 25th September 23. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. 'Be thrifty in your bidding and hustle while selling' - The participants used their entrepreneur intellect and bade for their favorite products, prepared their pitches and flipped them for a profit!",
    },
    {
      id: 51,
      title: "CODE-IT-ON 2.0",
      image: "/Events/codeiton2.0.jpeg",
      date: "22 September",
      year: "2023",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 22nd to 25th September 23. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. The participants competed to solve a set of 4 programming questions in a time limit of 2 hours.",
    },
    {
      id: 50,
      title: "Digital Graffiti",
      image: "/Events/digitalgraffiti.jpeg",
      date: "20 September",
      year: "2023",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 22nd to 25th September 23. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. 'Be the proverbial artist everyone dreams to be' - The participants made the design of their wildest imagination based on a surprise theme which was given on the day of the event.",
    },
    {
      id: 49,
      title: "CSS Combat",
      image: "/Events/CSSCombat.jpeg",
      date: "4 January",
      year: "2023",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 22nd to 25th September 23. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. 'It is in the CSS where the magic of a website resides' - The participants had to prove their design acumen in this 3 part online event with a massive prize pool of 20,000 Rs.",
    },
    {
      id: 48,
      title: "College Starter Pack'23",
      image: "/Events/college_starter_pack.jpg",
      date: "26 August",
      year: "2023",
      isPast: true,
      description:
        "In our webinar, 'College guide for freshers', our guest speaker, Varun Kohli, the CEO of Coding Blocks shared insider tips on effective study habits, time management strategies, and how to strike a healthy balance between your academic and social life.",
    },
    {
      id: 47,
      title: "Cosmic Canvas",
      image: "/Events/cosmiccanvas.jpg",
      date: "28 June",
      year: "2023",
      isPast: true,
      description:
        "Cosmic Canvas featured a captivating poster-making competition centred around the theme of a sci-fi movie. Participants were encouraged to unleash their creativity and explore sub-themes like space, time, robots, artificial intelligence, aliens, and alternate reality.",
    },
    {
      id: 46,
      title: "Tech Flix",
      image: "/Events/Techflix.jpg.jpeg",
      date: "18 July",
      year: "2023",
      isPast: true,
      description:
        "Tech Flix was an event that allowed participants to explore the fascinating realm where technology and movies intertwine, and fuel their passion for learning and entertainment. We were elated to witness the outstanding knowledge and quick thinking displayed by all the participants. Their enthusiasm and passion for technology and movies were truly commendable!",
    },
    {
      id: 45,
      title: "Hands On Hustle",
      image: "/Events/Hands in Hustle.jpeg",
      date: "24 June",
      year: "2023",
      isPast: true,
      description:
        "Participants had the opportunity to explore the exciting realm of creating a personal tutoring bot for placements. The main focus of the session was on developing an LLM-powered chatbot, providing attendees with valuable insights and practical skills, all at no cost.",
    },
    {
      id: 44,
      title: "BitBlitz",
      image: "/Events/BITBLITZ.jpg",
      date: "12 June",
      year: "2023",
      isPast: true,
      description:
        "In this contest, the coders compete while also improving their overall algorithmic knowledge. The coding contest helps students and professionals to tackle a problem by reading the concepts one doesn't know, and also gain practical experience by coding the solution to the problem, thus improving their skills significantly. This coding competition packs the excitement of programming with the fun of learning into one compelling challenge.",
    },
    {
      id: 43,
      title: "The Next Dimension",
      image: "/Events/The_Next_Dimension.jpeg",
      date: "1 April",
      year: "2023",
      isPast: true,
      description:
        "The speaker- Mr. Prakarsh Pathak spoke about the future of web technology. He explained about decentralised autonomy used in Web 3.0 and various other technical aspects involved. He also shed light on blockchain, NFTs and cryptocurrency mining. The speaker also spoke about DeFi and tokens.",
    },
    {
      id: 42,
      title: "The Fast Switch",
      image: "/Events/The_Fast_Switch.png",
      date: "19 March",
      year: "2023",
      isPast: true,
      description:
        "The Fast Switch was a coding relay competition. What makes code relay unique is that instead of writing a whole bug fix, you make incremental progress and then pass it along to the next contributor.",
    },
    {
      id: 41,
      title: "Hack{Her}",
      image: "/Events/HackHer.jpeg",
      date: "17-18 February",
      year: "2023",
      isPast: true,
      description:
        "Hack(her) was a women centric hackathon which would help the participants code under pressure and give them an exposure of solving problems based on real life scenarios.",
    },
    {
      id: 40,
      title: "Ready, Set, VFX 2.0",
      image: "/Events/ready_set_vfx_2.jpeg",
      date: "13-22 January",
      year: "2023",
      isPast: true,
      description:
        "The event was conducted to bring together creativity and technology to inspire the students to imagine and create the impossible. The agenda was to familiarize the audience with VFX software such as Blender.",
    },
    {
      id: 39,
      title: "CSS Combat",
      image: "/Events/CSSCombat.jpeg",
      date: "4 January",
      year: "2023",
      isPast: true,
      description:
        "CSS Combat was a code-golfing event wherein teams had to recreate the given target using CSS codes only, in a stipulated time period. It was the perfect opportunity for participants to brush up their CSS skills!",
    },
    {
      id: 38,
      title: "Social Connect",
      image: "/Events/Social_Connect.png",
      date: "6 December",
      year: "2022",
      isPast: true,
      description:
        "A total of 2 professors & 3 club members volunteered for the drive, where they met the students at the school & enbibed a sense of learning in them, by means of demonstrations, explanations, games, and lots of fun-filled activities.",
    },
    {
      id: 37,
      title: "Tech Summit",
      image: "/Events/TechSummit.jpeg",
      date: "9 October",
      year: "2022",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 7th to 9th October 22. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. A venerable panel of tech stalwarts like Mr. Arsh Goyal, Mr. Nivedan Rathi, Mr. Vinod Kumar and Ms. Priyanka Kasture spoke about their journey in tech, their upcoming ventures, their past work and experiences in tech and their bullish views on the future of tech. The audience had an incredible time interacting with the panelists and gained insights on a wide-range of tech-related topics!",
    },
    {
      id: 36,
      title: "Network with WIE",
      image: "/Events/NetworkingNight.png",
      date: "8 October",
      year: "2022",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 7th to 9th October 22. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. This all-nighter event was the perfect opportunity for the female developer community at MUJ to interact with each other, get valuable insights on internships by seniors and break the ice with fellow batchmates!",
    },
    {
      id: 35,
      title: "Tech Talk",
      image: "/Events/TechTalk.jpeg",
      date: "9 October",
      year: "2022",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 7th to 9th October 22. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. An offline event, the speaker gave the audience a glimpse into Data Science and its various algorithms and applications.",
    },
    {
      id: 34,
      title: "Error Terror",
      image: "/Events/ErrorTerror.png",
      date: "9 October",
      year: "2022",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 7th to 9th October 22. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. An online event, the contestants got a chance to exercise their coding skills and debug the given snippets of code based on the desired outputs. The participants also had to fill in missing pieces of code to emerge as the final winners!",
    },
    {
      id: 33,
      title: "Code It On",
      image: "/Events/CodeItOn.png",
      date: "7 October",
      year: "2022",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 7th to 9th October 22. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. An overnight coding sprint to put the participants’ programming knowledge at test, the event accosted the coders with multiple problem statements of varying difficulty. They had to run the provided test cases against their codes. The event offered interactive sessions with mentors and tons of knowledge to take away!",
    },
    {
      id: 32,
      title: "Breacout 3.0",
      image: "/Events/Breacout.png",
      date: "8 October",
      year: "2022",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 7th to 9th October 22. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. The first offline segment of Breacout, teams got to brainstorm to hunt F.R.I.E.N.D.S + Brooklyn Nine-Nine using a series of clues. The treasure hunt was conducted in two rounds, the first being a quiz based on the selected show and the second being the ultimate hunt spanning the entire MUJ campus!",
    },
    {
      id: 31,
      title: "Blogverse",
      image: "/Events/BlogVerse.png",
      date: "8 October",
      year: "2022",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 7th to 9th October 22. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. A battle of the minds and pens, teams worked against the clock to thoroughly research their topics, devise a technical paper and write the ultimate blog! Selected teams also got a chance to create technical presentations and winners received internship opportunities from GeeksforGeeks and Content-Whale!",
    },
    {
      id: 30,
      title: "Clone the App",
      image: "/Events/CloneTheApp.png",
      date: "7 October",
      year: "2022",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 7th to 9th October 22. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. Ever wondered what goes behind making your favorite daily go-to apps? Clone-the-app sought to provide a similar experience to the participants. The teams were given applications which had to be cloned with maximum functionalities and top-notch UIs. They were allowed to use their preferred tech stacks to build the apps and establish victory!",
    },
    {
      id: 29,
      title: "Ballistic 2.0",
      image: "/Events/Ballistic2.png",
      date: "7-8 October",
      year: "2022",
      isPast: true,
      description:
        "IEEE MUJ conducted its flagship techfest from 7th to 9th October 22. All three societies came together to organize a plethora of tech and semi-tech events, challenging the participants’ wits and problem-solving abilities. A two-day gaming competition to test the gaming prowess, the event had participants face-off each other in two games- Fifa’21 and Mortal Kombat. The winning teams took away exciting goodies and cash prizes!",
    },
    {
      id: 28,
      title: "Intro to Git, GitHub and Open-Source",
      image: "/Events/git.jpeg",
      date: "27 September",
      year: "2022",
      isPast: true,
      description:
        "Ms. Khushi Trivedi- an MSLA from LNCTS Bhopal, prepared the audience for Hacktoberfest by explaining them various Git commands, and the difference between Git and GitHub. She also spoke about open-source and its power, and demonstrated the various concepts using a sample repository so as to give the audience a hands-on experience.",
    },
    {
      id: 27,
      title: "Roadmap to DSA",
      image: "/Events/dsa.jpeg",
      date: "3 September",
      year: "2022",
      isPast: true,
      description:
        "The keynote speaker was Mr. Varun Kohli, the CEO of Coding Blocks. The event was an Introduction to DSA and its importance in the life of a software engineer. A roadmap was given to the audience to improve their DSA skills. A small trivia was also conducted wherein the top 10 winners won goodies from Coding Blocks.",
    },
    {
      id: 26,
      title: "Power Hour 1.0: Mrs. Deepa Sayal",
      image: "/Events/power_hour_1.jpeg",
      date: "12 August",
      year: "2022",
      isPast: true,
      description:
        "This event was a Q&A session with Mrs. Deepa Sayal- founder of TechSuperGirl and IWiLIndia. Mrs. Sayal narrated her journey and challenges as an entrepreneurs and encouraged open conversations. The attendees enjoyed this insightful session.",
    },
    {
      id: 25,
      title: "Fundamentals of Kotlin and Android Components",
      image: "/Events/kotlin.jpeg",
      date: "6 August",
      year: "2022",
      isPast: true,
      description:
        "The speaker Mr. Sagar Patel gave a hands-on experience to the audience in Android Development. He walked the audience through the Kotlin Syntax and Android components such as Views, Fragments and Activities.",
    },
    {
      id: 24,
      title: "Quizscape",
      image: "/Events/quizscape.png",
      date: "11 July",
      year: "2022",
      isPast: true,
      description:
        "This event was a three-level sci-tech based puzzle. The first round involved image based identification questions. The second round was a rebus round where participants had to decipher a word based on the clue given in the image. The finale round was a 24-clue based crossword conducted online.",
    },
    {
      id: 23,
      title: "The Road from Bachelors to Masters",
      image: "/Events/masters.png",
      date: "23 June",
      year: "2022",
      isPast: true,
      description:
        "The panel gave tips to the audience members on a plethora of topics relating to masters programs in CS. Some of the topics that the speakers shed light on were- shortlisting universities to apply to, planning finances, getting Letters of Recommendations (LORs), building a strong portfolio and writing a convincing Statement of Purpose (SOP). The audience keenly interacted with the speakers and raised various interesting queries.",
    },
    {
      id: 22,
      title: "HerStory: Ms. Eshita Kapoor",
      image: "/Events/wit_eshita.jpg",
      date: "26 June",
      year: "2021",
      isPast: true,
      description:
        "The speaker inspired MUJ's aspiring students and gave them indispensable advice on handling challenges and break barriers as women in tech.",
    },
    {
      id: 21,
      title: "HerStory: Ms. Anagha Sivadas",
      image: "/Events/wit_anagha.jpg",
      date: "10 July",
      year: "2021",
      isPast: true,
      description:
        "The speaker inspired MUJ's aspiring students and gave them indispensable advice on handling challenges and break barriers as women in tech.",
    },
    {
      id: 20,
      title: "HerStory: Ms. Ananya Smirti",
      image: "/Events/wit_ananya.jpg",
      date: "29 August",
      year: "2021",
      isPast: true,
      description:
        "The speaker inspired MUJ's aspiring students and gave them indispensable advice on handling challenges and break barriers as women in tech.",
    },
    {
      id: 19,
      title: "HerStory: Ms. Nitya Jagadam",
      image: "/Events/wit_nitya.jpg",
      date: "23 January",
      year: "2022",
      isPast: true,
      description:
        "The speaker inspired MUJ's aspiring students and gave them indispensable advice on handling challenges and break barriers as women in tech.",
    },
    {
      id: 18,
      title: "Breacout",
      image: "/Events/breacout.jpg",
      date: "21 August",
      year: "2021",
      isPast: true,
      description:
        "This one-of-a-kind event was conducted by IEEE WIE MUJ to give the students a chance at practicing coding while playing. The participants were to use their wits and coding skills to cross each level and proceed further on the scoreboard. As the participant progressed through each floor, the difficulty as well as thrill increased. If the participants were unable to finish a particular floor in the given time they were eliminated.",
    },
    {
      id: 17,
      title: "Learn <Open Source>",
      image: "/Events/open_source.jpg",
      date: "19 September",
      year: "2021",
      isPast: true,
      description:
        "This webinar was focused on the essentials of Open Source. It also covered topics like Gsoc and MLH. The guest speaker was Mr Harsh Bardhan Mishra.",
    },
    {
      id: 16,
      title: "Ready, Set, VFX",
      image: "/Events/ready_set_vfx.jpg",
      date: "25 September",
      year: "2021",
      isPast: true,
      description:
        "The event was an educational workshop regarding the field of VFX in collaboration with IEEE WIE. The event educated the participants about 3D art, software to use, mistakes to avoid and tips and tricks to improve one's 3D art. The workshop was led by Harsh Maheshwari.",
    },
    {
      id: 15,
      title: "Financial Planning for Young Professionals",
      image: "/Events/financial_planning.jpg",
      date: "28 May",
      year: "2021",
      isPast: true,
      description:
        "The event was organised by IEEE WIE MUJ in collaboration with Hermoneytalks to teach students about financial planning and money saving techniques.",
    },
    {
      id: 14,
      title: "Basics of Java",
      image: "/Events/java_oops.jpg",
      date: "22 May",
      year: "2021",
      isPast: true,
      description:
        "The workshop was conducted by Shubham Rawat, an ex-mentor at Coding Blocks and Google Code-In. After discussing the basic syntax of the Java programming language, and variables and data types, the mentor proceeded to touch some more advanced topics such as Collections, ArrayList and Vectors. The workshop was a successful one with over 75 attendees, who were given a chance to start Java from scratch and build a strong foundation.",
    },
    {
      id: 13,
      title: "Roadmap to Competitive Programming",
      image: "/Events/competitive_programming.jpeg",
      date: "24 January",
      year: "2021",
      isPast: true,
      description:
        "IEEE WIE MUJ, in collaboration with GirlScript Jaipur conducted a webinar on “Roadmap to Competitive Programming” on 24th January 2021. Kashish Gupta, an Incoming Summer Analyst at Goldman Sachs, and 4-star coder on CodeChef shared her journey of competitive programming, and some useful tips on cracking interviews and participating in online challenges.",
    },
    {
      id: 12,
      title: "D2: DESIGN DISRUPT",
      image: "/Events/d2d.jpg",
      date: "14-16 July",
      year: "2021",
      isPast: true,
      description:
        "The speaker was Ms. Khyati Sehkar, a digital artist and designer, currently pursuing her graduation from NIFT. The participants worked on the given problem statement over the span of 24 hours to complete for the top positions in the competition.",
    },
    {
      id: 11,
      title: "Road to Sucess: From MUJ to Walmart",
      image: "/Events/road_to_success.jpg",
      date: "7 August",
      year: "2021",
      isPast: true,
      description:
        "The speaker of the session was Ms. Nikita Sarkar who is an alumnus of Manipal University Jaipur. She got placed in the world recognized company-Walmart as a technical project manager. She explained and recounted her UX design journey to the audience who appreciated the knowledge she imparted.",
    },
    {
      id: 10,
      title: "Data Science: Face Detection",
      image: "/Events/data science workshop.jpeg",
      date: "19 August",
      year: "2021",
      isPast: true,
      description:
        "The workshop started off with introduction to basics of Python and its application in Data Science and Machine Learning. It proceeded with explanation of advanced python libraries like NumPy and Matplotlib, after which a model for Face Detection was rendered and tested.",
    },
    {
      id: 9,
      title: "Digital Marketing",
      image: "/Events/Digital Marketing.jpeg",
      date: "26 August",
      year: "2021",
      isPast: true,
      description:
        "In the webinar our mentor covered the topics like introduction to SEO and Content Marketing in the digital world, how to drive leads and maximize revenues, the DOs and DON’Ts about Online-businesses and how to use Social Media at your disposal. His knowledge on current digital marketing scenarios taught a lot to the attendees and there were a lot of interesting questions by the viewers.",
    },
    {
      id: 8,
      title: "Financial Stability",
      image: "/Events/Financial Stability.JPG",
      date: "17 October",
      year: "2020",
      isPast: true,
      description:
        "The workshop began with a discussion on how COVID-19 has affected our lives, and the Indian Economy. It proceeded with a detailed discussion on what finance really means, and how and where to wisely invest with due respect to current economic conditions. This was followed by a Q&A, where students clarified their doubts. The mentor was brilliant in the subject and in answering all the doubts, and also educated the students briefly about investments in gold, stock market and real estate.",
    },
    {
      id: 7,
      title: "Interactive Session and Q&A",
      image: "/Events/Interactive session.jpg",
      date: "5 September",
      year: "2020",
      isPast: true,
      description:
        "In the webinar our mentor covered the topics like admission criteria, application process abroad, Profile building and also roadmap about pursuing bachelors abroad. Our mentor also briefed us about how aptitudes set forward an individual regardless of scores through examples from her own life.",
    },
    {
      id: 6,

      title: "LEAD'HER'SHIP",
      image: "/Events/Leadhership.jpeg",
      date: "7 March",
      year: "2021",
      isPast: true,
      description:
        "In this webinar Ms. Vaishali Wagle shares her personal experiences and battles and all the handwork it takes to reach here. She told her greatest fears and how she manages it.",
    },
    {
      id: 5,
      title: "40 Hours of Web Dev",
      image: "/Events/progate.jpeg",
      date: "30 October",
      year: "2020",
      isPast: true,
      description:
        "IEEE Women in Engineering Society of Manipal University Jaipur in collaboration with Progate organised a Progate’s 40 hours of HTML/CSS from 31st October to 1st November. The event aims to help our participants begin their web development journey. The participants were asked to complete the study1 of HTML/CSS to receive access for further study.",
    },
    {
      id: 4,
      title: "Writer's Unblock",
      image: "/Events/Writing Event.jpg",
      date: "1-10 September",
      year: "2020",
      isPast: true,
      description:
        "As a part of our Contest, we asked students to write an article on any one of the topics with a minimum word limit of",
    },
    {
      id: 3,
      title: "Machine Learning",
      image: "/Events/MachineLearning.JPG",
      date: "7 August",
      year: "2020",
      isPast: true,
      description:
        "IEEE WIE MUJ collaborated with Coding Ninjas to host an online webinar on the topic - Machine Learning on 7th August from 8 to 9pm. The interview was hosted by Ankur Goyel. The webinar started off by them talking about their journey as data scientists, and elaborating on the vastness of the field. They educated the students about some interesting aspects of AI and ML along with its applications. This was followed by an interactive session with the participants, where all their queries were clarified.",
    },
    {
      id: 2,
      title: "Cryptocurrency and Blockchain",
      image: "/Events/Cryptocurrency.JPG",
      date: "12 September",
      year: "2020",
      isPast: true,
      description:
        "In the webinar our mentor covered the topics like Cryptocurrency and the role of Blockchain. His passion and grasp in the field of cryptocurrency and blockchain filled the attendees with a new zest toward the topic and a lot of insightful questions were put up.",
    },
    {
      id: 1,
      title: "ROBOTECHS",
      image: "/Events/Robotech.JPG",
      date: "31 August",
      year: "2020",
      isPast: true,
      description:
        "In the webinar our mentor covered the topics like introduction to Robotics and its use in reality and in virtual medium, especially during the COVID-19 pandemic. This interactive webinar combined interesting talks on Robotics, Technical Input and Practical, Hands on Experience. The participants were also taught about Robotic Process Automation- how it is a technology to execute a business by integrating human actions into a robot. It also comprised the basics of using Virtual Robotics Toolkit.",
    },
  ];

  const [flippedCards, setFlippedCards] = useState({});
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchYear, setSearchYear] = useState("");
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const handleCardFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const pastYears = [
    ...new Set(
      allEvents.filter((event) => event.isPast).map((event) => event.year)
    ),
  ].sort((a, b) => b - a);

  const getFilteredEvents = () => {
    if (activeTab === "upcoming") {
      return allEvents.filter((event) => !event.isPast);
    } else {
      const pastEvents = allEvents.filter((event) => event.isPast);
      if (searchYear) {
        return pastEvents.filter((event) => event.year === searchYear);
      }
      return pastEvents;
    }
  };

  const filteredEvents = getFilteredEvents();

  const EventCard = ({ event }) => (
    <div
      key={event.id}
      className="perspective-container cursor-pointer w-full max-w-[250px]"
      onClick={() => handleCardFlip(event.id)}
    >
      <div
        className={`flip-card relative w-full h-[350px] sm:h-[380px] md:h-[400px] ${
          flippedCards[event.id] ? "flipped" : ""
        }`}
      >
        {/* Front side */}
        <div className="flip-card-front absolute inset-0 bg-black/60 rounded-2xl overflow-hidden flex items-center justify-center p-4 pb-20 border border-purple-500/20">
          <img
            src={event.image}
            alt={event.title}
            className="object-cover h-full w-full rounded-2xl"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='400' viewBox='0 0 250 400'%3E%3Crect width='250' height='400' fill='%23374151'/%3E%3Ctext x='125' y='200' text-anchor='middle' fill='%239CA3AF' font-size='16'%3EEvent Image%3C/text%3E%3C/svg%3E";
            }}
          />
          <div className="absolute bottom-0 w-full text-center bg-gradient-to-t from-black via-black/70 to-transparent pt-5 pb-2 text-purple-200">
            <h3 className="font-bold bg-black/70 text-sm md:text-base px-2 py-1 rounded mx-1">
              {event.title}
            </h3>
            <p className="text-xs bg-black/70 px-2 py-1 rounded mt-1 mx-1">
              {event.date}, {event.year}
            </p>
          </div>
        </div>

        {/* Back side */}
        <div className="flip-card-back absolute inset-0 bg-purple-900 rounded-2xl p-4 text-center flex flex-col justify-center border border-purple-500/30">
          <h3 className="font-bold text-base md:text-lg text-purple-200 mb-2">
            {event.title}
          </h3>
          <p className="text-xs md:text-sm text-purple-400 mb-2">
            {event.date}, {event.year}
          </p>
          <p className="text-xs text-purple-300 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="events-section eventss py-20 px-6 md:px-20 bg-gradient-to-b from-purple-900/80 via-black/70 to-purple-900/80">
      <div className="container mx-auto mt-10">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center font-cambo text-purple-200 mb-10 relative">
          <div className="wavy-glow-line"></div>
          Events
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-black/60 rounded-xl p-1 backdrop-blur-sm border border-purple-500/30">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-300 text-sm md:text-base ${
                activeTab === "upcoming"
                  ? "bg-purple-600/80 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  : "text-purple-300 hover:text-purple-200 hover:bg-purple-600/20"
              }`}
            >
              <Calendar className="inline-block w-4 h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Upcoming Events</span>
              <span className="sm:hidden">Upcoming</span>
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-300 text-sm md:text-base ${
                activeTab === "past"
                  ? "bg-purple-600/80 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  : "text-purple-300 hover:text-purple-200 hover:bg-purple-600/20"
              }`}
            >
              <Search className="inline-block w-4 h-4 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Past Events</span>
              <span className="sm:hidden">Past</span>
            </button>
          </div>
        </div>

        {/* Search Filter for Past Events */}
        {activeTab === "past" && (
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8 gap-3">
            <div className="relative">
              <button
                onClick={() => setShowYearDropdown(!showYearDropdown)}
                className="flex items-center space-x-2 bg-black/60 backdrop-blur-sm text-purple-200 px-4 py-2 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-colors hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] min-w-[150px] justify-center"
              >
                <Search className="w-4 h-4" />
                <span className="text-sm md:text-base">
                  {searchYear || "Filter by Year"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showYearDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showYearDropdown && (
                <div className="absolute top-full mt-2 bg-black/80 backdrop-blur-sm rounded-lg border border-purple-500/30 min-w-full z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <button
                    onClick={() => {
                      setSearchYear("");
                      setShowYearDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2 text-purple-200 hover:bg-purple-600/20 transition-colors first:rounded-t-lg text-sm md:text-base"
                  >
                    All Years
                  </button>
                  {pastYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSearchYear(year);
                        setShowYearDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 text-purple-200 hover:bg-purple-600/20 transition-colors last:rounded-b-lg text-sm md:text-base"
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {searchYear && (
              <button
                onClick={() => setSearchYear("")}
                className="px-3 py-2 bg-purple-600/20 text-purple-300 rounded-lg hover:bg-purple-600/30 transition-colors text-sm border border-purple-500/20 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)]"
              >
                Clear Filter
              </button>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-12 justify-items-center">
          {filteredEvents.length > 0 ? (
            activeTab === "upcoming" ? (
              <>
                <div className="col-span-full">
                  <EventBanner event={filteredEvents[0]} />
                </div>

                {filteredEvents.slice(1).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </>
            ) : (
              filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            )
          ) : activeTab === "upcoming" ? (
            <div className="col-span-full text-center text-purple-300 py-12">
              <Calendar className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 opacity-50 animate-bounce" />
              <p className="text-xl md:text-2xl font-semibold">
                Exciting events coming soon!
              </p>
              <p className="text-sm mt-2">
                Stay tuned for our next big thing 🎉
              </p>
            </div>
          ) : (
            <div className="col-span-full text-center text-purple-300 py-12">
              <Calendar className="w-12 md:w-16 h-12 md:h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg md:text-xl">
                No events found for {searchYear}
              </p>
              <p className="text-sm mt-2">
                Try selecting a different year or view all events
              </p>
            </div>
          )}
        </div>

        {/* Event Count */}
        <div className="text-center mt-6 md:mt-8 text-purple-400 text-xs md:text-sm">
          Showing {filteredEvents.length} {activeTab} event
          {filteredEvents.length !== 1 ? "s" : ""}
          {activeTab === "past" && searchYear && ` from ${searchYear}`}
        </div>
      </div>

      <style jsx>{`
        .perspective-1500px {
          perspective: 1500px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .wavy-glow-line {
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #a855f7, transparent);
          border-radius: 2px;
          animation: glow-pulse 2s ease-in-out infinite alternate;
        }
        @keyframes glow-pulse {
          0% {
            box-shadow: 0 0 5px #a855f7, 0 0 10px #a855f7, 0 0 15px #a855f7;
          }
          100% {
            box-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7;
          }
        }
        @media (max-width: 768px) {
          .wavy-glow-line {
            width: 80px;
            height: 2px;
          }
        }

        /* Ensure CSS 3D transforms work properly */
        .perspective-container {
          perspective: 1500px;
          perspective-origin: center center;
        }

        .flip-card {
          transform-style: preserve-3d;
          transition: transform 0.7s ease-in-out;
        }

        .flip-card.flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          -ms-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* Hover effects */
        .flip-card:hover {
          transform: scale(1.025);
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.6);
        }

        .flip-card.flipped:hover {
          transform: rotateY(180deg) scale(1.025);
        }
      `}</style>
    </section>
  );
}

export default Events;
