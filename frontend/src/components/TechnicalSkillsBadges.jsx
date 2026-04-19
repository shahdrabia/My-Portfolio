import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const skillCategories = [
  {
    label: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'C++', icon: 'Braces' },
      { name: 'Python', icon: 'Terminal' },
      { name: 'Dart', icon: 'Zap' },
      { name: 'Java', icon: 'Coffee' },
      { name: 'C', icon: 'FileCode' },
      { name: 'SQL', icon: 'Database' },
    ],
  },
  {
    label: 'Frameworks & Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Flutter', icon: 'Smartphone' },
      { name: 'Firebase', icon: 'Flame' },
      { name: 'Git', icon: 'GitBranch' },
      { name: 'GitHub', icon: 'Github' },
      { name: 'VS Code', icon: 'Code' },
      { name: 'Android Studio', icon: 'Layers' },
    ],
  },
  {
    label: 'Concepts',
    icon: 'Lightbulb',
    skills: [
      { name: 'Data Structures', icon: 'Network' },
      { name: 'Algorithms', icon: 'Cpu' },
      { name: 'OOP', icon: 'Box' },
      { name: 'State Management', icon: 'Activity' },
      { name: 'REST APIs', icon: 'Globe' },
      { name: 'UI/UX Design', icon: 'Palette' },
    ],
  },
  {
    label: 'Competitive Programming',
    icon: 'Trophy',
    skills: [
      { name: 'Codeforces', icon: 'BarChart2' },
      { name: 'LeetCode', icon: 'Star' },
      { name: 'Problem Solving', icon: 'Puzzle' },
      { name: 'Graph Theory', icon: 'Share2' },
      { name: 'Dynamic Programming', icon: 'TrendingUp' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

function SkillBadge({ name, iconName }) {
  const IconComponent = Icons?.[iconName] || Icons.HelpCircle;

  return (
    <motion.span
      variants={badgeVariants}
      whileHover={{ scale: 1.06, y: -2 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-indigo-400/20 text-indigo-200 text-sm font-semibold tracking-wide cursor-default select-none backdrop-blur-sm transition-all duration-300 hover:bg-indigo-500/15 hover:border-indigo-400/60 hover:shadow-lg hover:shadow-indigo-500/20 min-w-6"
    >
      <IconComponent size={14} className="shrink-0 text-indigo-300/80" strokeWidth={2} />
      {name}
    </motion.span>
  );
}

function CategorySection({ label, icon, skills }) {
  const HeaderIcon = Icons?.[icon] || Icons.HelpCircle;

  return (
    <motion.div
      variants={categoryVariants}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center gap-2">
        <HeaderIcon size={15} className="text-indigo-400/70" strokeWidth={2} />
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-300/60">
          {label}
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/20 to-transparent ml-1" />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="flex flex-wrap gap-3"
      >
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} iconName={skill.icon} />
        ))}
      </motion.div>
    </motion.div>
  );
}

function TechnicalSkillsBadges() {
  return (
    <section
      id="skills"
      className="w-full py-16 px-4 md:px-8"
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="block w-8 h-px bg-indigo-400/50" />
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400/70">
              Technical Skills
            </span>
          </div>
          <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-white leading-tight">
            Tools & Technologies
          </h2>
          <p className="mt-3 text-indigo-200/50 text-sm md:text-base max-w-xl font-jakarta font-normal leading-relaxed">
            A curated stack spanning competitive programming, mobile development, and AI fundamentals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="relative rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 md:p-10 shadow-xl shadow-indigo-900/20 flex flex-col gap-10"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[20px] pointer-events-none overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-purple-700/8 rounded-full blur-2xl" />
          </div>

          {skillCategories.map((cat) => (
            <CategorySection
              key={cat.label}
              label={cat.label}
              icon={cat.icon}
              skills={cat.skills}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechnicalSkillsBadges;
