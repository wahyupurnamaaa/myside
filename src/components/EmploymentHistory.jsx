import { motion } from 'framer-motion';

const employmentData = [
  {
    title: 'Teller Payment Point',
    period: 'Aug 2017 - Now',
    company: 'bank bjb',
    description: 'Processed over 100 +/- daily transactions including deposits, withdrawals, and payments accurately and efficiently. Balanced cash drawers at shift end. Supported sales by identifying customer needs and promoting bank offers. Resolved customer inquiries and complaints professionally, ensuring satisfaction through patience and a positive attitude.'
  },
  {
    title: 'Student Internship',
    period: 'Feb 2019 - Mar 2019',
    company: 'PT Suma Karya Gemilang',
    description: 'Analyzed business processes to design effective solutions. Developed a Java/MySQL inventory application using NetBeans that streamlined operations—managing stock, orders, item tracking, and reporting—reducing paperwork by 75%. Improved existing software performance, quality, and responsiveness by 20% through bottleneck and bug resolution.'
  },

];

const EmploymentHistory = () => {
  return (
    <section id="employment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Employment history
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {employmentData.map((job, idx) => (
            <motion.div
              key={job.company}
              className="text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{job.period}</p>
              <p className="text-lg font-bold text-gray-800 mb-4">{job.company}</p>
              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmploymentHistory;
