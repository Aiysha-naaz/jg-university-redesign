// "use client";
// import { motion } from 'framer-motion';
// import { Quote } from 'lucide-react';

// const testimonials = [
//   {
//     name: "Sumit Khurana",
//     role: "General Manager, Ahmedabad Mirror",
//     text: "The comprehensive academic program and exceptional faculty provided me with a solid grounding in my chosen field.",
//     tag: "B.Com Alumnus"
//   },
//   {
//     name: "Jigardan Gadhvi",
//     role: "Celebrity Singer",
//     text: "The faculty members were more than just teachers; they served as mentors who supported us at every step.",
//     tag: "Celebrity Alumnus"
//   },
//   {
//     name: "Yatendra Sinh Joddha",
//     role: "Technical Lead, TCS",
//     text: "The BCA program provided me with a strong foundation in IT, and the focus on training gave me real-world opportunities.",
//     tag: "BCA Alumnus"
//   }
// ];

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="py-24 bg-[#fafafa]">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
//         <div className="text-center mb-16">
//           <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Success Stories</h2>
//           <h3 className="text-4xl font-bold text-slate-900">Hear From Our Alumni</h3>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((t, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
//             >
//               <Quote className="text-indigo-100 w-12 h-12 absolute top-6 right-8 group-hover:text-indigo-200 transition-colors" />
              
//               <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase mb-4">
//                 {t.tag}
//               </span>
              
//               <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed">
//                 "{t.text}"
//               </p>
              
//               <div>
//                 <h4 className="font-bold text-slate-900">{t.name}</h4>
//                 <p className="text-sm text-slate-500">{t.role}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
        
//         <div className="mt-16 text-center">
//           <p className="text-slate-500 text-sm">Join 10,000+ successful graduates worldwide.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;




"use client";
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sumit Khurana",
    role: "General Manager, Ahmedabad Mirror",
    image: "https://jguni.in/images/alumni/sumit-khurana.jpg", // Using university path pattern
    text: "The comprehensive academic program and exceptional faculty provided me with a solid grounding in my chosen field.",
    tag: "B.Com Alumnus"
  },
  {
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer",
    image: "https://jguni.in/images/alumni/jigardan-gadhvi.jpg",
    text: "The faculty members were more than just teachers; they served as mentors who supported us at every step.",
    tag: "Celebrity Alumnus"
  },
  {
    name: "Yatendra Sinh Joddha",
    role: "Technical Lead, TCS",
    image: "https://jguni.in/images/alumni/yatendra-sinh.jpg",
    text: "The BCA program provided me with a strong foundation in IT, and the focus on training gave me real-world opportunities.",
    tag: "BCA Alumnus"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-[10px] mb-3 block">Success Stories</h2>
          <h3 className="text-4xl font-black text-slate-900 tracking-tight">Hear From Our Alumni</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 group"
            >
              <Quote className="text-indigo-50 w-10 h-10 absolute top-8 right-8 group-hover:text-indigo-100 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                {/* Profile Image with Ring Effect */}
                <div className="relative">
                  <div className="absolute inset-0 bg-indigo-200 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={t.image} 
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${t.name}&background=6366f1&color=fff`;
                    }}
                  />
                </div>
                <div>
                  <span className="inline-block px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-600 text-[9px] font-bold uppercase mb-1">
                    {t.tag}
                  </span>
                  <h4 className="font-bold text-slate-900 text-base">{t.name}</h4>
                </div>
              </div>
              
              <p className="text-slate-500 italic text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                {t.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;