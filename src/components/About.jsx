import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading">About Me</h2>
          <p className="subheading">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-textSecondary">
              I am a passionate Java developer with expertise in building robust and scalable microservices using Spring Boot. My journey in software development has been focused on creating enterprise-grade applications that solve real-world problems.
            </p>
            <p className="text-textSecondary">
              With a strong foundation in Java and Spring Boot, I specialize in developing microservices architectures that are resilient, maintainable, and performant. I have experience with various Spring Boot features including Spring Cloud, Spring Security, and Spring Data JPA.
            </p>
            <p className="text-textSecondary">
              I am well-versed in modern development practices such as containerization with Docker, orchestration with Kubernetes, and implementing event-driven architectures using Apache Kafka. My approach to software development emphasizes clean code, design patterns, and best practices to ensure high-quality, maintainable solutions.
            </p>
            <p className="text-textSecondary">
              When I'm not coding, I enjoy exploring new technologies and sharing my knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest trends in Java and microservices development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-secondary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Java & Spring Boot Microservices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  RESTful API Design & Implementation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Event-Driven Architecture with Kafka
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Containerization & Orchestration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Database Design & Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  CI/CD Pipeline Implementation
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 