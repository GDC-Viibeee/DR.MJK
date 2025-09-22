
import React from 'react';
import { GraduationCapIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300 font-rubik mb-12">{children}</h2>
);

const TimelineItem: React.FC<{ title: string; institution: string; year: string }> = ({ title, institution, year }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-700 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-cyan-400 after:border-4 after:box-content after:border-gray-700 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-cyan-200 bg-cyan-900 rounded-full">{year}</time>
      <div className="text-xl font-bold text-white">{title}</div>
    </div>
    <div className="text-gray-400 ml-0 sm:ml-36">{institution}</div>
  </div>
);

const About: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 bg-opacity-50">
      <div className="container mx-auto">
        <SectionTitle>About Dr. Mannam Jagadesh Kumar</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <img 
              src="https://picsum.photos/id/1005/400/400" 
              alt="Dr. Mannam Jagadeesh Kumar" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-500 shadow-lg shadow-cyan-500/20"
            />
          </div>
          <div className="md:col-span-2 text-lg text-gray-300">
            <p className="mb-4">
              A dedicated and compassionate neurosurgery specialist with a profound commitment to advancing neurological care. My philosophy is rooted in precision, innovation, and a patient-centric approach, ensuring the highest standards of treatment for complex neurological conditions.
            </p>
            <p>
              With a comprehensive background in general surgery and specialized training in neurosurgery, I am skilled in a wide array of procedures, from intricate spine and vascular surgeries to managing acute neurotrauma. My goal is to combine clinical excellence with empathetic care to improve patient lives.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
                 <span className="bg-cyan-900 text-cyan-200 text-sm font-medium px-4 py-2 rounded-full">Nationality: Indian</span>
                 <span className="bg-cyan-900 text-cyan-200 text-sm font-medium px-4 py-2 rounded-full">Languages: English, Telugu, Hindi</span>
            </div>
          </div>
        </div>

        <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-white mb-10 flex items-center justify-center gap-3">
                <GraduationCapIcon /> Educational Journey
            </h3>
            <div className="max-w-3xl mx-auto">
              <TimelineItem title="M.Ch Neurosurgery" institution="SAWAI MANN SINGH MEDICAL COLLEGE, JAIPUR, RAJASTHAN" year="2025" />
              <TimelineItem title="M.S General Surgery" institution="ALLURI SITA RAMA RAJU ACADEMY OF MEDICAL SCIENCES, ELURU, AP" year="2021" />
              <TimelineItem title="MBBS" institution="KONASEEMA INSTITUTE OF MEDICAL SCIENCES, AMALAPURAM, ANDHRA PRADESH " year="2018" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
