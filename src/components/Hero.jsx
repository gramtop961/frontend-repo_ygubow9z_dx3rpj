import { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket, Star } from 'lucide-react';

const slidesData = [
  {
    title: 'Web Design & Development',
    subtitle: 'High‑performance, SEO‑ready websites that grow your business.',
    icon: Rocket,
  },
  {
    title: 'Custom Software & Mobile Apps',
    subtitle: 'Reliable apps tailored to your workflow and customers.',
    icon: Star,
  },
  {
    title: 'IT Consulting & Security',
    subtitle: 'Strategic guidance and best‑in‑class protection for your stack.',
    icon: ArrowRight,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const current = useMemo(() => slidesData[index], [index]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slidesData.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const Icon = current.icon;

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-[#E6F4EA]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 lg:px-8 flex items-center">
        <div className="w-full max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[#057834] bg-[#E6F4EA] px-3 py-1 rounded-full border border-[#057834]/20">
            TrueMinds Innovations Ltd
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-[#333333]">
            Empowering African Businesses with Modern IT Solutions
          </h1>
          <div className="mt-6 p-4 rounded-xl bg-white/80 backdrop-blur border border-[#057834]/10 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="shrink-0 mt-1 rounded-full bg-[#057834]/10 p-2 text-[#057834]">
                <Icon size={22} />
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-[#057834]">
                  {current.title}
                </p>
                <p className="text-[#333333]/80">
                  {current.subtitle}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[#333333]/80 max-w-2xl">
            "We believe technology should empower, not complicate" — we partner with you to deliver results‑driven, scalable solutions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#057834] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#046a2f] transition">
              Get Started
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 bg-white text-[#057834] px-5 py-3 rounded-lg font-semibold border border-[#057834]/20 hover:bg-[#E6F4EA] transition">
              View Services
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-[#333333]/70">
            <div className="flex items-center gap-2"><Star className="text-[#F57C00]" size={16} /><span>5‑Star Reviews</span></div>
            <div className="flex items-center gap-2"><Rocket className="text-[#F57C00]" size={16} /><span>Fast Delivery</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
