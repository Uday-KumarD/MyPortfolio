import { motion } from 'framer-motion'
import profileImage from '../assets/profileImage.jpg'

const Header = () => {
  return (
    <div id="home" className="min-h-screen flex items-center relative py-20 px-5 bg-gradient-to-br from-gray-900 to-blue-950">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Uday Kumar</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
Skilled in both frontend and backend web development, with hands-on expertise in building responsive full-stack applications using React.js, Node.js, and Spring Boot. Proficient in Java, JPA, and MySQL, with a focus on developing secure and scalable systems.            </motion.p>
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="https://github.com/Uday-KumarD"
                target="_blank"
                className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <i className="bi bi-github text-xl"></i>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/udaykumar1005"
                target="_blank"
                className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <i className="bi bi-linkedin text-xl"></i>
              </motion.a>
              <motion.a
                href="mailto:doddaudaykumar@gmail.com"
                className="p-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <i className="bi bi-envelope-fill text-xl"></i>
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-blue-800 rounded-3xl opacity-20 blur-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              <motion.img
                src={profileImage}
                alt="Uday Kumar"
                className="relative rounded-3xl shadow-2xl w-80 h-80 lg:w-90 lg:h-90 object-cover border-2 border-blue-500/20"
                whileHover={{ scale: 1.05}}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header