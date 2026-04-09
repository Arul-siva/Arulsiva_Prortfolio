import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Sparkles } from "lucide-react";
import { education } from "../data/portfolio";
import GradientText from "./GradientText";

const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-10 top-24 h-40 w-40 rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.3em] text-accent">
            <Sparkles size={14} />
            Education
          </div>
          <h2 className="mb-5 text-3xl font-bold text-white lg:text-5xl">
            <GradientText text="Academic Journey" />
          </h2>
          <p className="text-base leading-7 text-gray-400 lg:text-lg">
            A milestone that shaped my technical foundation and prepared me for building practical software solutions.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent/70 via-teal-400/50 to-transparent md:block" />

          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="relative pl-0 md:pl-20"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#102b2f]/90 p-8 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(107,253,217,0.16),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(240,255,108,0.12),transparent_35%)] opacity-80" />

                <div className="relative z-10">
                  <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/30 bg-white/5 text-accent shadow-[0_0_25px_rgba(190,242,100,0.18)]">
                        <GraduationCap size={28} />
                      </div>
                      <div>
                        <p className="mb-2 text-sm uppercase tracking-[0.28em] text-accent/90">
                          Degree
                        </p>
                        <h3 className="text-2xl font-bold leading-tight text-white transition-colors group-hover:text-accent">
                          {item.degree}
                        </h3>
                        <p className="mt-2 text-lg font-medium text-gray-300">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                     {/* 
                    <div className="hidden md:flex md:h-14 md:w-14 md:items-center md:justify-center md:rounded-full md:border md:border-white/10 md:bg-white/5">
                      <span className="text-lg font-semibold text-accent">0{item.id}</span>
                    </div> */}
                  </div>

                  <div className="mb-6 flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                      <Calendar size={16} className="text-accent" />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200">
                      <MapPin size={16} className="text-accent" />
                      {item.location}
                    </div>
                  </div>

                  <p className="max-w-3xl text-base leading-7 text-gray-300">
                    {item.summary}
                  </p>
                </div>

                <motion.div
                  animate={{ x: [0, 10, 0], opacity: [0.45, 0.9, 0.45] }}
                  transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                  className="absolute bottom-6 right-6 hidden items-center gap-2 text-sm text-accent md:flex"
                >
                  {/* <span>Timeline highlight</span> */}
                </motion.div>
              </motion.div>

              <div className="absolute left-0 top-10 hidden md:flex md:h-12 md:w-12 md:items-center md:justify-center md:rounded-full md:border-4 md:border-[#102b2f] md:bg-accent md:text-primary2 md:shadow-[0_0_25px_rgba(190,242,100,0.4)]">
                <GraduationCap size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
