import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const imageData = [{
  src: `/Gallery/img1.jpg`,
  title: `Executive Committee -2`,
  description: `ECs 24-25`,
}, {
  src: `/Gallery/img2.jpg`,
  title: `Elysium`,
  description: `Team Elysium`,
}, {
  src: `/Gallery/img3.jpg`,
  title: `Pyaare JCs`,
  description: `JCs 24-25`,
}, {
  src: `/Gallery/img4.jpg`,
  title: `Elyisium in the Hostel`,
  description: `Elysium 4 the win`,
}, {
  src: `/Gallery/img5.jpg`,
  title: `EC reel shoot`,
  description: `The team for EC reel 24-25`,
}, {
  src: `/Gallery/img6.jpg`,
  title: `CCs in HardWired`,
  description: `CCs on Top`,
}, {
  src: `/Gallery/img7.jpg`,
  title: `Gyaan`,
  description: `Shashwat bhaiya giving Gyaan`,
}, {
  src: `/Gallery/img8.jpg`,
  title: `ATL Lab`,
  description: `JC masti in ATL Lab`,
}, {
  src: `/Gallery/img9.jpg`,
  title: `Shopping Cart`,
  description: `Srishti in a cart`,
}, {
  src: `/Gallery/img11.jpg`,
  title: `DataPulse pitching`,
  description: `Serious stuff`,
}, {
  src: `/Gallery/img10.jpg`,
  title: `Bhai Log`,
  description: `Muscles and Masti`,
}, {
  src: `/Gallery/img12.jpg`,
  title: `Jcs in Audi`,
  description: `Fun in silence`,
},
 {
  src: `/Gallery/img13.jpg`,
  title: `Bullying Ishani`,
  description: `Haww Kashish`,
}, {
  src: `/Gallery/img14.jpg`,
  title: `CnC Team`,
  description: `Corp and Cur`,
},{
  src: `/Gallery/img15.jpg`,
  title: `Genesis`,
  description: `CC Summit Times`,
},{
  src: `/Gallery/img16.jpg`,
  title: `Shridhar sir`,
  description: `I LOVE MANIPAL`,
},{
  src: `/Gallery/img17.jpg`,
  title: `DataPulse Judging`,
  description: `Elysium Day 2`,
},{
  src: `/Gallery/img18.jpg`,
  title: `Hardwired`,
  description: `Elysium Day 2`,
},{
  src: `/Gallery/img19.jpg`,
  title: `NextTech`,
  description: `Elysium Day 1`,
},{
  src: `/Gallery/img20.jpg`,
  title: `Tech Eden`,
  description: `Speakers at Tech Eden`,
},{
  src: `/Gallery/img21.jpg`,
  title: `Group photo`,
  description: `Elysium Day 2`,
},{
  src: `/Gallery/img22.jpg`,
  title: `Elysium`,
  description: `ATL Lab`,
},{
  src: `/Gallery/img23.jpg`,
  title: `Reeti Riwaaz`,
  description: `Group photo`,
},{
  src: `/Gallery/img24.jpg`,
  title: `Reeti Riwaaz`,
  description: `JCs in Reeti Riwaaz`,
},{
  src: `/Gallery/img25.jpg`,
  title: `Reeti Riwaaz`,
  description: `Dashing Team JC`,
},
  ]

function Gallery() {
  const [selected, setSelected] = useState(null)

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.02, duration: 0.5 },
    }),
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-purple-950 text-white py-24 px-4 sm:px-6 lg:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl py-12 font-bold text-center text-purple-100 font-cambo"
      >
        Our Gallery
      </motion.h2>

      {/* Masonry Columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {imageData.map((img, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl break-inside-avoid group transition duration-300 cursor-pointer"
            onClick={() => setSelected(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              loading="lazy"
              className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
              style={{ height: `${200 + (i % 3) * 60}px` }}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-purple-900 rounded-2xl p-6 w-full sm:max-w-md md:max-w-xl lg:max-w-3xl text-white relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.title}
                className="w-full rounded-xl mb-4 max-h-[80vh] object-contain"
              />
              <h3 className="text-lg sm:text-xl font-bold mb-2">{selected.title}</h3>
              <p className="text-purple-100 text-sm">{selected.description}</p>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-white text-2xl hover:text-purple-400"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
