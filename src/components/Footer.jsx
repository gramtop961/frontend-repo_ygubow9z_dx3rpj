export default function Footer() {
  return (
    <footer className="bg-[#024F7A] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-xl font-extrabold">TrueMinds Innovations Ltd</div>
          <p className="mt-2 text-sm opacity-90">Secure, scalable IT solutions for growth‑minded teams.</p>
        </div>
        <div className="text-sm space-y-1">
          <div className="font-semibold">Company</div>
          <a href="/about" className="block opacity-90 hover:opacity-100">About</a>
          <a href="/services" className="block opacity-90 hover:opacity-100">Services</a>
          <a href="/projects" className="block opacity-90 hover:opacity-100">Projects</a>
          <a href="/community" className="block opacity-90 hover:opacity-100">Community</a>
        </div>
        <div className="text-sm space-y-1">
          <div className="font-semibold">Get in touch</div>
          <div className="opacity-90">support@tinnovations.com.ng</div>
          <div className="opacity-90">(+234) 0903 094 3445</div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 text-xs opacity-90 flex items-center justify-between">
          <span>© {new Date().getFullYear()} TrueMinds Innovations Ltd. All rights reserved.</span>
          <span>Built with care in Africa.</span>
        </div>
      </div>
    </footer>
  );
}
