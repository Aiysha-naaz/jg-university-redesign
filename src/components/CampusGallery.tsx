"use client";
import { motion } from 'framer-motion';

const images = [
  {
    src: "https://jguni.in/images/CRM0SCENE.webp",
    title: "IIoT Excellence Center",
    category: "Infrastructure",
    className: "md:col-span-2 md:row-span-2", // Large feature card
  },
  {
    src: "https://jguni.in/images/campus/7.jpg",
    title: "Digital Library",
    category: "Education",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://jguni.in/images/campus/5.jpg",
    title: "Incubation Hub",
    category: "Innovation",
    className: "md:col-span-1 md:row-span-2", // Vertical card
  },
  {
    src: "https://content.jdmagicbox.com/comp/def_content/colleges/default-colleges-0-250.jpg",
    title: "Green Campus",
    category: "Connectivity",
    className: "md:col-span-1 md:row-span-1",
  },
];

const CampusGallery = () => {
  return (
    <section id="campus" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] mb-3">Visual Tour</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">Experience Our Campus</h3>
          </div>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed">
            A glimpse into the state-of-the-art facilities designed to foster innovation, 
            research, and collaborative learning.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-none md:grid-rows-3 gap-4 h-auto md:h-[600px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group ${img.className}`}
            >
              {/* Image Overlay (Darkens on hover) */}
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-500 z-10" />
              
              <img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{img.category}</span>
                <h4 className="text-xl font-bold text-white">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusGallery;