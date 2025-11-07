export default function Stats() {
  const stats = [
    { label: 'Satisfied clients', value: '80' },
    { label: 'Successful businesses', value: '25+' },
    { label: 'Clients who love us', value: '100+' },
    { label: '5‑Star reviews', value: '★★★★★' },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-[#057834]/10 bg-[#E6F4EA] p-6 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-[#057834]">{s.value}</div>
              <div className="mt-1 text-sm text-[#333333]/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
