import React, { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Send, User, MessageSquare, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import GradientText from './GradientText';

const EMAILJS_SERVICE_ID = 'service_udtq7b4';
const EMAILJS_TEMPLATE_ID = 'template_2vwvkge';
const EMAILJS_PUBLIC_KEY = 'YCdFFCVYl553Bbev1';

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const inputClassName =
  'w-full bg-gray-800 text-white pl-12 pr-4 py-3 border border-gray-700 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all placeholder-gray-400';

const textareaClassName = `${inputClassName} resize-none`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus(null);
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          user_name: formData.name,
          user_email: formData.email,
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          phone_number: formData.phone,
          message: formData.message,
          reply_to: formData.email,
          to_name: personalInfo.name,
          to_email: personalInfo.email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitStatus({
        type: 'success',
        message: 'Your message has been sent successfully.',
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Unable to send your message right now. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="bg-secondary2 p-8 lg:p-10 rounded-3xl border-gray-800 shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input 
                    name="name"
                    type="text" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    className={inputClassName}
                  />
                </div>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  <input 
                    name="phone"
                    type="tel" 
                    placeholder="Your Phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                    className={inputClassName}
                  />
                </div>
              </div>
              
              <div className="relative mb-6">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                <input 
                  name="email"
                  type="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className={inputClassName}
                />
              </div>

              <div className="relative mb-8">
                <MessageSquare className="absolute left-4 top-6 text-gray-500" size={20} />
                <textarea 
                  name="message"
                  rows={5}
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={textareaClassName}
                ></textarea>
              </div>

              {submitStatus && (
                <p
                  className={`mb-6 text-sm ${
                    submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-3 bg-accent text-primary2 font-bold rounded-xl hover:bg-white transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(190,242,100,0.3)]"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
