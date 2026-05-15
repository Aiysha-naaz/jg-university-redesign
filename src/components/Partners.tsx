"use client";
import { motion } from 'framer-motion';

const partners = [
  { name: "Coding Pro", logo: "/partners/coding.png" },
  { name: "IBM", logo: "/partners/ibm.png" },
  { name: "Isro", logo: "/partners/isro.png" },
  { name: "SAC", logo: "/partners/sac.png" },
  { name: "Yudiz", logo: "/partners/yudiz.png" },
  { name: "Dev", logo: "/partners/dev.png" }
];

const Partners = () => {
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
          >
            Our Industry Network
          </motion.h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Fades for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Increased container height from h-24 to h-40 */}
          <div className="flex items-center overflow-hidden h-40">
            <motion.div
              className="flex whitespace-nowrap items-center"
              animate={{ x: ["0%", "-33.33%"] }}
              transition={{
                duration: 20, // Faster duration for a more energetic feel
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {duplicatedPartners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex flex-shrink-0 items-center justify-center px-12 md:px-20 group"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    /* 
                       Increased h-12 to h-16 (and md:h-20) 
                       Added drop-shadow to make them feel more "on page"
                    */
                    className="h-16 md:h-20 w-auto max-w-[220px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-sm"
                    onError={(e) => {
                       e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;