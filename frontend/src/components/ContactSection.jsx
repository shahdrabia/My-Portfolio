import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const contactItems = [
  {
    id: 'email',
    label: 'Email',
    value: 'shahd.rabia@student.bu.edu.eg',
    href: 'mailto:shahd.rabia@student.bu.edu.eg',
    icon: 'Mail',
    copyable: true,
    color: 'text-violet-400',
    hoverBg: 'hover:bg-violet-500/10',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+20 100 234 5678',
    href: 'tel:+201002345678',
    icon: 'Phone',
    copyable: true,
    color: 'text-indigo-400',
    hoverBg: 'hover:bg-indigo-500/10',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/shahd-rabia',
    href: 'https://linkedin.com/in/shahd-rabia',
    icon: 'Linkedin',
    copyable: false,
    color: 'text-violet-300',
    hoverBg: 'hover:bg-violet-500/10',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ContactSection() {
  const [copiedId, setCopiedId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const handleCopy = (item) => {
    navigator.clipboard.writeText(item.value).then(() => {
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full py-20 px-4 sm:px-6 flex flex-col items-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="w-full max-w-xl"
      >
        <motion.div variants={itemVariants} className="mb-10 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-3 font-jakarta">
            Get in Touch
          </span>
          <h2 className="text-3xl font-bold text-white font-jakarta tracking-tight">
            Contact
          </h2>
          <p className="mt-3 text-sm text-white/50 font-jakarta leading-relaxed">
            Reach out for collaborations, opportunities, or just to say hello.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="rounded-2xl bg-white/5 backdrop-blur-[20px] border border-white/10 shadow-2xl shadow-indigo-950/40 py-10 px-8"
        >
          <div className="flex flex-col gap-4">
            {contactItems.map((item) => {
              const IconComponent = Icons[item.icon] || Icons.HelpCircle;
              const isCopied = copiedId === item.id;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`group flex items-center gap-4 rounded-xl p-4 transition-all duration-200 border border-white/5 ${item.hoverBg} cursor-pointer`}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 ${item.color}`}
                  >
                    <IconComponent size={18} strokeWidth={1.8} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-white/40 font-jakarta tracking-wider uppercase mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.id === 'linkedin' ? '_blank' : undefined}
                        rel={item.id === 'linkedin' ? 'noopener noreferrer' : undefined}
                        className={`text-sm font-medium font-jakarta truncate block transition-colors duration-150 ${item.color} hover:brightness-125 focus:outline-none focus-visible:underline`}
                        aria-label={`${item.label}: ${item.value}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className={`text-sm font-medium font-jakarta truncate block ${item.color}`}>
                        {item.value}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {item.id === 'linkedin' && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open LinkedIn profile"
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-150"
                      >
                        <Icons.ExternalLink size={15} strokeWidth={1.8} />
                      </a>
                    )}
                    {item.copyable && (
                      <button
                        onClick={() => handleCopy(item)}
                        aria-label={isCopied ? 'Copied!' : `Copy ${item.label}`}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-indigo-400 hover:bg-indigo-500/10 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                      >
                        {isCopied ? (
                          <Icons.Check size={15} strokeWidth={2} className="text-emerald-400" />
                        ) : (
                          <Icons.Copy size={15} strokeWidth={1.8} />
                        )}
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 pt-6 border-t border-white/8 text-center"
          >
            <p className="text-xs text-white/30 font-jakarta">
              Based in Benha, Egypt &mdash; Open to remote opportunities worldwide.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
