import React, { Suspense } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationCard from '../components/EducationCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectCards from '../components/ProjectCards';
import TechnicalSkillsBadges from '../components/TechnicalSkillsBadges';
import SoftSkillsList from '../components/SoftSkillsList';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function SectionDivider() {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-6 md:px-12">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
    </div>
  );
}

function SkillsWrapper() {
  return (
    <section id="skills" className="w-full py-4">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
        <TechnicalSkillsBadges />
        <div className="mt-10 px-0">
          <SoftSkillsList />
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="w-full py-6">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-4">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-2 font-jakarta">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-jakarta tracking-tight">
            Education
          </h2>
        </div>
        <EducationCard />
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="relative min-h-screen bg-[#07071a] font-jakarta overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#07071a] via-[#0d0d2b] to-[#07071a]" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-indigo-700/10 rounded-full blur-[160px]" />
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-purple-700/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-[10%] left-[-8%] w-[450px] h-[450px] bg-violet-600/8 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={undefined}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 flex flex-col">
          <div className="pt-16">
            <HeroSection />
          </div>

          <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-0 px-0">
            <SectionDivider />

            <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8">
              <AboutSection />
            </div>

            <SectionDivider />

            <EducationSection />

            <SectionDivider />
          </div>

          <ExperienceTimeline />

          <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-0 px-0">
            <SectionDivider />
          </div>

          <Suspense
            fallback={
              <div className="w-full flex items-center justify-center py-24">
                <div className="w-10 h-10 rounded-full border-2 border-indigo-500/40 border-t-indigo-400 animate-spin" />
              </div>
            }
          >
            <ProjectCards />
          </Suspense>

          <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-0 px-0">
            <SectionDivider />
          </div>

          <Suspense
            fallback={
              <div className="w-full flex items-center justify-center py-20">
                <div className="w-8 h-8 rounded-full border-2 border-indigo-500/40 border-t-indigo-400 animate-spin" />
              </div>
            }
          >
            <SkillsWrapper />
          </Suspense>

          <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-0 px-0">
            <SectionDivider />
          </div>

          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
