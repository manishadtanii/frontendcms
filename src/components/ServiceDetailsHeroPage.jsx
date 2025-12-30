import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceDetailsHeroPage = ({ className = '' }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const images = [
        '/blog-3.png',
        '/blog-2.png',
        '/blog-1.png',
        '/blog-3.png',
        '/blog-2.png',
        '/blog-1.png',
    ];

    const timeoutRef = useRef(null);

    useEffect(() => {
        if (isHovered) return;

        timeoutRef.current = setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500);

        return () => clearTimeout(timeoutRef.current);
    }, [activeIndex, isHovered, images.length]);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div
            className={`relative overflow-hidden ${className}`}
        >
            {/* CSS for TOP TO BOTTOM fill animation */}
            <style>{`
                @keyframes fillTopDown {
                    0% {
                        height: 0%;
                    }
                    100% {
                        height: 100%;
                    }
                }
                .dot-fill-animation {
                    animation: fillTopDown 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                }
            `}</style>

            {/* Content */}
            <div className="relative z-10 container px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
                    {/* Right Image Content */}
                    <div className="relative flex items-center justify-center"
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Card Container */}
                        <div
                            className="relative w-[480px] h-[280px] lg:w-[550px] lg:h-[320px] overflow-hidden shadow-2xl backdrop-blur-md border border-white/20 rounded-2xl transition-all duration-500"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                            }}
                        >
                            {/* Image Slides with smooth fade */}
                            {images.map((imgSrc, index) => (
                                <img
                                    key={index}
                                    src={imgSrc}
                                    alt={`Slide ${index + 1}`}
                                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                                />
                            ))}

                            {/* Top-Right Text Overlay */}
                            <div className="absolute top-4 right-4 text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-md">
                                We Design the Future of Brands
                            </div>

                            {/* Bottom-Left Scroll Text */}
                            <div className="absolute bottom-4 left-4 text-white text-sm flex items-center gap-2">
                                <span>Scroll Down</span>
                                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>

                        {/* Side Navigation Dots with Bottom-to-Top Fill Animation */}
                        <div className="absolute right-[54px] top-[55%] transform -translate-y-1/2 flex flex-col items-center gap-4">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`relative overflow-hidden transition-all duration-300 flex items-center justify-center ${
                                        index === activeIndex
                                            ? 'w-2 h-10 rounded-full shadow-md'
                                            : 'w-3 h-3 rounded-full bg-white/30 hover:bg-white/50'
                                    }`}
                                >
                                    {/* Active dot with animated fill from TOP TO BOTTOM */}
                                    {index === activeIndex && (
                                        <>
                                            {/* Background base */}
                                            <div className="absolute inset-0 bg-blue-900/20 rounded-full" />

                                            {/* Animated fill that grows from TOP */}
                                            <div 
                                                key={`fill-${activeIndex}`}
                                                className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-cyan-400 to-blue-400 dot-fill-animation"
                                                style={{ height: '0%' }}
                                            />
                                        </>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsHeroPage;