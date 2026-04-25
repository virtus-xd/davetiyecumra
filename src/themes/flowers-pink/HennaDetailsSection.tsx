import { Clock, Heart, Calendar, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { invitationData } from '../../config/invitationData';
import LocationCarousel from './LocationCarousel';

const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'Clock': return Clock;
        case 'Heart': return Heart;
        case 'Calendar': return Calendar;
        default: return Clock;
    }
};

export default function HennaDetailsSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);

    const hennaData = invitationData.henna;

    // Kına konumları: Kına Mekanı, Kız Evi, Erkek Evi
    const hennaLocations = [
        hennaData.venue,
        invitationData.brideHome,
        invitationData.groomHome,
    ];

    return (
        <section ref={sectionRef} className="py-24 px-4 bg-[#fdfaf9] text-[#3a3f38] relative overflow-hidden">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#4b5c51] mb-6">Kına Günü Detayları</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-px bg-[#e6d5d5]"></div>
                        <Sparkles className="w-5 h-5 text-[#d4a5a5]" strokeWidth={1.5} />
                        <div className="w-16 h-px bg-[#e6d5d5]"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {hennaData.events.map((event, index) => {
                        const Icon = getIcon(event.iconName);
                        return (
                            <div key={index} className={`group bg-white border border-[#f4ebeb] p-8 rounded-[3rem] text-center shadow-md shadow-[#e6d5d5]/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#e6d5d5]/40 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.15}s` }}>
                                <div className="w-16 h-16 bg-[#fdfaf9] border border-[#f0e4e4] rounded-full flex items-center justify-center mx-auto mb-6 text-[#8c9c90] group-hover:scale-110 group-hover:text-[#d4a5a5] transition-all duration-500">
                                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <h3 className="font-serif text-xl text-[#4b5c51] mb-3 uppercase tracking-widest">{event.title}</h3>
                                <p className="text-[#d4a5a5] font-sans text-xs tracking-[0.2em] mb-4 uppercase">{event.time}</p>
                                <p className="text-[#7a8a7f] text-sm font-sans leading-relaxed px-2">{event.description}</p>
                            </div>
                        );
                    })}
                </div>

                <LocationCarousel locations={hennaLocations} isVisible={isVisible} />
            </div>
        </section>
    );
}
