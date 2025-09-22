
import React from 'react';
import { specializations } from '../constants';
import type { Specialization } from '../types';

const SpecializationCard: React.FC<{ item: Specialization }> = ({ item }) => (
  <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-cyan-500/20">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cyan-900 text-cyan-300">
        {item.icon}
    </div>
    <h3 className="mb-2 text-xl font-bold text-white font-rubik">{item.title}</h3>
    <p className="text-gray-400">{item.description}</p>
  </div>
);

const Specializations: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300 font-rubik mb-12">
          Specializations & Procedures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((item, index) => (
            <SpecializationCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
