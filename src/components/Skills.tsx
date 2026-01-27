import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import GradientText from './GradientText';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24   relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <span className="text-accent font-medium uppercase tracking-wider text-sm">My Skills</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
            <GradientText text="My key skills for crafting efficient and user-friendly websites." />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary2 p-6 rounded-2xl  border-gray-800 hover:border-accent/30 transition-all duration-300 d-flex justify-content-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">{skill.name}</h3>
                  <p className="text-xs text-gray-500">Professional Tool</p>
                </div>
              </div>
              <div className="text-2xl font-bold text-accent">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
