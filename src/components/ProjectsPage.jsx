export default function ProjectsPage() {
  const projects = [
    { name: 'MyTodoApp', year: 2024, outcome: '2x daily active users', summary: 'A productivity‑first web app with offline support and real‑time sync.' },
    { name: 'Kez Cakes', year: 2023, outcome: '35% increase in orders', summary: 'E‑commerce storefront with custom checkout and admin analytics.' },
    { name: "Taylor's Touch", year: 2023, outcome: '60% faster bookings', summary: 'Booking platform and portfolio for a beauty brand.' },
  ];

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <header>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#333333]">Projects</h1>
          <p className="mt-2 text-[#333333]/80 max-w-3xl">Stories from teams we’ve partnered with — goals, process, and measurable impact.</p>
        </header>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.name} className="rounded-2xl border border-[#057834]/10 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-[#E6F4EA] to-white" />
              <div className="p-6">
                <div className="text-xs text-[#057834] font-semibold">{p.year} • Case study</div>
                <h2 className="mt-1 text-xl font-bold text-[#333333]">{p.name}</h2>
                <p className="mt-1 text-sm text-[#333333]/80">{p.summary}</p>
                <div className="mt-3 inline-block text-xs font-semibold text-[#057834] bg-[#E6F4EA] px-2 py-1 rounded-full border border-[#057834]/20">Outcome: {p.outcome}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
