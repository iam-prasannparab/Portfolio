import { motion } from 'motion/react';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('project_1_title'),
      problem: t('project_1_problem'),
      solution: t('project_1_solution'),
      metrics: [
        t('project_1_metric_1'),
        t('project_1_metric_2'),
        t('project_1_metric_3')
      ],
      tech: ['Jenkins', 'Docker', 'Terraform', 'AWS', 'Git'],
      github: 'https://github.com/iam-prasannparab',
      demo: '#'
    },
    {
      title: t('project_2_title'),
      problem: t('project_2_problem'),
      solution: t('project_2_solution'),
      metrics: [
        t('project_2_metric_1'),
        t('project_2_metric_2'),
        t('project_2_metric_3')
      ],
      tech: ['Python', 'OpenCV', 'NumPy', 'Pandas'],
      github: 'https://github.com/iam-prasannparab',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">{t('projects_title')}</h2>
          <p className="text-gray-400 max-w-2xl">{t('projects_subtitle')}</p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-2.5 py-1 bg-gray-800 text-emerald-400 text-xs font-medium rounded-md border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors" aria-label={t('project_view_code')}>
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={project.demo} className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg transition-colors" aria-label={t('project_live_demo')}>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">{t('project_problem_label')}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.problem}</p>
                    
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">{t('project_solution_label')}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{t('project_impact_label')}</h4>
                    <ul className="space-y-3">
                      {project.metrics.map((metric, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-300">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 shrink-0" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
