import { motion } from 'framer-motion'

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-800 to-blue-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-72 object-cover rounded-t-2xl" />
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-800/80 p-3 rounded-full hover:bg-gray-700"
            whileHover={{ scale: 1.1 }}
          >
            <i className="bi bi-x text-white text-2xl"></i>
          </motion.button>
        </div>
        <div className="p-8">
          <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>
          <div className="mb-8">
            <h4 class consiglio="text-lg font-semibold text-gray-300 mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-blue-600/20 text-gray-300 rounded-full text-sm border border-blue-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-300 mb-3">Key Features</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
            <a
              href={project.githubLink}
              target="_blank"
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              View Code
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg text-center hover:bg-blue-700 transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal