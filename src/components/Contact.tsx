import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, User, MessageSquare, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import GradientText from './GradientText';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24   relative">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            <GradientText text="Get In Touch" />
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="bg-secondary2 p-8 rounded-3xl border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12   rounded-full flex items-center justify-center text-accent border-gray-800 group-hover:border-accent transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-200">Phone</p>
                    <p className="font-semibold text-white group-hover:text-accent transition-colors">{personalInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12   rounded-full flex items-center justify-center text-accent border-gray-800 group-hover:border-accent transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-200">Email</p>
                    <p className="font-semibold text-white group-hover:text-accent transition-colors">{personalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12   rounded-full flex items-center justify-center text-accent border-gray-800 group-hover:border-accent transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-200">Location</p>
                    <p className="font-semibold text-white group-hover:text-accent transition-colors">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <form className="bg-secondary2 p-8 lg:p-10 rounded-3xl border-gray-800 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full pl-12 pr-4 py-3   border-gray-700 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input 
                    type="tel" 
                    placeholder="Your Phone" 
                    className="w-full pl-12 pr-4 py-3   border-gray-700 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                  />
                </div>
              </div>
              
              <div className="relative mb-6">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full pl-12 pr-4 py-3   border-gray-700 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-white placeholder-gray-600"
                />
              </div>

              <div className="relative mb-8">
                <MessageSquare className="absolute left-4 top-6 text-gray-500" size={20} />
                <textarea 
                  rows={5}
                  placeholder="Your Message" 
                  className="w-full pl-12 pr-4 py-3   border-gray-700 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-white placeholder-gray-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-accent text-primary2 font-bold rounded-xl hover:bg-white transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(190,242,100,0.3)]"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
