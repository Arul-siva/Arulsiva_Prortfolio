import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useNavigate } from 'react-router-dom';
import GradientText from './GradientText';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="projects" className="py-20   relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            <GradientText text=" Projects" />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work, featuring web applications and digital experiences.
          </p>
        </div>

        <div className="relative">
          <motion.div 
            ref={carouselRef} 
            className="cursor-grab overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-8"
            >
              {projects.map((project) => (
                <motion.div 
                  key={project.id}
                  className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] relative group rounded-2xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-accent text-sm font-bold uppercase tracking-wider mb-2 block">
                        {project.category || "Development"}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        View Details <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <div className="mt-8 flex justify-center gap-2 text-gray-500 text-sm">
            <span>Drag to explore</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
