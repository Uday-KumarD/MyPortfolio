import { motion } from 'framer-motion'

const education = [
  {
    year: '2020 - 2024',
    title: 'Bachelor of Technology',
    organization: 'National Institute of Technology',
    location: 'Tadepalligudem, Andhra Pradesh',
    description: 'Electronics and Communication Engineering; GPA: 6.81'
  },
  {
    year: '2018 - 2020',
    title: 'Higher Secondary Education',
    organization: 'Chaitanya Junior College',
    location: 'Nandigama, Andhra Pradesh',
    description: 'GPA: 9.65'
  },
  {
    year: '2018',
    title: 'Secondary Education',
    organization: 'Apollo EM High School',
    location: 'Nandigama, Andhra Pradesh',
    description: 'CGPA: 9.7'
  }
]

const experience = [
  {
    year: 'Oct 2024 - March 2025',
    title: 'Frontend Developer',
    organization: 'Social Tek',
    location: 'Hyderabad',
    description: 'Crafted 10+ reusable components with React, Redux, and Ant Design. Developed Node.js backend with Express, implemented JWT authentication, and configured role-based access.'
  }
]

const Timeline = () => {
  const items = [...education, ...experience].sort((a, b) => {
    // Extract the start year (first year in the string or the only year)
    const getStartYear = (yearStr) => {
      const year = yearStr.includes('-') ? yearStr.split(' - ')[0] : yearStr
      return parseInt(year.match(/\d{4}/)[0], 10)
    }
    return getStartYear(b.year) - getStartYear(a.year)
  })

  return (
    <section id="timeline" className="py-24 bg-gradient-to-br from-gray-900 to-blue-950">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Journey
        </motion.h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20"></div>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center justify-between mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <motion.div
                  className="glass-effect p-8 rounded-2xl shadow-xl bg-gradient-to-br from-gray-800 to-blue-900"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="text-blue-400 font-semibold text-lg">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white mt-3">{item.title}</h3>
                  <div className="text-blue-300 font-medium mt-2">{item.organization}</div>
                  <div className="text-gray-400 text-sm mt-1">{item.location}</div>
                  <p className="text-gray-300 mt-4">{item.description}</p>
                </motion.div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.div
                  className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white/20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                />
                <motion.div
                  className="w-5 h-5 bg-blue-500 rounded-full absolute top-0 opacity-50"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1.5, opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 1, repeat: Infinity }}
                />
              </div>
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline