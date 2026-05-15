// "use client";
// import { motion } from 'framer-motion';
// import { Mail, GraduationCap } from 'lucide-react';

// const faculty = [
//   { 
//     name: "Shruti Darbar", 
//     dept: "School of Computing", 
//     role: "Assistant Professor",
//     image: "https://jguni.in/images/Shruti-1.jpg" 
//   },
//   { 
//     name: "Suganya Gunasekar", 
//     dept: "School of Computing", 
//     role: "Assistant Professor",
//     image: "https://jguni.in/images/suganya-1.jpg" 
//   },
//   { 
//     name: "Dr. Namika Patel", 
//     dept: "School of Management", 
//     role: "Associate Professor",
//     image: "https://jguni.in/images/namika2o.webp"
//   },
//   { 
//     name: "Dr. Hitesh Harwani", 
//     dept: "School of Management", 
//     role: "Professor",
//     image: "https://jguni.in/images/hitesh-1.png"
//   },
//   { 
//     name: "CA CPA Harshil Trivedi", 
//     dept: "School of Commerce", 
//     role: "Professor",
//     image: "https://jguni.in/images/harshil-1%20(1).jpg"
//   }
// ];

// const FacultyGallery = () => {
//   return (
//     <section id="faculty" className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
//           <div className="max-w-xl text-left">
//             <h2 className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">
//               Academic Excellence
//             </h2>
//             <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
//               Our Distinguished <br />Faculty
//             </h3>
//           </div>
//           <div className="hidden md:block w-32 h-[2px] bg-indigo-600 mb-4" />
//         </div>

//         {/* Scrollable Container */}
//         <div className="flex gap-6 overflow-x-auto pb-12 snap-x no-scrollbar cursor-grab active:cursor-grabbing">
//           {faculty.map((member, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.05 }}
//               className="min-w-[280px] md:min-w-[320px] snap-center group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100/50"
//             >
//               {/* Prioritizing the face with object-top */}
//               <img 
//                 src={member.image} 
//                 alt={member.name}
//                 className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
//                 onError={(e) => {
//                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff&size=512&bold=true`;
//                 }}
//               />
              
//               {/* Subtle Bottom Gradient */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
              
//               {/* Bottom-Anchored Glass Card */}
//               <div className="absolute inset-x-0 bottom-0 p-4">
//                 <div className="backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-[1.8rem] p-6 text-white transition-all duration-500 group-hover:bg-slate-900/70">
                  
//                   {/* Department Tag */}
//                   <div className="flex items-center gap-2 mb-1.5">
//                     <GraduationCap className="w-3 h-3 text-indigo-400" />
//                     <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-indigo-300">
//                       {member.dept}
//                     </span>
//                   </div>
                  
//                   {/* Name */}
//                   <h4 className="text-lg font-bold leading-tight tracking-tight">
//                     {member.name}
//                   </h4>
                  
//                   {/* Smooth Height Expand for Role & Contact */}
//                   <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out overflow-hidden">
//                     <div className="min-h-0">
//                       <p className="text-white/60 text-[11px] font-medium pt-1.5 mb-5">
//                         {member.role}
//                       </p>
                      
//                       <div className="pt-4 border-t border-white/10 flex justify-between items-center">
//                          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-indigo-900/20">
//                             <Mail className="w-3 h-3" />
//                             Contact
//                          </button>
//                          <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 cursor-pointer transition-opacity">
//                            Bio
//                          </span>
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Scroll Progress / Navigation Hint */}
//         <div className="flex justify-center items-center gap-6 mt-6">
//           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
//             Swipe to view all
//           </span>
//           <div className="h-[1px] w-24 bg-slate-100 relative">
//              <motion.div 
//                className="absolute inset-y-0 left-0 bg-indigo-500 w-1/3"
//                animate={{ x: [0, 60, 0] }}
//                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//              />
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FacultyGallery;



"use client";
import { motion, useMotionValue } from 'framer-motion';
import { Mail, GraduationCap } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const faculty = [
  { name: "Shruti Darbar", dept: "School of Computing", role: "Assistant Professor", image: "https://jguni.in/images/Shruti-1.jpg" },
  { name: "Suganya Gunasekar", dept: "School of Computing", role: "Assistant Professor", image: "https://jguni.in/images/suganya-1.jpg" },
  { name: "Dr. Namika Patel", dept: "School of Management", role: "Associate Professor", image: "https://jguni.in/images/namika2o.webp" },
  { name: "Dr. Hitesh Harwani", dept: "School of Management", role: "Professor", image: "https://jguni.in/images/hitesh-1.png" },
  { name: "CA CPA Harshil Trivedi", dept: "School of Commerce", role: "Professor", image: "https://jguni.in/images/harshil-1%20(1).jpg" }
];

const FacultyGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (containerRef.current) {
      // Calculate how far the user can drag based on the content width vs container width
      setConstraints({
        left: -(containerRef.current.scrollWidth - containerRef.current.offsetWidth),
        right: 0,
      });
    }
  }, []);

  return (
    <section id="faculty" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl text-left">
            <h2 className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-3 block">Academic Excellence</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">Our Distinguished <br />Faculty</h3>
          </div>
          <div className="hidden md:block w-32 h-[2px] bg-indigo-600 mb-4" />
        </div>

        {/* DRAGGABLE WRAPPER */}
        <div ref={containerRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
          <motion.div 
            drag="x"
            dragConstraints={constraints}
            className="flex gap-6 pb-12"
          >
            {faculty.map((member, idx) => (
              <motion.div
                key={idx}
                className="min-w-[280px] md:min-w-[320px] select-none group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100/50"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  draggable="false" // Crucial: prevents ghost image drag
                  className="w-full h-full object-cover object-top pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                     e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff&size=512&bold=true`;
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-[1.8rem] p-6 text-white transition-all duration-500 group-hover:bg-slate-900/70">
                    <div className="flex items-center gap-2 mb-1.5">
                      <GraduationCap className="w-3 h-3 text-indigo-400" />
                      <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-indigo-300">{member.dept}</span>
                    </div>
                    <h4 className="text-lg font-bold leading-tight tracking-tight">{member.name}</h4>
                    
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out overflow-hidden">
                      <div className="min-h-0">
                        <p className="text-white/60 text-[11px] font-medium pt-1.5 mb-5">{member.role}</p>
                        <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                           <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all active:scale-95 shadow-lg">
                              <Mail className="w-3 h-3" /> Contact
                           </button>
                           <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 cursor-pointer">Bio</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-6">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Drag to explore</span>
          <div className="h-[1px] w-24 bg-slate-100 relative overflow-hidden">
             <motion.div 
               className="absolute inset-y-0 left-0 bg-indigo-500 w-1/3"
               animate={{ x: [-40, 100] }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyGallery;