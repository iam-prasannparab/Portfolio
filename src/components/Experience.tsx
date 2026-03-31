import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900/50 border-y border-gray-800">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Journey & Education</h2>
          <p className="text-gray-400 max-w-2xl">My path to becoming a DevOps Engineer through continuous learning and hands-on practice.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Professional Experience</h3>
            </div>
            
            <div className="relative border-l border-gray-700 ml-3 pl-8 pb-8">
              <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-gray-900"></span>
              <h4 className="text-lg font-medium text-white">DevOps Engineer Intern</h4>
              <p className="text-sm text-emerald-400 mb-3">MyWebRide | Thane, Maharashtra • Dec 2025 - Mar 2026</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-400">
                <li>Designed and implemented CI/CD pipelines using Jenkins, automating build and deployment workflows and reducing manual effort by 70%.</li>
                <li>Containerized applications with Docker and built end-to-end deployment automation from code commit to production, improving consistency.</li>
                <li>Provisioned and managed AWS infrastructure (EC2, S3, IAM) using Terraform and developed Bash scripts for scalable deployments.</li>
              </ul>
            </div>

            <div className="relative border-l border-gray-700 ml-3 pl-8 pb-8">
              <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-gray-600 ring-4 ring-gray-900"></span>
              <h4 className="text-lg font-medium text-white">Web Developer Intern</h4>
              <p className="text-sm text-gray-400 mb-3">SQBE Infotech | Thane, Maharashtra • May 2019 - Jun 2019</p>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-gray-400">
                <li>Developed responsive web applications using HTML5 and PHP.</li>
                <li>Implemented backend logic for data processing and form handling.</li>
                <li>Utilized Git for version control, improving code management and collaboration.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="h-6 w-6 text-emerald-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>
            
            <div className="relative border-l border-gray-700 ml-3 pl-8 pb-8">
              <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-gray-900"></span>
              <h4 className="text-lg font-medium text-white">B.E. in Computer Science (AI & ML)</h4>
              <p className="text-sm text-gray-400 mb-3">Theem College of Engineering, Palghar • 2022 - 2025</p>
              <p className="text-sm text-gray-400">
                Bachelor of Engineering focused on Artificial Intelligence and Machine Learning.
              </p>
            </div>

            <div className="relative border-l border-gray-700 ml-3 pl-8">
              <span className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-gray-600 ring-4 ring-gray-900"></span>
              <h4 className="text-lg font-medium text-white">Diploma in Computer Engineering</h4>
              <p className="text-sm text-gray-400 mb-3">Pravin Patil Polytechnic, Thane • 2018 - 2021</p>
              <p className="text-sm text-gray-400">
                Core foundation in computer science, programming, and system architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
