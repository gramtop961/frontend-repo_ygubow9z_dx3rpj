import { useMemo, useState } from 'react';
import { Shield, Code, Smartphone, Layout, Users, Layers, Server, Palette } from 'lucide-react';

const services = [
  { title: 'Web Design & Development', icon: Layout, category: 'Web Dev', desc: 'Responsive, fast, and SEO‑first websites.' },
  { title: 'UI/UX Design', icon: Palette, category: 'Design', desc: 'Human‑centered experiences that convert.' },
  { title: 'Web Security', icon: Shield, category: 'Security', desc: 'Hardened apps, audits, and best practices.' },
  { title: 'Custom Software Development', icon: Code, category: 'Software', desc: 'Tailored systems to streamline operations.' },
  { title: 'Mobile App Creation', icon: Smartphone, category: 'Mobile', desc: 'iOS/Android apps with native feel.' },
  { title: 'IT Infrastructure Consulting', icon: Server, category: 'Cloud', desc: 'Reliable, scalable infrastructure guidance.' },
  { title: 'Corporate Training & Workshops', icon: Users, category: 'Training', desc: 'Upskill teams with practical sessions.' },
  { title: 'Coding Classes', icon: Layers, category: 'Training', desc: 'Career‑ready coding bootcamps.' },
];

const categories = ['All', 'Web Dev', 'Design', 'Security', 'Software', 'Mobile', 'Cloud', 'Training'];

export default function Services() {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => (active === 'All' ? services : services.filter(s => s.category === active)), [active]);

  return (
    <section id="services" className="bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#333333]">Services</h2>
            <p className="mt-2 text-[#333333]/80 max-w-2xl">Strategy, design, and engineering to accelerate your digital growth.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition ${active === c ? 'bg-[#057834] text-white border-[#057834]' : 'bg-white text-[#057834] border-[#057834]/20 hover:bg-[#E6F4EA]'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="group rounded-xl border bg-white border-[#057834]/10 p-6 hover:shadow-lg transition hover:-translate-y-0.5">
              <div className="w-10 h-10 rounded-lg bg-[#E6F4EA] text-[#057834] flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-bold text-[#333333]">{title}</h3>
              <p className="mt-2 text-sm text-[#333333]/80">{desc}</p>
              <button className="mt-4 text-sm font-semibold text-[#057834]">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
