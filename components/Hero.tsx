
import React from 'react';
import AnimatedBrain from './AnimatedBrain';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#0a0a1a] to-[#1a1a3a]">
      <div className="absolute inset-0 z-0">
        <AnimatedBrain />
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white font-rubik tracking-tight animate-fade-in-down">
          Dr. Mannam Jagadeesh Kumar
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-cyan-300 animate-fade-in-up animation-delay-300">
          Neurosurgery Specialist
        </p>
        <p className="mt-2 text-lg md:text-xl text-gray-300 animate-fade-in-up animation-delay-500">
          Pioneering Excellence in Neurological Care
        </p>
        <button
          onClick={onExplore}
          className="mt-8 px-8 py-3 bg-cyan-500 text-white font-bold rounded-full hover:bg-cyan-400 transition-transform transform hover:scale-105 duration-300 animate-fade-in-up animation-delay-700"
        >
          Explore My Expertise
        </button>
      </div>
    </section>
  );
};

export default Hero;
