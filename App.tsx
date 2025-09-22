
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specializations from './components/Specializations';
import Research from './components/Research';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const specializationsRef = useRef<HTMLDivElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const navRefs = {
    about: aboutRef,
    specializations: specializationsRef,
    research: researchRef,
    achievements: achievementsRef,
    contact: contactRef,
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0a0a1a] text-gray-200">
      <Header navRefs={navRefs} scrollToSection={scrollToSection} />
      <main>
        <Hero onExplore={() => scrollToSection(aboutRef)} />
        <div ref={aboutRef}><About /></div>
        <div ref={specializationsRef}><Specializations /></div>
        <div ref={researchRef}><Research /></div>
        <div ref={achievementsRef}><Achievements /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
       <footer className="text-center p-8 bg-black bg-opacity-20">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Dr. Mannam Jagadeesh Kumar. All Rights Reserved.</p>
       </footer>
    </div>
  );
};

export default App;
