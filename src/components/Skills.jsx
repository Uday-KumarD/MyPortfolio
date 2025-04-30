import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: 'bi-code-slash',
    skills: ['Python', 'Java(17+)', 'JavaScript(ES6+)', 'MySQL'],
  },
  {
    title: 'Web Development',
    icon: 'bi-globe2',
    skills: ['HTML', 'CSS', 'React.js', 'Redux', 'Bootstrap', 'Ant Design', 'Spring Boot', 'Node.js', 'RESTful APIs'],
  },
  {
    title: 'Tools & Platform',
    icon: 'bi-tools',
    skills: ['Maven', 'Spring MVC', 'JDBC', 'Git (GitHub)', 'Vite', 'MongoDB', 'VS Code'],
  },
  {
    title: 'Other Skills',
    icon: 'bi-gear-fill',
    skills: ['Data Structures and Algorithms', 'Object Oriented Programming', 'Agile Methodology', 'Scrum', 'Tailwind CSS'],
  },
  {
    title: 'Familiar With',
    icon: 'bi-terminal-fill',
    skills: ['Azure', 'CI/CD pipelines', 'Docker'],
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-blue-950 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-8 shadow-xl bg-gradient-to-br from-gray-800 to-blue-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600/20 rounded-full">
                  <i className={`bi ${category.icon} text-blue-400 text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-600/10 text-gray-300 rounded-full text-sm border border-blue-500/20"
                    whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills