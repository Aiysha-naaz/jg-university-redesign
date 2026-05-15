// "use client";

// import React from "react";

// import {
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   Globe,
// } from "lucide-react";

// import {
//   FaInstagram,
//   FaLinkedinIn,
//   FaGithub,
// } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socials = [
//     { Icon: FaInstagram, href: "https://www.instagram.com/jguniversity" },
//     { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/jg-university/" },
//     { Icon: FaGithub, href: "#" },
//   ];

//   return (
//     <footer className="bg-white pt-24">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Top Section */}
//         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-16 border-b border-slate-100 gap-8">
//           <div>
//             <div className="flex items-center gap-3 mb-6">
//               <div className="h-12 w-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-indigo-100">
//                 J
//               </div>

//               <span className="text-2xl font-black tracking-tighter text-slate-900">
//                 JG<span className="text-indigo-600">UNI</span>
//               </span>
//             </div>

//             <h3 className="text-4xl font-bold text-slate-900 tracking-tight max-w-md">
//               The future of tech starts here.
//             </h3>
//           </div>

//           <button className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold overflow-hidden transition-all hover:pr-12">
//             <span className="relative z-10">Apply for 2026</span>

//             <ArrowRight
//               className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"
//               size={20}
//             />
//           </button>
//         </div>

//         {/* Links Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-20">
//           <div className="col-span-1 md:col-span-2 space-y-6">
//             <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600">
//               Visit Campus
//             </h4>

//             <div className="flex items-start gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-indigo-200 transition-colors">
//               <MapPin className="text-indigo-600 shrink-0" size={24} />

//               <p className="text-slate-600 leading-relaxed italic">
//                 ASIA Campus, Drive In Road, Thaltej,
//                 <br />
//                 Ahmedabad, Gujarat 380054
//               </p>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600">
//               Quick Links
//             </h4>

//             <ul className="space-y-4 text-slate-500 font-medium">
//               <li>
//                 <a href="#" className="hover:text-indigo-600 transition-colors">
//                   Programs
//                 </a>
//               </li>

//               <li>
//                 <a href="#" className="hover:text-indigo-600 transition-colors">
//                   Admissions
//                 </a>
//               </li>

//               <li>
//                 <a href="#" className="hover:text-indigo-600 transition-colors">
//                   Placements
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-6">
//             <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-600">
//               Contact
//             </h4>

//             <div className="space-y-4 text-slate-500 font-medium">
//               <a
//                 href="mailto:connect@jguni.in"
//                 className="flex items-center gap-3 hover:text-indigo-600 transition-colors"
//               >
//                 <Mail size={18} />
//                 connect@jguni.in
//               </a>

//               <a
//                 href="tel:+917567756758"
//                 className="flex items-center gap-3 hover:text-indigo-600 transition-colors"
//               >
//                 <Phone size={18} />
//                 +91 7567 7567 58
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-slate-50 border-t border-slate-200 py-12">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
//           <p className="text-slate-400 text-sm font-medium">
//             © {currentYear} JG University. Sponsored by ASIA Charitable Trust.
//           </p>

//           <div className="flex gap-4">
//             {socials.map(({ Icon, href }, idx) => (
//               <a
//                 key={idx}
//                 href={href}
//                 className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-50 transition-all"
//               >
//                 {Icon ? <Icon size={18} /> : <Globe size={18} />}
//               </a>
//             ))}
//           </div>

//           <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
//             <a href="#" className="hover:text-slate-900 transition-colors">
//               Privacy
//             </a>

//             <a href="#" className="hover:text-slate-900 transition-colors">
//               Terms
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Globe,
  ExternalLink,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

interface FooterProps {
  onApply: () => void;
}

const Footer = ({ onApply }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { Icon: FaInstagram, href: "https://www.instagram.com/jguniversity", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/jg-university/", label: "LinkedIn" },
    { Icon: FaGithub, href: "#", label: "Github" },
  ];

  return (
    <footer className="bg-white pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section: CTA & Branding */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-16 border-b border-slate-100 gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-indigo-100">
                J
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                JG<span className="text-indigo-600">UNI</span>
              </span>
            </div>

            <h3 className="text-4xl font-black text-slate-900 tracking-tight max-w-md leading-[1.1]">
              The future of tech <br />
              <span className="text-indigo-600">starts here.</span>
            </h3>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold overflow-hidden transition-all flex items-center gap-3 shadow-2xl shadow-slate-200"
          >
            <span onClick={onApply}>Apply for 2026</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </motion.button>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-20">
          
          {/* Address Card */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 space-y-6"
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
              Visit Campus
            </h4>

            <div className="group flex items-start gap-5 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/30">
              <div className="h-12 w-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>

              <div>
                <p className="text-slate-600 font-medium leading-relaxed mb-2">
                  ASIA Campus, Drive In Road, Thaltej,
                  <br />
                  Ahmedabad, Gujarat 380054
                </p>
                <a href="https://maps.app.goo.gl/q85KzayhsQ221Gkr5" className="text-xs font-bold text-indigo-600 flex items-center gap-1 group-hover:underline">
                  Get Directions <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Nav Lists */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
              Navigation
            </h4>
            <ul className="space-y-4">
              {['Programs', 'Admissions', 'Placements', 'Campus Life'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 font-bold hover:text-indigo-600 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 transition-all duration-300 h-[2px] bg-indigo-600 mr-0 group-hover:mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">
              Contact Us
            </h4>
            <div className="space-y-6">
              <a href="mailto:connect@jguni.in" className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-slate-600 font-bold group-hover:text-slate-900 transition-colors">connect@jguni.in</span>
              </a>

              <a href="tel:+917567756758" className="flex items-center gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-slate-600 font-bold group-hover:text-slate-900 transition-colors">+91 75677 56758</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Socials & Legal */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            
            <div className="space-y-2 text-center md:text-left">
              <p className="text-slate-400 text-sm font-medium">
                © {currentYear} JG University. Sponsored by ASIA Charitable Trust.
              </p>
              <div className="flex justify-center md:justify-start gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              </div>
            </div>

            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  whileHover={{ y: -5 }}
                  className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all shadow-lg"
                  aria-label={label}
                >
                  {Icon ? <Icon size={20} /> : <Globe size={20} />}
                </motion.a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;