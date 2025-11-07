import { Star, Users, Shield, Code, Smartphone, Layout, Server, Palette } from 'lucide-react';

const services = [
  { title: 'Web Design & Development', icon: Layout, details: 'We craft responsive, SEO‑friendly websites with modern stacks and best‑in‑class performance.', highlights: ['SEO & performance', 'Accessibility', 'CMS integration'], reviews: 124, rating: 4.9 },
  { title: 'UI/UX Design', icon: Palette, details: 'Human‑centered interfaces that convert and delight across devices.', highlights: ['User research', 'Prototyping', 'Design systems'], reviews: 83, rating: 4.8 },
  { title: 'Security & Compliance', icon: Shield, details: 'Comprehensive security reviews, hardening, and compliance guidance.', highlights: ['App audits', 'Cloud security', 'DevSecOps'], reviews: 76, rating: 4.9 },
  { title: 'Custom Software', icon: Code, details: 'Tailored applications that automate workflows and scale with you.', highlights: ['API design', 'Data modeling', 'Testing & CI/CD'], reviews: 98, rating: 4.85 },
  { title: 'Mobile Apps', icon: Smartphone, details: 'iOS and Android apps with native feel and robust performance.', highlights: ['React Native', 'Offline‑first', 'Analytics'], reviews: 57, rating: 4.7 },
  { title: 'IT Infrastructure', icon: Server, details: 'Reliable, secure, and cost‑efficient cloud/infrastructure setups.', highlights: ['Kubernetes', 'Monitoring', 'Cost optimization'], reviews: 64, rating: 4.8 },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#333333]">Services</h1>
          <p className="mt-2 text-[#333333]/80 max-w-3xl">Explore each service in depth — expectations, outcomes, and stories from clients we’ve helped transform.</p>
        </header>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {services.map(({ title, icon: Icon, details, highlights, rating, reviews }) => (
              <article key={title} className="rounded-2xl border border-[#057834]/10 p-6 bg-[#F8FBF9]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E6F4EA] text-[#057834] flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-[#333333]">{title}</h2>
                    <p className="mt-1 text-sm text-[#333333]/80">{details}</p>
                    <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                      {highlights.map((h) => (
                        <li key={h} className="px-2 py-1 rounded-full bg-white border border-[#057834]/10 text-[#057834] font-medium">{h}</li>
                      ))}
                    </ul>
                    <div className="mt-3 flex items-center gap-2 text-sm text-[#333333]/80">
                      <Star className="text-[#F57C00]" size={16} />
                      <span>{rating} • {reviews} reviews</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <aside className="space-y-4">
            <div className="rounded-2xl border border-[#057834]/10 p-5 bg-[#E6F4EA]">
              <div className="text-[#057834] font-bold">What to expect</div>
              <ul className="mt-2 text-sm text-[#333333]/80 list-disc list-inside space-y-1">
                <li>Discovery and alignment workshop</li>
                <li>Clear timelines and milestones</li>
                <li>Transparent pricing and reporting</li>
                <li>Dedicated project lead</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#057834]/10 p-5">
              <div className="font-bold text-[#333333]">Client stories</div>
              <p className="mt-1 text-sm text-[#333333]/80">“TrueMinds took our idea and delivered a product our customers love.” — Adaeze, Fintech founder</p>
            </div>
            <div className="rounded-2xl border border-[#057834]/10 p-5">
              <div className="font-bold text-[#333333]">Ready to begin?</div>
              <a href="/get-started" className="mt-2 inline-block bg-[#057834] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#046a2f]">Get Started</a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
