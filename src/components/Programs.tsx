// "use client";
// import { motion } from 'framer-motion';
// import { Monitor, Cpu, Briefcase, Scale, FlaskConical, Plane } from 'lucide-react';

// const programCategories = [
//   {
//     title: "School of Computing",
//     icon: <Monitor className="w-6 h-6" />,
//     courses: ["BCA (Hons)", "MCA - AI & Full Stack", "iMSc (IT)"],
//     color: "bg-blue-50 text-blue-600",
//     size: "md:col-span-2" 
//   },
//   {
//     title: "School of Engineering",
//     icon: <Cpu className="w-6 h-6" />,
//     courses: ["B.Tech CSE (AI & ML)", "B.Tech Data Science"],
//     color: "bg-purple-50 text-purple-600",
//     size: "md:col-span-1"
//   },
//   {
//     title: "School of Management",
//     icon: <Briefcase className="w-6 h-6" />,
//     courses: ["iMBA", "BBA (Hons)", "MBA - International Trade"],
//     color: "bg-amber-50 text-amber-600",
//     size: "md:col-span-1"
//   },
//   {
//     title: "Applied Sciences",
//     icon: <FlaskConical className="w-6 h-6" />,
//     courses: ["Forensic Science", "Cyber Security", "Clinical Embryology"],
//     color: "bg-emerald-50 text-emerald-600",
//     size: "md:col-span-2"
//   },
//   {
//     title: "Aviation & Law",
//     icon: <Plane className="w-6 h-6" />,
//     courses: ["Aviation Management", "LL.B.", "LL.M."],
//     color: "bg-rose-50 text-rose-600",
//     size: "md:col-span-3"
//   }
// ];

// const Programs = () => {
//   return (
//     <section id="programs" className="py-24 bg-[#fafafa]">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
//         <div className="text-center mb-16">
//           <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Programmes</h2>
//           <h3 className="text-4xl font-bold text-slate-900">Future-Ready Education</h3>
//           <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
//             Choose from a wide range of UGC-approved programs designed to evolve 
//             with industry demands.
//           </p>
//         </div>

//         {/* Bento Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {programCategories.map((cat, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className={`p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-indigo-100 transition-all group ${cat.size}`}
//             >
//               <div className={`w-12 h-12 rounded-2xl ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
//                 {cat.icon}
//               </div>
//               <h4 className="text-xl font-bold text-slate-900 mb-4">{cat.title}</h4>
//               <ul className="space-y-2">
//                 {cat.courses.map((course, i) => (
//                   <li key={i} className="text-slate-500 text-sm flex items-center">
//                     <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-2" />
//                     {course}
//                   </li>
//                 ))}
//               </ul>
//               <button className="mt-8 text-sm font-bold text-indigo-600 group-hover:underline">
//                 View all programmes →
//               </button>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Programs;



"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const programCategories = [
  {
    title: "School of Computing",
    desc: "AI, Machine Learning & Full Stack",
    image: "/programs/computing.avif",
    courses: ["BCA (Hons)", "MCA - AI & Full Stack", "iMSc (IT)", "Quantum Computing"],
    size: "md:col-span-2 md:row-span-1" 
  },
  {
    title: "School of Engineering",
    desc: "Tech-driven B.Tech Programs",
    image: "/programs/engineering.avif",
    courses: ["B.Tech CSE (AI & ML)", "Data Science", "Information Technology"],
    size: "md:col-span-1 md:row-span-2"
  },
 {
    title: "Management & Commerce",
    desc: "International Trade & Finance",
    // Image of the campus entrance/business wing
    image: "/programs/commerce.jpg",
    courses: ["iMBA", "B.Com (Hons) with ACCA", "International Trade"],
    size: "md:col-span-1 md:row-span-1"
  },
  {
    title: "Applied Sciences",
    desc: "Forensics & Clinical Embryology",
    // Image showing the academic infrastructure
    image: "/programs/science.jpg",
    courses: ["Forensic Science", "Cyber Security", "Clinical Embryology"],
    size: "md:col-span-2 md:row-span-1"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-xs mb-3">Academic Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Our Programmes</h3>
          </div>
          <p className="text-slate-500 max-w-md text-sm leading-relaxed">
            From Undergraduate to Doctoral studies, explore curriculum designed 
            by industry experts to bridge the gap between education and employment.
          </p>
        </div>

        {/* The Visual Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {programCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-[2.5rem] group border border-slate-100 ${cat.size}`}
            >
              {/* Background Image */}
              <img 
                src={cat.image} 
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="flex justify-between items-start mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 mb-1 block">
                      {cat.desc}
                    </span>
                    <h4 className="text-2xl font-bold">{cat.title}</h4>
                  </div>
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* List of courses - only shows/animates on hover for desktop */}
                <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                   <div className="pt-4 border-t border-white/20 flex flex-wrap gap-2">
                      {cat.courses.map((course, i) => (
                        <span key={i} className="text-[11px] px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md">
                          {course}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Courses Strip */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500 flex items-center justify-center font-bold">New</div>
                <div>
                    <h5 className="text-lg font-bold">Professional Certificate Courses</h5>
                    <p className="text-slate-400 text-sm">Metaverse, Blockchain, Azure DevOps, and more.</p>
                </div>
            </div>
            <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors">
                Explore Certifications
            </button>
        </div>

      </div>
    </section>
  );
};

export default Programs;