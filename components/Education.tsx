import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Sri Siddhartha Institute Of Technology
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            B.Tech in ISE (2017-2021)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
