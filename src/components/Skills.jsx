import { motion } from 'framer-motion';
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiSpring,
  SiDocker,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiSpringboot,
  SiIntellijidea,
  SiApachekafka
} from 'react-icons/si';
import { FaAws, FaJava, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMysql,
  SiPostman,
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: '#FE315D' },
    { name: 'Kafka', icon: SiApachekafka, color: '#88DDFF' }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading">Skills</h2>
          <p className="subheading">Technologies I work with</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="skill-card flex flex-col items-center justify-center gap-2"
              >
                <Icon className="skill-icon" style={{ color: skill.color }} />
                <span className="text-sm text-textSecondary">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 