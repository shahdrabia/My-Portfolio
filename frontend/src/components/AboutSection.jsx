import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';

const bulletPoints = [
  {
    icon: 'GraduationCap',
    text: 'Computer and AI student at Benha University, combining theoretical foundations with applied engineering.'
  },
  {
    icon: 'Smartphone',
    text: 'Specialized in Flutter and mobile development — building cross-platform apps with clean architecture and polished UX.'
  },
  {
    icon: 'Code2',
    text: 'Competitive programmer with a track record in algorithmic problem-solving, data structures, and optimization challenges.'
  },
  {
    icon: 'Brain',
    text: 'Passionate about the intersection of artificial intelligence and real-world product development.'
  },
  {
    icon: 'Layers',
    text: 'Currently building end-to-end mobile solutions while deepening expertise in ML models and intelligent systems.'
  }
];

const containerVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full py-20 px-4 sm:px-6 flex justify-center items-start overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative w-full max-w-2xl"
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={[
            'relative rounded-[20px] pt-8 pb-6 px-10',
            'bg-white/5 backdrop-blur-md',
            'border border-white/10',
            'shadow-xl shadow-indigo-900/30',
            'transition-shadow duration-500',
            hovered ? 'shadow-2xl shadow-indigo-700/40' : ''
          ].join(' ')}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-6"
          >
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-[20px] bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/40 z-10 relative">
                <Icons.User className="text-white w-7 h-7" strokeWidth={1.6} />
              </div>
              <div className="absolute inset-0 w-14 h-14 rounded-[20px] bg-indigo-500/50 blur-md -z-0" />
            </div>
            <div>
              <h2 className="font-jakarta text-2xl font-bold text-indigo-400 tracking-tight leading-tight">
                About
              </h2>
              <p className="font-jakarta text-sm text-white/40 font-medium tracking-wide mt-0.5">
                Shahd Rabia · Benha University
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full h-px bg-gradient-to-r from-indigo-500/40 via-purple-500/20 to-transparent mb-6" />

          <ul className="space-y-4">
            {bulletPoints.map((point, index) => {
              const IconComponent = Icons[point.icon] || Icons.HelpCircle;
              return (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-500/20 group-hover:border-indigo-400/40">
                    <IconComponent
                      className="w-4 h-4 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300"
                      strokeWidth={1.8}
                    />
                  </div>
                  <p className="font-jakarta text-white/75 text-sm leading-relaxed font-normal transition-colors duration-300 group-hover:text-white/90">
                    {point.text}
                  </p>
                </motion.li>
              );
            })}
          </ul>

          <motion.div variants={itemVariants} className="mt-6 pt-5 border-t border-white/8 flex flex-wrap gap-2">
            {['Flutter', 'Dart', 'C++', 'Competitive Programming', 'AI & ML', 'Mobile Dev'].map((tag) => (
              <span
                key={tag}
                className="font-jakarta text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 tracking-wide hover:bg-indigo-500/20 hover:border-indigo-400/40 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
