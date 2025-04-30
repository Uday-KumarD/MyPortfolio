import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-blue-950">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="gap-10">
            <motion.div
              className="glass-effect p-8 rounded-2xl bg-gradient-to-br from-gray-800 to-blue-900"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm excited to collaborate on new projects, explore creative ideas, or join innovative teams. Reach out to start a conversation!
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <i className="bi bi-envelope-fill text-blue-400 mr-4 text-xl"></i>
                  <span className="text-gray-300">doddaudaykumar@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <i className="bi bi-telephone-fill text-blue-400 mr-4 text-xl"></i>
                  <span className="text-gray-300">+91-8317557768</span>
                </div>
                <div className="flex items-center">
                  <i className="bi bi-geo-alt-fill text-blue-400 mr-4 text-xl"></i>
                  <span className="text-gray-300">Hyderabad, India</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact