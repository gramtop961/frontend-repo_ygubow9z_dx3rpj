export default function CommunityPage() {
  const items = [
    { title: 'Tech Stories', desc: 'Insights and lessons from our projects and partners.' },
    { title: 'Workshops', desc: 'Hands‑on sessions to level up your team.' },
    { title: 'Open Source', desc: 'Tools and contributions we maintain.' },
  ];

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#333333]">Community</h1>
        <p className="mt-2 text-[#333333]/80 max-w-3xl">Learn, share, and grow with us. Join events, read stories, and contribute to initiatives that move the ecosystem forward.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-[#057834]/10 p-6 bg-[#F8FBF9]">
              <div className="font-bold text-[#333333]">{i.title}</div>
              <p className="mt-1 text-sm text-[#333333]/80">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
