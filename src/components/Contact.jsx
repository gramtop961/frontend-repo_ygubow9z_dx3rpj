import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#E6F4EA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#333333]">Let’s build something great</h2>
            <p className="mt-2 text-[#333333]/80">We’ll reach out within 24 hours to discuss your goals.</p>

            <div className="mt-6 space-y-4 text-[#333333]">
              <div className="flex items-center gap-3"><MapPin className="text-[#057834]" size={18} /><span>Everywhere, On the Cloud</span></div>
              <div className="flex items-center gap-3"><Phone className="text-[#057834]" size={18} /><span>(+234) 0903 094 3445</span></div>
              <div className="flex items-center gap-3"><Mail className="text-[#057834]" size={18} /><span>support@tinnovations.com.ng</span></div>
            </div>
          </div>

          <form className="bg-white rounded-2xl p-6 border border-[#057834]/10 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-[#333333]/70">Name</label>
                <input className="mt-1 w-full rounded-lg border border-[#057834]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-[#333333]/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-[#057834]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-[#333333]/70">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-[#057834]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="Tell us about your project..." />
              </div>
            </div>
            <button type="button" className="mt-4 inline-flex items-center gap-2 bg-[#057834] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#046a2f] transition">
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
