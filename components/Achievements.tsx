
import React from 'react';
import { achievements } from '../constants';
import { AwardIcon, TrendingUpIcon } from './Icons';
import type { Achievement } from '../types';

const AchievementCard: React.FC<{item: Achievement}> = ({item}) => (
    <div className="flex items-start space-x-4 p-4">
        <div className="flex-shrink-0">
             <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-cyan-400">
                {item.category === 'Award' ? <AwardIcon/> : <TrendingUpIcon/>}
             </div>
        </div>
        <div>
            <h4 className="text-lg font-bold text-white">{item.title}</h4>
            <p className="text-gray-400">{item.description}</p>
        </div>
    </div>
);


const Achievements: React.FC = () => {
    const awards = achievements.filter(a => a.category === 'Award');
    const ranks = achievements.filter(a => a.category === 'Rank');

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300 font-rubik mb-12">
                    Credentials & Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg border border-gray-700">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Awards & Honors</h3>
                        <div className="space-y-4">
                            {awards.map((item, index) => (
                                <AchievementCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg border border-gray-700">
                         <h3 className="text-2xl font-bold text-white mb-6 text-center">Academic Ranks</h3>
                         <div className="space-y-4">
                            {ranks.map((item, index) => (
                                <AchievementCard key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
