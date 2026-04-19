import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const contacts = [
  {
    id: 'phone',
    label: '+20 100 397 5652',
    icon: 'Phone',
    href: 'tel:+201003975652',
  },
  {
    id: 'email',
    label: 'shahdrabia12@gmail.com',
    icon: 'Mail',
    href: 'mailto:shahdrabia12@gmail.com',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: 'Linkedin',
    href: 'https://www.linkedin.com/in/shahdrabia/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a0a1a] px-4 py-20">

      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2e] to-[#0a0a1a]" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#5D5FEF]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8F67FF]/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex flex-col items-center text-center bg-white/5 backdrop-blur-[20px] border border-white/10 rounded-2xl py-16 px-8 md:px-12 shadow-xl shadow-indigo-950/40"
        >

          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 rounded-2xl" style={{background: 'linear-gradient(135deg, rgba(93,95,239,0.18) 0%, rgba(143,103,255,0.10) 50%, rgba(93,95,239,0.06) 100%)'}} />
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                background:
                  'linear-gradient(135deg, transparent 0%, rgba(93,95,239,0.12) 40%, rgba(143,103,255,0.18) 60%, transparent 100%)',
              }}
            />
          </div>

          <motion.div variants={itemVariants} className="mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-lg shadow-indigo-500/30">
  <img
    src="https://drive.google.com/file/d/1AXAodbxZuYkQAf2N4dGeZN1msWtKmVRC/view?usp=drive_link"
    alt="Shahd Rabia"
    className="w-full h-full object-cover"
  />
</div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-jakarta font-bold text-5xl text-white tracking-tight leading-tight mb-3"
          >
            Shahd Rabia
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-jakarta text-2xl font-semibold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-3"
          >
            Flutter Developer &amp; CS Student
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-gray-200 text-base font-jakarta font-medium mb-10"
          >
            <Icons.MapPin size={16} className="text-indigo-400 shrink-0" />
            <span>Benha, Qalyubia, Egypt</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 w-full"
          >
            {contacts.map((contact) => {
              const IconComponent = Icons?.[contact.icon] || Icons.HelpCircle;
              return (
                <motion.a
                  key={contact.id}
                  href={contact.href}
                  target={contact.id === 'linkedin' ? '_blank' : undefined}
                  rel={contact.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm font-jakarta font-medium transition-all duration-300 hover:bg-indigo-500/20 hover:border-indigo-400/40 hover:text-indigo-200 hover:shadow-md hover:shadow-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label={contact.label}
                >
                  <IconComponent size={15} className="shrink-0" />
                  <span>{contact.label}</span>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-3"
          >
            <a
              href="#projects"
              className="font-jakarta font-semibold text-sm px-7 py-3 rounded-full bg-gradient-to-r from-[#5D5FEF] to-[#8F67FF] text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
              aria-label="View my projects"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="font-jakarta font-semibold text-sm px-7 py-3 rounded-full border border-white/15 text-gray-200 hover:border-indigo-400/50 hover:text-indigo-200 hover:bg-white/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
              aria-label="Get in touch"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
