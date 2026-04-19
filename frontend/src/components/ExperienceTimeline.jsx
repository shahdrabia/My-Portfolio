import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Flutter Mobile Development Trainee',
    organization: 'National Telecommunication Institute (NTI)',
    duration: 'Aug - Sep 2025',
    type: 'Training',
    icon: 'Smartphone',
    description: 'Intensive hands-on track covering Flutter SDK, Dart language, state management with Provider and BLoC and REST API integration.',
  },
  
  {
    id: 2,
    title: 'Competitive Programming Participant',
    organization: 'ICPC – Benha University Chapter',
    duration: 'Sep 2023',
    type: 'Activity',
    icon: 'Code2',
    description: 'Active member solving  problems on Codeforces and LeetCode; participated in regional ICPC qualifier rounds focusing on graph theory and dynamic programming.',
  },
  {
    id: 1,
    title: 'working with Freelance team',
    organization: 'freelance',
    duration: 'April - May 2026',
    type: 'freelancer',
    icon: 'Smartphone',
    description: ' Collaborated with a freelance team to deliver real-world projects.',
  },
 

];

const typeColors = {
  Training: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30',
  Activity: 'text-violet-300 bg-violet-500/10 border-violet-500/30',
  Course: 'text-sky-300 bg-sky-500/10 border-sky-500/30',
  Education: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariantsLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-14 text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3 font-jakarta">
            Career Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-jakarta tracking-tight">
            Experience &amp; Education
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base font-jakarta max-w-xl mx-auto">
            A chronological view of my academic journey, training programs, and competitive programming involvement.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/80 via-violet-500/60 to-indigo-500/10 md:left-1/2 md:-translate-x-px" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col gap-10"
          >
            {experiences.map((item, index) => {
              const IconComponent = Icons?.[item.icon] || Icons.HelpCircle;
              const isEven = index % 2 === 0;
              const badgeClass = typeColors[item.type] || 'text-gray-300 bg-gray-500/10 border-gray-500/30';

              return (
                <div key={item.id} className="relative flex items-start gap-6 md:gap-0">
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#0d0d1f] border-2 border-indigo-500/60 shadow-lg shadow-indigo-500/20 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 shadow-sm shadow-indigo-400/60" />
                  </div>

                  <motion.div
                    variants={isEven ? itemVariantsLeft : itemVariantsRight}
                    className={`flex-1 md:w-[45%] md:flex-none ${
                      isEven
                        ? 'md:mr-auto md:pr-12 md:text-right'
                        : 'md:ml-auto md:pl-12 md:text-left md:self-end'
                    }`}
                  >
                    <div
                      className="group relative rounded-[20px] p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-xl shadow-indigo-900/10 hover:border-indigo-500/40 hover:bg-white/8 transition-all duration-300"
                    >
                      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : 'flex-row'}`}>
                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-indigo-400" strokeWidth={1.8} />
                        </div>
                        <span
                          className={`inline-block text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border font-jakarta ${badgeClass}`}
                        >
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-white font-semibold text-[17px] leading-snug font-jakarta mb-1">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 text-sm italic font-jakarta mb-0.5">
                        {item.organization}
                      </p>

                      <div className={`flex items-center gap-1.5 mt-1 mb-3 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <Icons.Calendar className="w-3 h-3 text-indigo-400/70" strokeWidth={1.8} />
                        <span className="text-gray-500 text-xs font-jakarta">{item.duration}</span>
                      </div>

                      <p className="text-gray-400 text-sm font-jakarta leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeline;
