"use client";
import { motion } from 'framer-motion';
interface CTAProps {
  onApply: () => void;
}


const CTA = ({ onApply }: CTAProps) => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/20 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Shape Your Future?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Take the first step towards a new-age, tech-driven career. 
              Apply now for the 2026 academic session or take our free career assessment.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={onApply} className="w-full sm:w-auto px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-900/20">
                Apply Now
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
                Free Psychometric Test
              </button>
            </div>

            <p className="mt-8 text-slate-500 text-sm">
              Questions? Contact our admission cell: <span className="text-indigo-400">+91 7567 7567 58</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;