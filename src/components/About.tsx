"use client";
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    "Expert Career Guidance",
    "Global University Network",
    "Streamlined Admission Process",
    "Scholarship Assistance"
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual Element */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative background for image */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-indigo-50 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-violet-50 rounded-3xl -z-10" />
            
            {/* <div className="aspect-video lg:aspect-square rounded-2xl bg-slate-200 overflow-hidden shadow-2xl relative">
               {/* Replace with a high-quality university/office image later */}
               {/* <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent" />
               <div className="flex items-center justify-center h-full text-slate-400 font-medium italic p-8 text-center">
                 [High-Quality Image of Modern Campus or Student Success]
               </div>
            </div> */} 
            <div className="aspect-video lg:aspect-square rounded-2xl bg-slate-200 overflow-hidden shadow-2xl relative group">
  {/* The Actual Image */}
  <img 
    src="https://jguni.in/images/campus/3.jpg" 
    alt="JG University Campus" 
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />

  {/* Modern Gradient Overlay - makes the image feel "designed" */}
  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 via-transparent to-transparent opacity-60" />

  {/* Glassmorphic "Live View" Badge - extra UI polish */}
  <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
    Our Campus
  </div>
</div>

            {/* Floating Stat Card */}
            <motion.div 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-10 -right-1 md:right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block"
            >
              <p className="text-3xl font-bold text-indigo-600">10k+</p>
              <p className="text-sm font-medium text-slate-500">Students Guided</p>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4">
              Our Story
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Empowering Students to Reach Their <span className="text-indigo-600">Full Potential.</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At JGUNI, we bridge the gap between ambitious students and world-class 
              institutions. Our mission is to simplify the complex journey of higher 
              education through personalized mentorship and modern resources.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-indigo-500 w-5 h-5" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="text-indigo-600 font-bold flex items-center hover:translate-x-2 transition-transform cursor-pointer">
                Learn more about our mission 
                <span className="ml-2">→</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;