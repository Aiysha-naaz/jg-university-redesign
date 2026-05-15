// "use client";
// import { motion } from 'framer-motion';

// const Hero = () => {
//   return (
//     <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#fafafa]">
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
//         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/50 blur-[120px]" />
//         <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-violet-100/50 blur-[120px]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
//         {/* Animated Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <span className="inline-flex items-center px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
//             Admissions Open 2026
//           </span>
//         </motion.div>

//         {/* Main Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]"
//         >
//           Transform Your Future <br className="hidden md:block" />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
//             With Global Excellence
//           </span>
//         </motion.h1>

//         {/* Subtext */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed"
//         >
//           Join a community of innovators and leaders. We provide world-class 
//           educational consulting and programs tailored for the modern world.
//         </motion.p>

//         {/* CTAs */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="flex flex-col sm:flex-row justify-center gap-4"
//         >
//           <button className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 hover:shadow-2xl hover:shadow-indigo-200 transition-all active:scale-95">
//             Get Started
//           </button>
//           <button className="px-10 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all active:scale-95">
//             View Courses
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// "use client";
// import { motion } from 'framer-motion';
// import { ArrowRight, Play } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden bg-white">
//       {/* 1. Background Layer: Subtle Grid & Blobs */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
//             <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-50 blur-[120px] animate-pulse" />
//             <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-violet-50 blur-[120px]" />
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//         <div className="flex flex-col items-center text-center">
          
//           {/* 2. Badge: Glassmorphism effect */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-3 py-1 mb-10 text-xs font-semibold bg-white/80 border border-indigo-100 text-indigo-600 rounded-full shadow-sm backdrop-blur-sm"
//           >
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
//             </span>
//             Admissions Open for 2026
//           </motion.div>

//           {/* 3. Main Heading: Tighter tracking & balanced line height */}
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//             className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight leading-[0.95]"
//           >
//             Empowering the <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 animate-gradient-x">
//               Next Generation
//             </span>
//           </motion.h1>

//           {/* 4. Subtext: Slightly thinner and more spaced */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="max-w-2xl text-lg md:text-xl text-slate-500 font-medium mb-12 leading-relaxed"
//           >
//             JG University is a new-age tech-driven institution offering 
//             industry-aligned programs that evolve with the future.
//           </motion.p>

//           {/* 5. Modern CTAs */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//             className="flex flex-wrap justify-center gap-5"
//           >
//             <button className="group flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all duration-300 shadow-xl hover:shadow-indigo-200">
//               Apply Now 
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all">
//               <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
//                 <Play className="w-3 h-3 text-indigo-600 fill-indigo-600" />
//               </div>
//               Virtual Tour
//             </button>
//           </motion.div>

//           {/* 6. Floating Stat Card: Adds "Real World" feel */}
//           {/* <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 1 }}
//             className="mt-20 p-4 bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl flex gap-12"
//           >
//             <div className="text-left">
//               <p className="text-2xl font-bold text-slate-900">17+</p>
//               <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Colleges</p>
//             </div>
//             <div className="w-px bg-slate-200" />
//             <div className="text-left">
//               <p className="text-2xl font-bold text-slate-900">1965</p>
//               <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Legacy</p>
//             </div>
//             <div className="w-px bg-slate-200" />
//             <div className="text-left">
//               <p className="text-2xl font-bold text-slate-900">UGC</p>
//               <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Approved</p>
//             </div>
//           </motion.div> */}

//           <motion.div
//   initial={{ opacity: 0, y: 40 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.8, duration: 1 }}
//   className="mt-20 w-full max-w-4xl"
// >
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//     {[
//       { label: "Colleges", value: "17+", sub: "Excellence Centers" },
//       { label: "Legacy", value: "1965", sub: "Since Foundation" },
//       { label: "Accreditation", value: "UGC", sub: "Govt. Approved" }
//     ].map((stat, i) => (
//       <div 
//         key={i} 
//         className="group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
//       >
//         {/* Subtle background glow on hover */}
//         <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors" />
        
//         <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
//           <span className="text-4xl font-black text-slate-900 tracking-tight mb-1">
//             {stat.value}
//           </span>
//           <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em] mb-2">
//             {stat.label}
//           </span>
//           <p className="text-xs text-slate-400 font-medium italic">
//             {stat.sub}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



"use client";
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Play, Award, History, Landmark } from 'lucide-react';


interface HeroProps {
  onApply: () => void;
}

const Hero = ({ onApply }: HeroProps) => {
  // Explicitly typing variants to avoid the "ease" string error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const stats = [
    { label: "Colleges", value: "17+", icon: <Landmark className="w-5 h-5" />, sub: "Excellence Centers" },
    { label: "Legacy", value: "1965", icon: <History className="w-5 h-5" />, sub: "Decades of Trust" },
    { label: "Accredited", value: "UGC", icon: <Award className="w-5 h-5" />, sub: "Govt. Recognized" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full"
      >
        <div className="flex flex-col items-center text-center">
          
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 mb-10 text-xs font-semibold bg-white border border-indigo-100 text-indigo-600 rounded-full shadow-sm">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
             </span>
             Admissions Open for 2026
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight leading-[0.95]">
            Empowering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600">
              Next Generation
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-2xl text-lg md:text-xl text-slate-500 font-medium mb-12 leading-relaxed">
            JG University is a new-age tech-driven institution offering industry-aligned programs that evolve with the future.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-5 mb-24">
            <button onClick={onApply} className="group flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all duration-300 shadow-xl hover:shadow-indigo-200">
              Apply Now 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all">
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                <Play className="w-3 h-3 text-indigo-600 fill-indigo-600" />
              </div>
              Virtual Tour
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
            {stats.map((stat, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">
                   {stat.icon}
                </div>
                <p className="text-4xl font-black text-slate-900 mb-1">{stat.value}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-2">{stat.label}</p>
                <p className="text-xs text-slate-400 font-medium">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;