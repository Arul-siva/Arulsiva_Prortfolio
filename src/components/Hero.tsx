import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center  pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary to-primary opacity-50"></div>
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2  lg:text-left mt-12 lg:mt-0"
        >
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-accent font-medium tracking-wider text-sm uppercase">Your Vision, My Clean Code.
</span>
          </div>
          
          <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            I'm <span className="text-accent">{personalInfo.name}</span>,<br />
            <span className="text-gray-300 text-3xl lg:text-5xl">Software Engineer</span>
          </h1>
          
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-xl lg:mx-0">
            {personalInfo.intro}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <a 
              href={personalInfo.resumeUrl} 
              download="Arulsiva-Software-Engineer.pdf"
              className="px-8 py-4 bg-accent text-primary2 rounded-full font-bold transition-all hover:bg-white hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(190,242,100,0.3)]"
            >
              Download CV <Download size={20} />
            </a>
            <a 
              href="#projects" 
              className="flex items-center gap-2 text-white font-medium hover:text-accent transition-colors group"
            >
              <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-accent transition-colors">
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
              See My Work
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[550px] lg:h-[650px]">
            {/* Abstract Shape Background */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full text-secondary fill-current transform scale-110 -z-10">
              <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,32.2C59,42.9,47.1,51.4,34.8,58.3C22.5,65.2,9.8,70.5,-3.4,76.4C-16.6,82.3,-30.3,88.8,-42.2,84.6C-54.1,80.4,-64.2,65.5,-72.1,50.2C-80,34.9,-85.7,19.2,-84.6,4.1C-83.5,-11,-75.6,-25.5,-65.4,-37.6C-55.2,-49.7,-42.7,-59.4,-29.8,-67.3C-16.9,-75.2,-3.6,-81.3,10.2,-80.9C24,-80.5,30.5,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
            
            <img 
              src={personalInfo.heroImage} 
              alt="Hero" 
              className="relative w-full h-full object-cover rounded-[3rem] shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-10 -left-10 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-xl z-20 max-w-xs"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="text-3xl font-bold text-accent">3</div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">Years of<br/>Experience</div>
              </div>
              <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-3/4"></div>
              </div> 
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
