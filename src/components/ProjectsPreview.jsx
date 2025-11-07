import { Link } from 'react-router-dom';

export default function ProjectsPreview() {
  const projects = [
    { name: 'MyTodoApp', tag: 'Web App' },
    { name: 'Kez Cakes', tag: 'E‑commerce' },
    { name: "Taylor's Touch", tag: 'Services' },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#333333]">Recent Projects</h2>
            <p className="mt-1 text-[#333333]/80">A quick look at our latest work.</p>
          </div>
          <Link to="/projects" className="text-[#057834] font-semibold">View all →</Link>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="rounded-xl overflow-hidden border border-[#057834]/10 bg-[#E6F4EA]/40">
              <div className="aspect-video bg-gradient-to-br from-[#E6F4EA] to-white" />
              <div className="p-5">
                <span className="text-xs font-semibold text-[#057834] bg-[#E6F4EA] px-2 py-1 rounded-full border border-[#057834]/20">{p.tag}</span>
                <h3 className="mt-2 font-bold text-[#333333]">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
