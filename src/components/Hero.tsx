import { motion } from 'motion/react';
import { Terminal, ArrowRight, Github, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium mb-6 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to Work • DevOps & SRE Roles</span>
          </div>
          
          <h2 className="text-xl font-medium text-gray-400 mb-2">Hi, I'm Prasann Parab — Aspiring DevOps Engineer</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            I automate infrastructure so you can <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              ship faster.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            DevOps Engineer with hands-on experience in CI/CD pipeline automation, containerization, Kubernetes orchestration, and cloud infrastructure provisioning. I reduce deployment times from 30 minutes to 5 minutes by building scalable, reliable, and automated cloud-native systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors border border-gray-700">
              <Terminal className="mr-2 h-4 w-4" />
              Hire Me
            </a>
            <div className="flex items-center gap-4 ml-0 sm:ml-4 mt-4 sm:mt-0">
              <a href="https://github.com/iam-prasannparab" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="/Prasann_Parab_Resume.pdf" download="Prasann_Parab_Resume.pdf" className="text-gray-400 hover:text-white transition-colors flex items-center text-sm font-medium" aria-label="Resume">
                <FileText className="h-5 w-5 mr-1" />
                Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
