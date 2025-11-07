export default function AboutPage() {
  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#333333]">About TrueMinds Innovations Ltd</h1>
        <p className="mt-3 text-[#333333]/80 max-w-3xl">We are a Nigeria‑born technology partner focused on practical, secure, and scalable solutions. Our mission is to empower businesses with technology that drives measurable results.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#057834]/10 p-6 bg-[#F8FBF9]">
            <div className="font-bold text-[#333333]">Our values</div>
            <ul className="mt-2 text-sm text-[#333333]/80 list-disc list-inside space-y-1">
              <li>Integrity and transparency</li>
              <li>Security by design</li>
              <li>Accessibility and inclusivity</li>
              <li>Continuous improvement</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#057834]/10 p-6">
            <div className="font-bold text-[#333333]">Expertise</div>
            <p className="mt-2 text-sm text-[#333333]/80">Web, mobile, cloud, DevOps, and cybersecurity with modern JavaScript and Python ecosystems.</p>
          </div>
          <div className="rounded-2xl border border-[#057834]/10 p-6">
            <div className="font-bold text-[#333333]">Impact</div>
            <p className="mt-2 text-sm text-[#333333]/80">We’ve supported startups and SMBs to launch faster, reduce costs, and delight users.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
