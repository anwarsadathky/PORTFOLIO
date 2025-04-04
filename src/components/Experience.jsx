import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Litmus7',
    period: 'July 2024 - Present',
    description: 'Working on building scalable and efficient software solutions.',
  },
  {
    title: 'B.Tech in Computer Science',
    company: 'APJ Abdul Kalam Technological University',
    period: '2020 - 2024',
    description: 'Graduated with a CGPA of 7.5. Focused on software development and computer science fundamentals.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading">Experience</h2>
          <p className="subheading">My journey so far</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-primary/50 p-6 rounded-lg border border-secondary/20 hover:border-secondary/40 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary">{exp.title}</h3>
                  <p className="text-textPrimary">{exp.company}</p>
                </div>
                <p className="text-textSecondary mt-2 md:mt-0">{exp.period}</p>
              </div>
              <p className="text-textSecondary">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 