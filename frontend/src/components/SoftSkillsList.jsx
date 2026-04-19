import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const softSkills = [
  { id: 1, label: 'Effective Communication', icon: 'MessageCircle' },
  { id: 2, label: 'Team Collaboration', icon: 'Users' },
  { id: 3, label: 'Problem-Solving Mindset', icon: 'Lightbulb' },
  { id: 5, label: 'Time Management', icon: 'Clock' },

];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

function SoftSkillsList() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={containerVariants}
      className="relative rounded-[20px] border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-xl shadow-indigo-950/30 overflow-hidden"
    >
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-indigo-600/10 via-purple-700/5 to-transparent pointer-events-none" />

      <motion.h2
        variants={itemVariants}
        className="text-2xl font-bold font-jakarta text-indigo-400 mb-6 tracking-tight"
      >
        Soft Skills
      </motion.h2>

      <ul className="flex flex-col gap-3">
        {softSkills.map((skill) => {
          const IconComponent = Icons[skill.icon] || Icons.HelpCircle;
          return (
            <motion.li
              key={skill.id}
              variants={itemVariants}
              className="flex items-center gap-3 group"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500/15 border border-indigo-400/20 text-indigo-300 shrink-0 group-hover:bg-indigo-500/25 group-hover:border-indigo-400/40 transition-all duration-300">
                <IconComponent size={13} strokeWidth={2.2} />
              </span>
              <span className="text-[18px] font-jakarta font-normal text-white/85 leading-snug group-hover:text-white transition-colors duration-300">
                {skill.label}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default SoftSkillsList;
