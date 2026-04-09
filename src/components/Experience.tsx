import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';
import GradientText from './GradientText';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-secondary2 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            <GradientText text="My Experience" />
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform lg:-translate-x-1/2 ml-6 lg:ml-0"></div>

          {experience.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col lg:flex-row items-start mb-16 ${
                index % 2 === 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 lg:left-1/2 w-12 h-12   border-4 border-accent rounded-full flex items-center justify-center transform lg:-translate-x-1/2 z-10 ml-0 lg:ml-0 shadow-[0_0_15px_rgba(190,242,100,0.5)]">
                <Briefcase size={20} className="text-accent" />
              </div>

              {/* Content Card */}
              <div className={`w-full lg:w-1/2  ${
                index % 2 === 0 ? ' text-left ' : ' text-left'
              }`}>
                <div className="  p-8 rounded-2xl shadow-xl border-gray-800 hover:border-accent/30 transition-all duration-300 group" style={{background:'#0d2426'}}>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{item.role}</h3>
                  <h4 className="text-lg font-semibold text-gray-400 mb-4">{item.company}</h4>
                  
                  <div className={`flex flex-wrap gap-4 text-sm text-gray-500 mb-6 ${
                    index % 2 === 0 ? '' : 'lg:justify-start'
                  }`}>
                    <span className="flex items-center gap-1 bg-secondary2 px-3 py-1 rounded-full"><Calendar size={14} className="text-accent" /> {item.period}</span>
                    <span className="flex items-center gap-1 bg-secondary2 px-3 py-1 rounded-full"><MapPin size={14} className="text-accent" /> {item.location}</span>
                  </div>

                  <ul className={`space-y-3 text-gray-300 text-sm leading-relaxed ${
                    index % 2 === 0 ? '' : 'lg:text-left'
                  }`}>
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 opacity-90 transition-all duration-300 hover:border-accent/20 hover:bg-white/[0.05] hover:opacity-100"
                      >
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(190,242,100,0.6)]"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
