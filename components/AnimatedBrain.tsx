
import React from 'react';

const AnimatedBrain: React.FC = () => {
    return (
        <div className="absolute inset-0 opacity-20">
            <style>
                {`
                @keyframes pulse {
                    0%, 100% { stroke-opacity: 0.3; }
                    50% { stroke-opacity: 1; }
                }
                @keyframes dash {
                    to {
                        stroke-dashoffset: 1000;
                    }
                }
                .pulse-1 { animation: pulse 4s ease-in-out infinite; }
                .pulse-2 { animation: pulse 5s ease-in-out infinite reverse; }
                .pulse-3 { animation: pulse 3.5s ease-in-out infinite; }
                .dash {
                    stroke-dasharray: 500;
                    stroke-dashoffset: 0;
                    animation: dash 60s linear infinite;
                }
                `}
            </style>
            <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" style={{stopColor: 'rgb(0, 255, 255)', stopOpacity: 0.5}} />
                        <stop offset="100%" style={{stopColor: 'rgb(0, 100, 100)', stopOpacity: 0}} />
                    </radialGradient>
                </defs>
                <g stroke="#00ffff" strokeWidth="0.5" fill="none">
                    {/* Neural pathways */}
                    <path className="pulse-1" d="M 200 400 Q 400 200, 600 400 T 1000 400" />
                    <path className="pulse-2" d="M 100 600 Q 300 700, 500 500 T 900 600" />
                    <path className="pulse-3" d="M 300 200 Q 500 100, 700 300 T 1100 200" />
                    <path className="pulse-1" d="M 1150 500 Q 900 650, 700 500 T 250 550" />
                    <path className="pulse-2 dash" d="M 50 100 Q 250 300, 450 150 T 850 350 T 1150 50" />
                    <path className="pulse-3" d="M 1100 750 Q 800 700, 600 780 T 100 700" />

                    {/* Nodes */}
                    <circle cx="200" cy="400" r="3" fill="url(#grad1)" className="pulse-1" />
                    <circle cx="600" cy="400" r="4" fill="url(#grad1)" className="pulse-2" />
                    <circle cx="1000" cy="400" r="3" fill="url(#grad1)" className="pulse-3" />
                    <circle cx="500" cy="500" r="5" fill="url(#grad1)" className="pulse-1" />
                    <circle cx="900" cy="600" r="2" fill="url(#grad1)" className="pulse-2" />
                    <circle cx="700" cy="300" r="4" fill="url(#grad1)" className="pulse-3" />
                    <circle cx="450" cy="150" r="3" fill="url(#grad1)" className="pulse-1" />
                    <circle cx="850" cy="350" r="4" fill="url(#grad1)" className="pulse-2" />
                    <circle cx="600" cy="780" r="3" fill="url(#grad1)" className="pulse-3" />
                </g>
            </svg>
        </div>
    );
};

export default AnimatedBrain;
