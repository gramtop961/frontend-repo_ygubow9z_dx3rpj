export default function GetStartedPage() {
  return (
    <main className="bg-[#E6F4EA]">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#333333]">Get Started</h1>
        <p className="mt-2 text-[#333333]/80">Tell us about your goals. We’ll propose an approach and timeline within 24 hours.</p>
        <form className="mt-6 bg-white rounded-2xl p-6 border border-[#057834]/10 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-[#333333]/70">Full name</label>
              <input className="mt-1 w-full rounded-lg border border-[#057834]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-[#333333]/70">Company</label>
              <input className="mt-1 w-full rounded-lg border border-[#057834]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="Company Ltd" />
            </div>
            <div>
              <label className="text-sm text-[#333333]/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg border border-[#057834]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm text-[#333333]/70">Budget</label>
              <select className="mt-1 w-full rounded-lg border border-[#057834]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#057834]">
                <option>Under $2,000</option>
                <option>$2,000 – $5,000</option>
                <option>$5,000 – $10,000</option>
                <option>$10,000+</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-[#333333]/70">Project details</label>
              <textarea rows="5" className="mt-1 w-full rounded-lg border border-[#057834]/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#057834]" placeholder="Goals, timeline, key requirements..." />
            </div>
          </div>
          <button type="button" className="mt-4 inline-flex items-center bg-[#057834] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#046a2f]">Request proposal</button>
        </form>
      </div>
    </main>
  );
}
