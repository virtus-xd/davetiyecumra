import { useEffect, useState } from 'react';
import { ChevronDown, Heart } from 'lucide-react';
import { invitationData } from '../../config/invitationData';

export default function HeroSection() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const weddingDate = new Date(invitationData.dateStr).getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = weddingDate - now;
            if (distance < 0) {
                clearInterval(timer);
                return;
            }
            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fdfaf9] text-[#3a3f38]">
            {/* Desktop background */}
            <div className="absolute inset-0 hidden md:block bg-[url('/flowers-pink-bg.webp')] bg-cover bg-center bg-no-repeat pointer-events-none" />
            {/* Mobile background */}
            <div className="absolute inset-0 block md:hidden bg-[url('/mobile-hero.webp')] bg-cover bg-top bg-no-repeat pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fdfaf9] via-[#fdfaf9]/40 to-transparent pointer-events-none" />

            <div className="relative z-10 text-center px-6 md:px-12 animate-fade-in bg-white/70 backdrop-blur-md p-10 md:p-16 rounded-[4rem] border border-[#f0e4e4] shadow-[0_10px_40px_rgba(212,165,165,0.15)] max-w-3xl w-[92%] mt-32 md:mt-40 mb-12 flex flex-col items-center">
                
                <div className="text-[#8c9c90] tracking-[0.4em] text-xs uppercase animate-slide-up font-serif mt-2">
                    - {invitationData.topDecoration} -
                </div>

                <h1 className="font-handwriting text-6xl md:text-8xl text-[#4b5c51] animate-slide-up drop-shadow-sm mt-8 mb-6">
                    {invitationData.brideName} <span className="text-4xl md:text-6xl text-[#d4a5a5] px-2">&amp;</span> {invitationData.groomName}
                </h1>

                <div className="flex items-center justify-center w-full py-2 animate-slide-up delay-100">
                    <div className="h-[1px] w-24 bg-[#e6d5d5]"></div>
                </div>

                <p className="text-xl md:text-3xl text-[#7a8a7f] font-serif italic animate-slide-up delay-200 my-4">
                    {invitationData.eventType}
                </p>

                <div className="animate-slide-up delay-300 mt-6 mb-10 w-full">
                    <div className="flex items-stretch justify-center gap-4 md:gap-8">
                        {/* Kına Tarihi */}
                        <div className="flex-1 text-center px-3 py-4 rounded-2xl bg-[#fdfaf9]/80 border border-[#f0e4e4] shadow-sm">
                            <div className="flex items-center justify-center mb-2">
                                <span className="text-[10px] md:text-xs text-[#d4a5a5] font-sans tracking-[0.25em] uppercase font-semibold">{invitationData.henna.heroLabel}</span>
                            </div>
                            <p className="text-base md:text-lg text-[#4b5c51] font-serif tracking-[0.15em] uppercase">
                                {invitationData.henna.dateDisplay}
                            </p>
                            <p className="text-[9px] md:text-[10px] text-[#8c9c90] font-sans tracking-[0.2em] uppercase mt-1">
                                {invitationData.henna.timeDisplay}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="flex flex-col items-center justify-center gap-1">
                            <div className="w-[1px] h-6 bg-gradient-to-b from-transparent via-[#e6d5d5] to-transparent"></div>
                            <Heart className="w-3.5 h-3.5 text-[#d4a5a5] fill-[#d4a5a5]/30" />
                            <div className="w-[1px] h-6 bg-gradient-to-b from-transparent via-[#e6d5d5] to-transparent"></div>
                        </div>

                        {/* Düğün Tarihi */}
                        <div className="flex-1 text-center px-3 py-4 rounded-2xl bg-[#fdfaf9]/80 border border-[#f0e4e4] shadow-sm">
                            <div className="flex items-center justify-center mb-2">
                                <span className="text-[10px] md:text-xs text-[#d4a5a5] font-sans tracking-[0.25em] uppercase font-semibold">{invitationData.weddingLabel}</span>
                            </div>
                            <p className="text-base md:text-lg text-[#4b5c51] font-serif tracking-[0.15em] uppercase">
                                {invitationData.dateDisplay}
                            </p>
                            <p className="text-[9px] md:text-[10px] text-[#8c9c90] font-sans tracking-[0.2em] uppercase mt-1">
                                {invitationData.timeDisplay}
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-[10px] md:text-xs text-[#8c9c90] font-sans tracking-[0.3em] uppercase mb-4 animate-slide-up delay-400">Düğüne Kalan Süre</p>
                <div className="flex justify-center gap-4 md:gap-8 animate-slide-up delay-400 pb-2 w-full max-w-md px-2">
                    {[{ label: 'GÜN', value: timeLeft.days }, { label: 'SAAT', value: timeLeft.hours }, { label: 'DAKİKA', value: timeLeft.minutes }, { label: 'SANİYE', value: timeLeft.seconds }].map((item) => (
                        <div key={item.label} className="text-center flex flex-col items-center flex-1">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#e6d5d5] flex items-center justify-center bg-[#fdfaf9] shadow-sm transition-transform hover:-translate-y-1 hover:border-[#d4a5a5] hover:shadow-lg hover:shadow-[#d4a5a5]/20">
                                <span className="text-xl md:text-2xl font-serif text-[#4b5c51]">{item.value}</span>
                            </div>
                            <div className="text-[8px] md:text-[9px] text-[#8c9c90] mt-3 font-sans tracking-[0.2em] uppercase font-medium">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
                <ChevronDown className="w-8 h-8 text-[#8c9c90]" strokeWidth={1} />
            </div>
        </section>
    );
}
