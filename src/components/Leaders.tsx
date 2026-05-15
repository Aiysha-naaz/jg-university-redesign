"use client";
import { motion } from 'framer-motion';

const leaders = [
  {
    name: "M.P Chandran",
    role: "President, JG University",
    image: "https://jguni.in/images/m-p-chandran.jpg",
    bio: "A postgraduate in management with 30+ years of experience in senior board-level positions. He chairs the Education Task Force at GCCI and leads the ASIA Charitable Trust, overseeing 17 colleges and JG University."
  },
  {
    name: "Dr. CA Achyut Dani",
    role: "Director-General and Provost",
    image: "https://jguni.in/images/achyut-dani.jpg",
    bio: "A doctorate in management and commerce with 21+ years of expertise. He is a recipient of the Bharat Jyoti Award and serves on the Governing Council of the Asian-African Chambers of Commerce & Industry."
  }
];

const Leaders = () => {
  return (
    <section id="leaders" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] mb-3 block">University Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Our Visionary Leaders</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {leaders.map((leader, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100"
            >
              <div className="w-full md:w-48 h-60 shrink-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"; }}
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-slate-900 mb-1">{leader.name}</h4>
                <p className="text-indigo-600 font-bold text-sm mb-4 uppercase tracking-wide">{leader.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leaders;