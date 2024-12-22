import { motion } from "framer-motion";

export default function OpenSource() {
  return (
    <section id="opensource" className="py-16 px-4 ">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Open Source Contributions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Real Dev Squad
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Software Developer (September 2023)
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              Integrated global state management using{" "}
              <strong>Redux-Saga</strong> and{" "}
              <strong>encrypted-local-storage</strong> for secure data handling.
            </li>
            <li>
              Implemented local feature flagging and created different builds
              for different environments using{" "}
              <strong>React Native Config</strong>.
            </li>
            <li>
              Link:
              <a
                href="https://realdevsquad.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Real Dev Squad
              </a>
              ,
              <a
                href="https://github.com/Real-Dev-Squad/mobile-app/pulls?q=is%3Apr+is%3Aclosed+author%3Amohammadkhizerkhan"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                PR's merged
              </a>
              .
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
