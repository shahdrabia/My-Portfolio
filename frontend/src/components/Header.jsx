import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const MenuIcon = Icons.Menu;
  const XIcon = Icons.X;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/5 backdrop-blur-[20px] border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent backdrop-blur-[8px]'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-8 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-2xl font-bold font-jakarta text-white tracking-tight drop-shadow-[0_2px_8px_rgba(93,95,239,0.5)] hover:drop-shadow-[0_2px_16px_rgba(143,103,255,0.8)] transition-all duration-300 select-none"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Shahd Rabia
        </motion.a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="relative text-white/80 font-jakarta font-semibold text-base tracking-wide hover:text-white transition-colors duration-300 group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.07 }}
              aria-label={`Navigate to ${link.label} section`}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-gradient-to-r from-[#5D5FEF] to-[#8F67FF] rounded-full group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-[20px] bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#5D5FEF]/60"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={menuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-white/5 backdrop-blur-[20px] border-t border-white/10"
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col px-8 py-4 gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-white/80 font-jakarta font-semibold text-base tracking-wide py-3 px-4 rounded-[20px] hover:bg-white/10 hover:text-white transition-all duration-300"
              initial={{ opacity: 0, x: -16 }}
              animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: menuOpen ? i * 0.06 : 0 }}
              aria-label={`Navigate to ${link.label} section`}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}

export default Header;
