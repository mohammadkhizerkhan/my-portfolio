import { motion } from 'framer-motion';
import { icons, SkillIconType } from './icons';

interface SkillCardProps {
  skill: string;
}

export function SkillCard({ skill }: SkillCardProps) {
  const icon = icons[skill as SkillIconType];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
    >
      {icon}
      <span className="text-gray-900 dark:text-gray-100">{skill}</span>
    </motion.div>
  );
}