import { MapPin, ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface LocationData {
    label: string;
    name: string;
    addressLine1: string;
    addressLine2: string;
    googleMapsUrl: string;
    googleMapsEmbed: string;
}

interface LocationCarouselProps {
    locations: LocationData[];
    isVisible: boolean;
}

export default function LocationCarousel({ locations, isVisible }: LocationCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right' | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const goTo = (index: number, dir: 'left' | 'right') => {
        if (isAnimating || index === activeIndex) return;
        setDirection(dir);
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex(index);
            setTimeout(() => {
                setIsAnimating(false);
                setDirection(null);
            }, 50);
        }, 250);
    };

    const goNext = () => {
        const nextIndex = (activeIndex + 1) % locations.length;
        goTo(nextIndex, 'right');
    };

    const goPrev = () => {
        const prevIndex = (activeIndex - 1 + locations.length) % locations.length;
        goTo(prevIndex, 'left');
    };

    // Touch/Swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) goNext();
            else goPrev();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            if (!isInView) return;
            
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, isAnimating]);

    const current = locations[activeIndex];

    const getLocationIcon = (label: string) => {
        if (label.includes('Gelin') || label.includes('Erkek')) {
            return <Home className="w-5 h-5" strokeWidth={1.5} />;
        }
        return <MapPin className="w-5 h-5" strokeWidth={1.5} />;
    };

    return (
        <div
            ref={containerRef}
            className={`bg-white border border-[#f4ebeb] rounded-[3rem] overflow-hidden shadow-xl shadow-[#e6d5d5]/30 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* Tab Navigation */}
            <div className="flex items-center justify-center gap-2 px-4 pt-6 pb-4">
                {locations.map((loc, idx) => (
                    <button
                        key={idx}
                        onClick={() => goTo(idx, idx > activeIndex ? 'right' : 'left')}
                        className={`
                            flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans tracking-widest uppercase
                            transition-all duration-500 ease-out cursor-pointer
                            ${idx === activeIndex
                                ? 'bg-[#d4a5a5] text-white shadow-lg shadow-[#d4a5a5]/30 scale-105'
                                : 'bg-[#fdfaf9] text-[#8c9c90] border border-[#f0e4e4] hover:bg-[#f8f0f0] hover:text-[#7a8a7f] hover:border-[#e6d5d5]'
                            }
                        `}
                    >
                        {getLocationIcon(loc.label)}
                        <span className="hidden sm:inline">{loc.label}</span>
                    </button>
                ))}
            </div>

            {/* Dot indicators (mobile) */}
            <div className="flex items-center justify-center gap-2 pb-4 sm:hidden">
                {locations.map((_, idx) => (
                    <div
                        key={idx}
                        className={`rounded-full transition-all duration-500 ${
                            idx === activeIndex
                                ? 'w-6 h-2 bg-[#d4a5a5]'
                                : 'w-2 h-2 bg-[#e6d5d5]'
                        }`}
                    />
                ))}
            </div>

            {/* Content Area */}
            <div className="relative px-3 md:px-4 pb-3 md:pb-4">
                <div className="border border-[#f4ebeb] rounded-[2rem] overflow-hidden">
                    <div className="grid md:grid-cols-3 gap-0">
                        
                        {/* Left: Info Panel */}
                        <div className="p-8 md:p-10 flex flex-col justify-center space-y-6 md:border-r border-[#f4ebeb] bg-[#fdfaf9] relative overflow-hidden">
                            {/* Navigation Arrows */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
                                <button
                                    onClick={goPrev}
                                    className="p-2 rounded-full bg-white/80 border border-[#f0e4e4] text-[#8c9c90] hover:text-[#d4a5a5] hover:border-[#d4a5a5] transition-all duration-300 shadow-sm backdrop-blur-sm cursor-pointer"
                                    aria-label="Önceki konum"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-2 z-10">
                                <button
                                    onClick={goNext}
                                    className="p-2 rounded-full bg-white/80 border border-[#f0e4e4] text-[#8c9c90] hover:text-[#d4a5a5] hover:border-[#d4a5a5] transition-all duration-300 shadow-sm backdrop-blur-sm cursor-pointer"
                                    aria-label="Sonraki konum"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Location Info with slide animation */}
                            <div
                                className={`flex flex-col items-center text-center gap-4 px-6 transition-all duration-300 ease-out ${
                                    isAnimating
                                        ? direction === 'right'
                                            ? 'opacity-0 -translate-x-8'
                                            : 'opacity-0 translate-x-8'
                                        : 'opacity-100 translate-x-0'
                                }`}
                            >
                                <div className="p-4 bg-white border border-[#f0e4e4] rounded-full text-[#d4a5a5]">
                                    <MapPin className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl text-[#4b5c51] mb-4">{current.label}</h3>
                                    <p className="text-[#5c6e62] font-serif text-lg mb-2">{current.name}</p>
                                    <p className="text-[#8c9c90] font-sans text-[10px] tracking-widest mt-2 uppercase">{current.addressLine1}</p>
                                    <p className="text-[#8c9c90] font-sans text-[10px] tracking-widest mt-1 uppercase">{current.addressLine2}</p>
                                </div>
                            </div>
                            <div className={`flex justify-center pt-2 transition-all duration-300 ease-out ${
                                isAnimating ? 'opacity-0' : 'opacity-100'
                            }`}>
                                <a
                                    href={current.googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 bg-white border border-[#e6d5d5] text-[#7a8a7f] hover:bg-[#d4a5a5] hover:text-white hover:border-[#d4a5a5] transition-colors font-sans text-[10px] tracking-widest uppercase rounded-full shadow-sm"
                                >
                                    Yol Tarifi Al
                                </a>
                            </div>
                        </div>
                        
                        {/* Right: Map */}
                        <div className={`md:col-span-2 h-[350px] md:h-[420px] sepia-[0.1] contrast-95 hover:sepia-0 hover:contrast-100 transition-all duration-700 relative overflow-hidden`}>
                            <div className={`w-full h-full transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                                <iframe
                                    key={activeIndex}
                                    src={current.googleMapsEmbed}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title={`${current.label} Konumu`}
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* Bottom: Swipe Hint (mobile) */}
            <div className="flex items-center justify-center pb-4 md:hidden">
                <p className="text-[#b8c4bc] font-sans text-[9px] tracking-widest uppercase animate-pulse">
                    ← Kaydırarak gezin →
                </p>
            </div>
        </div>
    );
}
