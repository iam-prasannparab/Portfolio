import { motion } from 'motion/react';
import { Server, Container, GitBranch, TerminalSquare, Cloud, Settings } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    { name: 'Linux & Bash', icon: TerminalSquare, desc: t('skill_1_desc') },
    { name: 'Docker & Kubernetes', icon: Container, desc: t('skill_2_desc') },
    { name: 'Jenkins', icon: Settings, desc: t('skill_3_desc') },
    { name: 'AWS', icon: Cloud, desc: t('skill_4_desc') },
    { name: 'Terraform', icon: Server, desc: t('skill_5_desc') },
    { name: 'Git & GitHub', icon: GitBranch, desc: t('skill_6_desc') },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t('skills_title')}</h2>
          <p className="text-gray-400 max-w-2xl">{t('skills_subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors group"
            >
              <skill.icon className="h-8 w-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
