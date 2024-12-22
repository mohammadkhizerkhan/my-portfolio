import { experienceContent } from "@/app/constants";
import { ExperienceCard } from "./ExperienceCard";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Experience
        </motion.h2>
        {experienceContent.map((company, index) => (
          <ExperienceCard key={index} company={company} />
        ))}
      </div>
    </section>
  );
}
