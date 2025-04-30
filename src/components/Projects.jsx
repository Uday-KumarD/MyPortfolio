import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectModal from './ProjectModal'

const projects = [
  {
    title: 'Real-Time Crypto Insights',
    description: 'A comprehensive cryptocurrency dashboard with live market data and analytics.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800',
    techStack: ['React', 'Redux Toolkit', 'Ant Design', 'Chart.js'],
    features: ['Live market data integration', 'Interactive charts with Chart.js', 'Responsive multi-page interface'],
    githubLink: 'https://github.com/Uday-KumarD/cryptoReact.git',
    liveLink: 'https://github.com/Uday-KumarD/cryptoReact.git'
  },
  {
    title: 'E-commerce Web App',
    description: 'A responsive e-commerce platform with modern features and seamless UX.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    techStack: ['React.js', 'Bootstrap', 'Axios'],
    features: ['Product filtering and search', 'Cart management system', 'Responsive design'],
    githubLink: 'https://github.com/Uday-KumarD/Shopify.git',
    liveLink: 'https://github.com/Uday-KumarD/Shopify.git'
  },
  {
    title: 'Spring Boot Task Tracker',
    description: 'A full-stack task management application with MVC architecture.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800',
    techStack: ['Spring Boot', 'MySQL', 'JSP'],
    features: ['CRUD operations', 'MVC architecture', 'MySQL database integration'],
    githubLink: 'https://github.com/Uday-KumarD/TaskTrackerJava.git',
    liveLink: 'https://github.com/Uday-KumarD/TaskTrackerJava.git'
  }
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-blue-950 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl shadow-xl overflow-hidden cursor-pointer bg-gradient-to-br from-gray-800 to-blue-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="relative h-56">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-4 py-2 bg-blue-600/20 text-gray-300 rounded-full text-sm border border-blue-500/20"
                      whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-6">
                  <motion.a
                    href={project.githubLink}
                    className="text-gray-300 hover:text-blue-400 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    onClick={e => e.stopPropagation()}
                  >
                    <i className="bi bi-github mr-2 text-lg"></i> Code
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    className="text-gray-300 hover:text-blue-400 flex items-center"
                    whileHover={{ scale: 1.05 }}
                    onClick={e => e.stopPropagation()}
                  >
                    <i className="bi bi-box-arrow-up-right mr-2 text-lg"></i> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects