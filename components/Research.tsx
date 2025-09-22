
import React from 'react';
import { publications } from '../constants';
import type { Publication } from '../types';

const PublicationCard: React.FC<{ item: Publication }> = ({ item }) => {
    const getTypeStyles = (type: Publication['type']) => {
        switch(type) {
            case 'Thesis': return 'bg-purple-900 text-purple-200';
            case 'Paper': return 'bg-blue-900 text-blue-200';
            case 'Poster': return 'bg-teal-900 text-teal-200';
            default: return 'bg-gray-700 text-gray-200';
        }
    };

    return (
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg border border-gray-700 transition-shadow duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white font-rubik pr-4">{item.title}</h3>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getTypeStyles(item.type)}`}>
                    {item.type}
                </span>
            </div>
            {item.journal && <p className="text-sm font-semibold text-cyan-400 mb-2">{item.journal}</p>}
            <p className="text-gray-400">{item.details}</p>
        </div>
    );
};

const Research: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-gray-900 bg-opacity-50">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300 font-rubik mb-12">
                    Research & Publications
                </h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {publications.map((item, index) => (
                        <PublicationCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
