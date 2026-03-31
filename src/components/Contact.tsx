import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">{t('contact_title')}</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t('contact_subtitle')}
              </p>
              
              <div className="space-y-4 mb-8">
                <a href="mailto:prasannparab.devops@gmail.com" className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors">
                  <Mail className="h-5 w-5 mr-3" />
                  prasannparab.devops@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/prasannparab" target="_blank" rel="noreferrer" className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors">
                  <Linkedin className="h-5 w-5 mr-3" />
                  linkedin.com/in/prasannparab
                </a>
                <a href="https://github.com/iam-prasannparab" target="_blank" rel="noreferrer" className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors">
                  <Github className="h-5 w-5 mr-3" />
                  github.com/iam-prasannparab
                </a>
              </div>
            </div>

            <form action="mailto:prasannparab.devops@gmail.com" method="POST" encType="text/plain" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">{t('contact_name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="Name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">{t('contact_email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="Email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">{t('contact_message')}</label>
                <textarea 
                  id="message" 
                  name="Message"
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
              >
                <Send className="h-4 w-4 mr-2" />
                {t('contact_send')}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
