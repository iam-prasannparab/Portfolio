import { motion } from 'motion/react';
import { Server, Container, GitBranch, TerminalSquare, Cloud, Settings } from 'lucide-react';

const skills = [
  { name: 'Linux & Bash', icon: TerminalSquare, desc: 'System administration, shell scripting, cron jobs' },
  { name: 'Docker & Kubernetes', icon: Container, desc: 'Containerization, Pods, Deployments, Services, Kubectl' },
  { name: 'Jenkins', icon: Settings, desc: 'Freestyle Jobs, Declarative Pipelines, CI/CD automation' },
  { name: 'AWS', icon: Cloud, desc: 'EC2, S3, IAM, Security Groups, Cloud Deployment' },
  { name: 'Terraform', icon: Server, desc: 'Infrastructure as Code, Provisioning, State Management' },
  { name: 'Git & GitHub', icon: GitBranch, desc: 'Version control, Branching, Merging, Webhooks' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900/50 border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Core Competencies</h2>
          <p className="text-gray-400 max-w-2xl">Hands-on experience with the modern DevOps toolchain, focusing on automation, reliability, and scalability.</p>
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
