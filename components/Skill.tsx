import { skills } from "@/app/constants";
import { SkillCard } from "./SkillCard";
import { motion } from "framer-motion";

export default function Skill() {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
