// "use client";
// import { motion } from 'framer-motion';
// import { Lightbulb, Rocket, Users, Target, BookOpen, Globe } from 'lucide-react';

// const strengths = [
//   {
//     title: "Interdisciplinary Approach",
//     desc: "Connect, ideate, and solve problems across different conceptual structures.",
//     icon: <Users className="w-6 h-6" />,
//   },
//   {
//     title: "Experiential Learning",
//     desc: "Hands-on expertise through exposure to real-life projects and industry use-cases.",
//     icon: <Rocket className="w-6 h-6" />,
//   },
//   {
//     title: "Whole Brain Pedagogy",
//     desc: "Empowering learners with future-proof skills and creative thinking.",
//     icon: <Lightbulb className="w-6 h-6" />,
//   },
//   {
//     title: "Industry Faculty",
//     desc: "Instruction by brilliant scholars with vast academic and real-world experience.",
//     icon: <BookOpen className="w-6 h-6" />,
//   },
//   {
//     title: "Global Collaboration",
//     desc: "Partnerships with foreign universities for student exchange and curriculum.",
//     icon: <Globe className="w-6 h-6" />,
//   },
//   {
//     title: "NEP 2020 Compliant",
//     desc: "UGC approved programmes fully aligned with the National Education Policy.",
//     icon: <Target className="w-6 h-6" />,
//   }
// ];

// const Strengths = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//           <div className="max-w-2xl">
//             <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3">Our Strengths</h2>
//             <h3 className="text-4xl font-bold text-slate-900 leading-tight">
//               A New Age Tech-Driven <br /> Learning Experience
//             </h3>
//           </div>
//           <p className="text-slate-500 max-w-sm">
//             Sponsored by the ASIA Charitable Trust since 1965, combining legacy with future-ready innovation.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {strengths.map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50 transition-all group"
//             >
//               <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
//                 {item.icon}
//               </div>
//               <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
//               <p className="text-slate-600 leading-relaxed text-sm">
//                 {item.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Strengths;




"use client";
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Users, Target, BookOpen, Globe } from 'lucide-react';

const strengths = [
  {
    title: "Interdisciplinary Approach",
    desc: "Connect, ideate, and solve problems across different conceptual structures.",
    icon: <Users className="w-5 h-5" />,
    number: "01"
  },
  {
    title: "Experiential Learning",
    desc: "Hands-on expertise through exposure to real-life projects and industry use-cases.",
    icon: <Rocket className="w-5 h-5" />,
    number: "02"
  },
  {
    title: "Whole Brain Pedagogy",
    desc: "Empowering learners with future-proof skills and creative thinking.",
    icon: <Lightbulb className="w-5 h-5" />,
    number: "03"
  },
  {
    title: "Industry Faculty",
    desc: "Instruction by brilliant scholars with vast academic and real-world experience.",
    icon: <BookOpen className="w-5 h-5" />,
    number: "04"
  },
  {
    title: "Global Collaboration",
    desc: "Partnerships with foreign universities for student exchange and curriculum.",
    icon: <Globe className="w-5 h-5" />,
    number: "05"
  },
  {
    title: "NEP 2020 Compliant",
    desc: "UGC approved programmes fully aligned with the National Education Policy.",
    icon: <Target className="w-5 h-5" />,
    number: "06"
  }
];

const Strengths = () => {
  return (
    <section id="strengths" className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-baseline justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block"
            >
              The JG Advantage
            </motion.span>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              A New Age <span className="text-slate-400 font-medium italic">Tech-Driven</span> <br /> Learning Experience
            </h3>
          </div>
          <div className="lg:max-w-xs pt-4 border-t-2 border-indigo-600">
             <p className="text-slate-500 text-sm leading-relaxed">
               Sponsored by the ASIA Charitable Trust since 1965, blending a legacy of excellence with 21st-century innovation.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-slate-100">
          {strengths.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative p-10 border-r border-b border-slate-100 hover:bg-slate-50/50 transition-colors duration-500"
            >
              {/* Corner Accent for Hover */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-transparent border-r-[30px] border-r-transparent group-hover:border-t-indigo-600/10 group-hover:border-r-indigo-600/10 transition-all duration-500" />
              
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {item.icon}
                </div>
                <span className="text-4xl font-black text-slate-100 group-hover:text-indigo-100 transition-colors duration-500">
                  {item.number}
                </span>
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-600 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Strengths;