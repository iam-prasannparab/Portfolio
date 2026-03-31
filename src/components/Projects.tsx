import { motion } from 'motion/react';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    title: 'End-to-End DevOps Automation',
    problem: 'Manual application build, testing, and deployment processes were time-consuming and prone to configuration errors.',
    solution: 'Built an automated CI/CD pipeline using Jenkins, integrated Docker for containerization, and automated AWS provisioning with Terraform.',
    metrics: [
      'Reduced manual effort by 80% using Jenkins CI/CD',
      'Enabled consistent environments via Docker containerization',
      'Reduced AWS infrastructure setup time from hours to <10 minutes'
    ],
    tech: ['Jenkins', 'Docker', 'Terraform', 'AWS', 'Git'],
    github: 'https://github.com/iam-prasannparab',
    demo: '#'
  },
  {
    title: 'Face Recognition Attendance System',
    problem: 'Traditional attendance tracking was manual, slow, and susceptible to proxy attendance.',
    solution: 'Developed a Python-based automated attendance system using OpenCV, NumPy, and Pandas for real-time face detection and recognition.',
    metrics: [
      'Automated tracking using real-time face detection',
      'Improved attendance accuracy and eliminated proxies',
      'Successfully collaborated, designed, tested, and deployed in a team'
    ],
    tech: ['Python', 'OpenCV', 'NumPy', 'Pandas'],
    github: 'https://github.com/iam-prasannparab',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl">Real-world implementations demonstrating practical problem-solving and automation skills.</p>
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
                      {project.tech.map(t => (
                        <span key={t} className="px-2.5 py-1 bg-gray-800 text-emerald-400 text-xs font-medium rounded-md border border-gray-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors" aria-label="GitHub Repository">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={project.demo} className="p-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg transition-colors" aria-label="Live Demo">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">The Problem</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.problem}</p>
                    
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">The Solution</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Measurable Impact</h4>
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
