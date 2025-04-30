import { motion } from 'framer-motion'

const About = () => {
  const achievements = [
    {
      icon: 'bi-code-slash',
      title: 'Coding Challenges',
      description: 'Solved over 200 coding challenges across multiple platforms, showcasing expertise in algorithms and data structures.',
      bg: 'bg-gradient-to-br from-gray-800 to-blue-900'
    },
    {
      icon: 'bi-hdd-network',
      title: 'HackerRank Rating',
      description: 'Earned a 5-star rating on HackerRank, highlighting advanced coding proficiency.',
      bg: 'bg-gradient-to-br from-gray-800 to-blue-900'
    },
    {
      icon: 'bi-award-fill',
      title: 'Certifications',
      description: 'Completed Data Structures course from Udemy and Web Development course from Social Tek.',
      bg: 'bg-gradient-to-br from-gray-800 to-blue-900'
    }
  ]

  return (
    <div id="about" className="py-24 bg-gradient-to-br from-gray-900 to-blue-950">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className={`glass-effect p-8 rounded-2xl shadow-xl ${item.bg} flex flex-col items-center text-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                <i className={`bi ${item.icon} text-blue-400 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About