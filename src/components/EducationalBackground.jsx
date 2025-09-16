import { motion } from 'framer-motion';

const cards = [
  {
    logo: '/b1.png',
    title: 'University of Esa Unggul',
    subtitle: "Master's in Computer Science (Part-Time Program)",
    period: 'January 2025 – Present'
  },
  {
    logo: '/b3.png',
    title: 'Digicode Bootcamp',
    subtitle: 'React Native',
    period: 'July 2025 – August 2025'
  },
  {
    logo: '/b2.png',
    title: 'University of Indraprasta PGRI',
    subtitle: "Bachelor's in Informatics",
    period: 'September 2015 – August 2019'
  }
];

const EducationalBackground = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Educational background</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              className="glass rounded-2xl p-8 flex items-start gap-4 bg-white/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img src={c.logo} alt={c.title} className="w-14 h-14 object-contain" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{c.title}</h3>
                <p className="text-gray-600 mt-1">{c.subtitle}</p>
                <p className="text-gray-500 mt-2 text-sm">{c.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalBackground;


