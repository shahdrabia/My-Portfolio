import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      className="w-full rounded-b-[20px] overflow-hidden"
    >
      <div
        className="relative w-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
        style={undefined}
      >
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white/50 text-xs font-jakarta tracking-wide select-none">
            © 2024 Shahd Rabia
          </span>

          <nav aria-label="Footer navigation" className="flex items-center gap-5 flex-wrap justify-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 text-xs font-jakarta tracking-wide transition-colors duration-200 hover:text-white focus:text-white focus:underline focus:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500/70 to-transparent" />
      </div>
    </motion.footer>
  );
}