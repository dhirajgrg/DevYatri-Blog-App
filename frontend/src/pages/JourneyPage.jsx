const milestones = [
  {
    year: "2024",
    title: "Started DevYatri",
    description:
      "Launched this blog to document my engineering journey — the lessons, the failures, the wins. Writing became a way to think clearly.",
    tags: ["Writing", "Community", "Open Source"],
    icon: "🚀",
  },
  {
    year: "2023",
    title: "Joined a Product-Led Startup",
    description:
      "Joined as a founding engineer at an early-stage SaaS company. Wore many hats — from infrastructure to customer calls. Learned what shipping really means.",
    tags: ["Startup", "Full Stack", "Leadership"],
    icon: "⚡",
  },
  {
    year: "2022",
    title: "Deep Dive into Systems Design",
    description:
      "Spent the year obsessing over distributed systems, databases, and architecture patterns. Read everything — papers, books, blog posts. Built small systems to understand big ones.",
    tags: ["Architecture", "Distributed Systems", "Learning"],
    icon: "🏗️",
  },
  {
    year: "2021",
    title: "First Open Source Contribution",
    description:
      "Merged my first PR into a project with 10k+ stars. A two-line fix. Took me three weeks of reading the codebase. Worth every hour.",
    tags: ["Open Source", "Community", "GitHub"],
    icon: "🌱",
  },
  {
    year: "2020",
    title: "Discovered Backend Engineering",
    description:
      "Built my first REST API from scratch, deployed it to a $5 VPS, stayed up all night watching logs. Fell in love with the craft.",
    tags: ["Backend", "Node.js", "APIs"],
    icon: "💡",
  },
  {
    year: "2019",
    title: "Wrote First Line of Code",
    description:
      'A Python script that printed "Hello, World!". I didn\'t know it then, but that single line would change the direction of my life entirely.',
    tags: ["Python", "Beginnings"],
    icon: "👨‍💻",
  },
];

const stats = [
  { value: "5+", label: "Years in tech" },
  { value: "12", label: "Companies worked with" },
  { value: "40+", label: "Articles published" },
  { value: "3", label: "Countries lived in" },
];

export default function JourneyPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          <span className="hero-label">My Story</span>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-neutral-100 leading-tight mb-4">
          The Journey
        </h1>
        <p className="font-sans text-base text-neutral-500 leading-relaxed">
          Every engineer has a story. This is mine — the milestones, the pivots,
          the people, and the code that shaped how I think and build.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 border border-neutral-900 rounded-sm overflow-hidden mb-20">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="bg-neutral-950 p-6 border-r border-b border-neutral-900 last:border-r-0 text-center"
          >
            <div className="font-serif text-4xl text-neutral-50 mb-1">
              {value}
            </div>
            <div className="meta-text">{label}</div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-900 -translate-x-1/2" />

        <div className="space-y-12">
          {milestones.map((m, idx) => (
            <div
              key={m.year}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Year bubble (center) */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-black border border-green-500 rounded-full flex items-center justify-center z-10 text-sm">
                {m.icon}
              </div>

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}
              >
                <div className="bg-neutral-950 border border-neutral-900 rounded-sm p-6 hover:border-neutral-700 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-xs font-bold text-green-500 tracking-widest uppercase">
                      {m.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-neutral-100 mb-2 font-normal">
                    {m.title}
                  </h3>
                  <p className="font-sans text-sm text-neutral-500 leading-relaxed mb-4">
                    {m.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {m.tags.map((t) => (
                      <span key={t} className="tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 border-t border-neutral-900 pt-12 text-center">
        <p className="font-serif text-2xl text-neutral-400 italic mb-6">
          "The journey is the destination."
        </p>
        <button className="btn-green">Read My Articles →</button>
      </div>
    </main>
  );
}
