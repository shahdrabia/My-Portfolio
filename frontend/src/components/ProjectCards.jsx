import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Shoply App',
    tech: ['Flutter', 'Dart', 'Api'],
    category: 'Mobile App',
    description:
      'A mobile e-commerce application built using Flutter. The app allows users to browse products, view product details, and manage a simple shopping experience.',
    features: [
      'Browse products',
      'Responsive design for mobile screens',
      'Simple and clean UI',
      'View product details',
    ],
    icon: 'BrainCircuit',
    gradient: 'from-indigo-500/20 to-purple-600/20',
    accentColor: 'text-indigo-300',
    borderColor: 'border-indigo-500/30',
    glowColor: 'hover:shadow-indigo-500/20',
    link: 'https://github.com/shahdrabia/Shoply-App',
  },
  {
    id: 2,
    name: 'Coffee Shop',
    tech: ['Flutter', 'Dart', 'Firebase'],
    category: 'Mobile App',
    description:
      'A modern Flutter application for a coffee shop, powered by Firebase for authentication and real-time database.',
    features: [
      'User Authentication (Firebase Auth)',
      'Clean and modern UI',
      'Add to cart functionality',
      
    ],
    icon: 'Code2',
    gradient: 'from-purple-500/20 to-pink-500/20',
    accentColor: 'text-purple-300',
    borderColor: 'border-purple-500/30',
    glowColor: 'hover:shadow-purple-500/20',
    link: 'https://github.com/shahdrabia/coffee-app',
  },
  {
    id: 3,
    name: 'News App',
    tech: ['Flutter', 'Dart', 'REST API'],
    category: 'Mobile App',
    description:
      'A Flutter application that fetches and displays real-time news using a public API.',
    features: [
      'Category-based news',
      'Error handling for API requests',
      'Clean and responsive UI',
    
    ],
    icon: 'Stethoscope',
    gradient: 'from-sky-500/20 to-indigo-500/20',
    accentColor: 'text-sky-300',
    borderColor: 'border-sky-500/30',
    glowColor: 'hover:shadow-sky-500/20',
    link: 'https://github.com/shahdrabia/News-app',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 10,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

function TechBadge({ label }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-medium font-jakarta tracking-wide">
      {label}
    </span>
  );
}

function ProjectModal({ project, onClose }) {
  const IconComponent = Icons[project.icon] || Icons.HelpCircle;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        className="relative w-full max-w-lg bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 pointer-events-none`} />
        <div className="relative p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/10">
                <IconComponent size={22} className={project.accentColor} strokeWidth={1.75} />
              </div>
              <div>
                <p className={`text-xs font-medium font-jakarta tracking-widest uppercase mb-1 ${project.accentColor} opacity-80`}>
                  {project.category}
                </p>
                <h3 className="text-xl font-bold font-jakarta text-white leading-tight">
                  {project.name}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <Icons.X size={16} />
            </button>
          </div>

          <p className="text-sm font-jakarta text-white/60 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <p className="text-xs font-semibold font-jakarta tracking-widest uppercase text-white/30 mb-3">
              Key Features
            </p>
            <ul className="space-y-2.5">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icons.CheckCircle2
                    size={15}
                    className={`${project.accentColor} mt-0.5 shrink-0 opacity-90`}
                    strokeWidth={2}
                  />
                  <span className="text-sm font-jakarta text-white/70 leading-snug">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-xs font-semibold font-jakarta tracking-widest uppercase text-white/30 mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600/80 hover:bg-indigo-500/90 border border-indigo-400/30 text-white text-sm font-semibold font-jakarta transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
          >
            <Icons.ExternalLink size={15} strokeWidth={2} />
            View Project
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onDetails }) {
  const IconComponent = Icons[project.icon] || Icons.HelpCircle;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={`group relative flex flex-col min-w-[300px] bg-white/5 backdrop-blur-xl border ${project.borderColor} rounded-2xl shadow-2xl overflow-hidden cursor-default transition-shadow duration-300 ${project.glowColor} hover:shadow-2xl`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 pointer-events-none transition-opacity duration-300 group-hover:opacity-70`} />

      <div className="relative flex flex-col flex-1 p-7">
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/8 border border-white/10 shrink-0">
            <IconComponent size={20} className={project.accentColor} strokeWidth={1.75} />
          </div>
          <div>
            <p className={`text-xs font-medium font-jakarta tracking-widest uppercase ${project.accentColor} opacity-70 mb-0.5`}>
              {project.category}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold font-jakarta text-white mb-3 leading-tight">
          {project.name}
        </h2>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>

        <ul className="space-y-2 mb-7 flex-1">
          {project.features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <Icons.Dot
                size={18}
                className={`${project.accentColor} shrink-0 opacity-80 mt-0.5`}
              />
              <span className="text-sm font-jakarta text-white/60 leading-snug">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => onDetails(project)}
          aria-label={`View details for ${project.name}`}
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white/8 hover:bg-indigo-600/70 border border-white/10 hover:border-indigo-400/40 text-white/80 hover:text-white text-sm font-semibold font-jakarta transition-all duration-250 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
        >
          <Icons.LayoutGrid size={15} strokeWidth={2} />
          Project Details
        </button>
      </div>
    </motion.article>
  );
}

function ProjectCards() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative w-full py-20 px-4 sm:px-6"
      aria-label="Projects section"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-16 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <p className="text-xs font-semibold font-jakarta tracking-widest uppercase text-indigo-400 mb-3">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-jakarta text-white leading-tight">
            Projects
          </h2>
          <p className="mt-3 text-base font-jakarta text-white/50 max-w-xl leading-relaxed">
            A selection of Flutter mobile apps, AI integrations, and competitive programming tools built with precision and purpose.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDetails={setSelectedProject}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProjectCards;
