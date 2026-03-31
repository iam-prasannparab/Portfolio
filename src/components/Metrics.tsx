import { motion } from 'motion/react';

const metrics = [
  { value: '80%', label: 'Manual Effort Reduced' },
  { value: '5m', label: 'Deployment Time (down from 30m)' },
  { value: '<10m', label: 'AWS Setup Time' },
  { value: '100%', label: 'Infrastructure as Code' },
];

export default function Metrics() {
  return (
    <section className="py-12 bg-emerald-900/10 border-y border-emerald-500/10">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{metric.value}</div>
              <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
