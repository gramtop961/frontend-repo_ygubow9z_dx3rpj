import { Link } from 'react-router-dom';
import { Layout, Shield, Code } from 'lucide-react';

export default function ServicesPreview() {
  const items = [
    { title: 'Web Development', icon: Layout, desc: 'Fast, responsive, SEO‑ready websites.' },
    { title: 'Security Audits', icon: Shield, desc: 'Protect your apps and data.' },
    { title: 'Custom Software', icon: Code, desc: 'Automate workflows and scale.' },
  ];

  return (
    <section className="bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#333333]">Services</h2>
            <p className="mt-1 text-[#333333]/80">A quick snapshot of how we help you grow.</p>
          </div>
          <Link to="/services" className="text-[#057834] font-semibold">View all →</Link>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-xl border bg-white border-[#057834]/10 p-6">
              <div className="w-10 h-10 rounded-lg bg-[#E6F4EA] text-[#057834] flex items-center justify-center">
                <Icon size={20} />
              </div>
              <div className="mt-3 font-bold text-[#333333]">{title}</div>
              <div className="text-sm text-[#333333]/80">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
