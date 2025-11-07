export default function Projects() {
  const projects = [
    { name: 'MyTodoApp', desc: 'A productivity‑first todo web app.', tag: 'Web App' },
    { name: 'Kez Cakes', desc: 'Elegant online cake shop with ordering.', tag: 'E‑commerce' },
    { name: "Taylor's Touch", desc: 'Beauty salon booking & portfolio site.', tag: 'Services' },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#333333]">Recent Projects</h2>
        <p className="mt-2 text-[#333333]/80">Selected work that showcases our craft and impact.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="rounded-xl overflow-hidden border border-[#057834]/10 bg-[#E6F4EA]/40">
              <div className="aspect-video bg-gradient-to-br from-[#E6F4EA] to-white" />
              <div className="p-5">
                <span className="text-xs font-semibold text-[#057834] bg-[#E6F4EA] px-2 py-1 rounded-full border border-[#057834]/20">{p.tag}</span>
                <h3 className="mt-2 font-bold text-[#333333]">{p.name}</h3>
                <p className="text-sm text-[#333333]/80">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
