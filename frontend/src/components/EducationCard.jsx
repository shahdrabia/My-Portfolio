import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

const educationData = {
  logoSrc: 'https://images.pexels.com/photos/32703311/pexels-photo-32703311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  universityName: 'Benha University',
  faculty: 'Faculty of Computers and Artificial Intelligence',
  level: 'Undergraduate Student',
  startDate: 'Sep 2023',
  endDate: 'Jun 2027',
  location: 'Benha, Egypt',
};

export default function EducationCard() {
  const { logoSrc, universityName, faculty, level, startDate, endDate, location } = educationData;

  const MapPin = Icons?.['MapPin'] || Icons.HelpCircle;
  const Calendar = Icons?.['Calendar'] || Icons.HelpCircle;
  const GraduationCap = Icons?.['GraduationCap'] || Icons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="my-6 rounded-2xl border border-indigo-200/50 bg-white/10 backdrop-blur-md shadow-xl shadow-indigo-900/30 px-6 py-6"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="shrink-0 w-[60px] h-[60px] rounded-xl overflow-hidden bg-white/20 border border-indigo-300/30 flex items-center justify-center">
          <img
            src={logoSrc}
            alt="Benha University Logo"
            width={60}
            height={60}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/60x60/5D5FEF/ffffff?text=BU';
            }}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-jakarta text-lg font-bold text-white leading-snug tracking-tight truncate">
            {universityName}
          </h3>
          <p className="font-jakarta text-sm text-gray-200 mt-0.5 leading-relaxed">
            {faculty}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-2.5">
        <div className="flex items-center gap-2.5">
          <GraduationCap className="w-4 h-4 text-indigo-300 shrink-0" aria-hidden="true" />
          <span className="font-jakarta text-sm text-gray-300">{level}</span>
        </div>

        <div className="flex items-center gap-2.5">
          <Calendar className="w-4 h-4 text-indigo-300 shrink-0" aria-hidden="true" />
          <span className="font-jakarta text-sm text-gray-300">{startDate} &ndash; {endDate}</span>
        </div>

        <div className="flex items-center gap-2.5">
          <MapPin className="w-4 h-4 text-indigo-300 shrink-0" aria-hidden="true" />
          <span className="font-jakarta text-sm text-gray-300">{location}</span>
        </div>
      </div>
    </motion.div>
  );
}
