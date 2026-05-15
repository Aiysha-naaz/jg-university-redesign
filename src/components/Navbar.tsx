// "use client";
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Changes navbar background on scroll for that premium feel
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'About', href: '#about' },
//     { name: 'Programs', href: '#programs' },
//     { name: 'Testimonials', href: '#testimonials' },
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex justify-between items-center">
          
//           {/* Logo */}
//           <div className="flex-shrink-0 font-bold text-2xl tracking-tighter text-slate-900">
//             JG<span className="text-indigo-600">UNI</span>
//           </div>
          
//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-10 items-center">
//             {navLinks.map((link) => (
//               <a 
//                 key={link.name} 
//                 href={link.href} 
//                 className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200">
//               Apply Now
//             </button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
//           >
//             <div className="px-6 py-8 space-y-6">
//               {navLinks.map((link) => (
//                 <a 
//                   key={link.name} 
//                   href={link.href} 
//                   onClick={() => setIsOpen(false)}
//                   className="block text-xl font-semibold text-slate-900"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold">
//                 Apply Now
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;


// "use client";
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'About', href: '#about' },
//     { name: 'Campus', href: '#campus' }, // Points to the Gallery/Features section
//     { name: 'Programs', href: '#programs' },
//     { name: 'Testimonials', href: '#testimonials' },
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="flex justify-between items-center">
          
//           {/* Logo */}
//           <div className="flex-shrink-0 font-bold text-2xl tracking-tighter text-slate-900">
//             JG<span className="text-indigo-600">UNI</span>
//           </div>
          
//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-10 items-center">
//             {navLinks.map((link) => (
//               <a 
//                 key={link.name} 
//                 href={link.href} 
//                 className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}
//             <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200">
//               Apply Now
//             </button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 p-2">
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
//           >
//             <div className="px-6 py-8 space-y-6">
//               {navLinks.map((link) => (
//                 <a 
//                   key={link.name} 
//                   href={link.href} 
//                   onClick={() => setIsOpen(false)}
//                   className="block text-xl font-semibold text-slate-900"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold">
//                 Apply Now
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;



// "use client";
// import React, { useState, useEffect } from 'react';
// import { Menu, X, ArrowRight } from 'lucide-react';
// import { motion, AnimatePresence, useScroll } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const { scrollYProgress } = useScroll();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'About', href: '#about' },
//     { name: 'Campus', href: '#campus' },
//     { name: 'Programs', href: '#programs' },
//     { name: 'Testimonials', href: '#testimonials' },
//   ];

//   return (
//     <>
    
//       {/* Scroll Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-[3px] bg-indigo-600 z-[60] origin-left"
//         style={{ scaleX: scrollYProgress }}
//       />

//       <nav className={`fixed w-full z-50 transition-all duration-500 ${
//         scrolled 
//           ? 'py-3 bg-white/90 backdrop-blur-xl shadow-lg shadow-indigo-100/20' 
//           : 'py-6 bg-transparent'
//       }`}>
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex justify-between items-center">
            
//             {/* Logo */}
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="flex-shrink-0 font-black text-2xl tracking-tighter text-slate-900 flex items-center gap-2"
//             >
//               <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-base">J</div>
//               JG<span className="text-indigo-600">UNI</span>
//             </motion.div>
            
//             {/* Desktop Links */}
//             <div className="hidden md:flex space-x-8 items-center">
//               {navLinks.map((link) => (
//                 <a 
//                   key={link.name} 
//                   href={link.href} 
//                   className="relative group text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors py-2"
//                 >
//                   {link.name}
//                   {/* Animated Underline */}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
//                 </a>
//               ))}
//               <button className="group bg-slate-900 text-white px-7 py-3 rounded-2xl text-sm font-bold hover:bg-indigo-600 transition-all duration-300 active:scale-95 flex items-center gap-2 shadow-xl shadow-indigo-100/50">
//                 Apply Now
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <div className="md:hidden">
//               <button 
//                 onClick={() => setIsOpen(!isOpen)} 
//                 className={`p-2 rounded-xl transition-colors ${isOpen ? 'bg-indigo-50 text-indigo-600' : 'text-slate-900'}`}
//               >
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Overlay */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div 
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl md:hidden overflow-hidden"
//             >
//               <div className="px-6 py-10 space-y-8">
//                 <div className="flex flex-col space-y-4">
//                   {navLinks.map((link, i) => (
//                     <motion.a 
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: i * 0.1 }}
//                       key={link.name} 
//                       href={link.href} 
//                       onClick={() => setIsOpen(false)}
//                       className="text-2xl font-black text-slate-900 hover:text-indigo-600 transition-colors"
//                     >
//                       {link.name}
//                     </motion.a>
//                   ))}
//                 </div>
//                 <motion.button 
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.4 }}
//                   className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 flex items-center justify-center gap-3"
//                 >
//                   Start Application <ArrowRight />
//                 </motion.button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

// Defined the interface for props to satisfy TypeScript
interface NavbarProps {
  onApply: () => void;
}

const Navbar = ({ onApply }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Campus', href: '#campus' },
    { name: 'Programs', href: '#programs' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-indigo-600 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-white/90 backdrop-blur-xl shadow-lg shadow-indigo-100/20' 
          : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0 font-black text-2xl tracking-tighter text-slate-900 flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-base">J</div>
              JG<span className="text-indigo-600">UNI</span>
            </motion.div>
            
            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="relative group text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              {/* Desktop Apply Button */}
              <button 
                onClick={onApply}
                className="group bg-slate-900 text-white px-7 py-3 rounded-2xl text-sm font-bold hover:bg-indigo-600 transition-all duration-300 active:scale-95 flex items-center gap-2 shadow-xl shadow-indigo-100/50"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`p-2 rounded-xl transition-colors ${isOpen ? 'bg-indigo-50 text-indigo-600' : 'text-slate-900'}`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl md:hidden overflow-hidden"
            >
              <div className="px-6 py-10 space-y-8">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.a 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-black text-slate-900 hover:text-indigo-600 transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
                {/* Mobile Apply Button */}
                <motion.button 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    setIsOpen(false);
                    onApply();
                  }}
                  className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 flex items-center justify-center gap-3"
                >
                  Start Application <ArrowRight />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;