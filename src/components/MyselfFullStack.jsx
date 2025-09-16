import { motion } from 'framer-motion';

const strengths = [
  'Highly empathetic, understanding user needs',
  'Creative and innovative in design',
  'Detail-oriented, producing clean and efficient code',
  'Strong commitment to quality and aesthetics'
];

const challenges = [
  'Perfectionist, may spend extra time perfecting details',
  'Overly sensitive to criticism, learning to accept feedback',
  'Often overwhelmed by tasks, improving time management'
];

const MyselfFullStack = () => {
  return (
    <section id="myself" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Myself as a Full Stack Developer</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            I craft end‑to‑end web solutions and mobile solutions — building intuitive, responsive UIs with React and
            Tailwind CSS, and developing scalable APIs and services with Node.js and Express. I care
            about clean code, performance, and great developer experience while integrating
            databases, authentication, and modern tooling to deliver reliable products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="rounded-2xl p-8 bg-white/60 backdrop-blur-md border border-white/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💡</span>
              <h3 className="text-2xl font-semibold text-gray-800">Strength</h3>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              {strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="rounded-2xl p-8 bg-white/60 backdrop-blur-md border border-white/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚠️</span>
              <h3 className="text-2xl font-semibold text-gray-800">Challenges</h3>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-3">
              {challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MyselfFullStack;


