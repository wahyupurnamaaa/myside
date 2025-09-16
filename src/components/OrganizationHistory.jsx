import { motion } from 'framer-motion';

const organizations = [
  {
    name: 'English Squad Indonesia',
    period: 'Nov 2019 – Nov 2020',
    role: 'IT Staff - Research and Development',
    desc: 'Building/updating the ES website to control ES activities such as events, seminars, webinars, internal team recruitment using CMS.'
  },
  {
    name: 'English Corner',
    period: 'Sep 2017 – Oct 2017',
    role: 'Member',
    desc: 'Develop my speaking skills in English and grammar with fun way, Learn about writing, reading, listening, and speaking in English'
  },

];

const OrganizationHistory = () => {
  return (
    <section id="organization" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Organization History</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizations.map((o, idx) => (
            <motion.div
              key={o.name}
              className="glass rounded-2xl p-8 bg-white/60 backdrop-blur-md border border-white/50 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-semibold leading-snug">{o.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{o.period}</p>
              <p className="text-blue-600 font-semibold mt-4">{o.role}</p>
              <p className="text-gray-600 mt-3 leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationHistory;


