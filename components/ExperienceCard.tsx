'use client';

import { motion } from 'framer-motion';

interface Project {
  title: string;
  bullets: string[];
}

interface Company {
  icon: JSX.Element;
  name: string;
  since: string;
  projects: Project[];
}

interface ExperienceCardProps {
  company: Company;
}

export const ExperienceCard = ({ company }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-30 pointer-events-none transition-opacity duration-500 hover:opacity-50"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="p-4 bg-primary-600 rounded-full text-white dark:bg-primary-700">
            {company.icon}
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{company.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{company.since}</p>
          </div>
        </div>
        {company.projects.map((project, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project.title}</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {project.bullets.map((bullet, index) => (
                <li key={index} className="ml-4 flex items-baseline">
                  <span className="mr-2">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
