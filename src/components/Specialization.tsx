import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Database, Layout, Diamond, Activity, Smartphone, Monitor, PenTool, BarChart, ChevronLeft, ChevronRight } from 'lucide-react';
import GradientText from './GradientText';

const Specialization: React.FC = () => {
  const services = [
    { id: "01", title: "Web Application Development", icon: Smartphone, description: "Building complete web applications with structured architecture and clear data flow." },
    { id: "02", title: "Component-Based UI Development", icon: Layout, description: "Creating reusable, modular UI components for consistent and maintainable interfaces." },
    { id: "03", title: " API Development & Integration", icon: Diamond, description: "Developing and integrating RESTful APIs for seamless communication between systems." },
    { id: "04", title: "Application Performance Optimization", icon: Activity, description: "Improving load times and runtime speed through code and logic optimization." },
    { id: "05", title: "Error Handling & Debugging", icon: Monitor, description: "Identifying issues quickly and implementing reliable error handling mechanisms." },
    { id: "06", title: "Version Control & Collaboration", icon: Database, description: "Working with version control systems to manage code changes effectively." }
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 370;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24   relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-2 h-2 bg-accent rounded-full"></div> */}
              <span className="text-accent font-medium uppercase tracking-wider text-sm"></span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              <GradientText text="What I Do" />
            </h2>
          </motion.div>
          
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3 mt-8 lg:mt-0"
          >
            <p className="text-gray-400 text-lg mb-6">
              My development work focuses on building reliable, scalable, and maintainable web applications through well-structured code and practical problem solving.
            </p>
            <a href="#contact" className="px-6 py-3 bg-accent text-primary2 font-bold rounded-full hover:bg-white transition-colors inline-block">
              View All Services
            </a>
          </motion.div> */}
        </div>
    
        <div className="relative">
          {/* <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary2 hover:bg-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary2 hover:bg-white transition-colors"
          >
            <ChevronRight size={24} /> */}
          {/* </button> */}

          <motion.div 
            ref={carouselRef} 
            className="cursor-grab active:cursor-grabbing overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-8"
            >
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="min-w-[300px] md:min-w-[350px] bg-secondary2 p-8 rounded-3xl border2 transition-all duration-300 group relative flex flex-col justify-between h-[300px]"
              >
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 rounded-2xl icon border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary2 transition-colors duration-300">
                    <service.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary2 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  {/* Removed hover reveal, showing content directly or just title as per image? Image shows title at bottom. */}
                  {/* Image shows Title at bottom. No description visible. */}
                </div>
              </motion.div>
            ))}

            </motion.div>
          </motion.div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="flex justify-center mt-12 gap-2">
          <div className="w-8 h-2 bg-accent rounded-full"></div>
          <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
