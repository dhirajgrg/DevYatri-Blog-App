const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Vercel",
    period: "2023 – Present",
    description:
      "Working on edge infrastructure and the developer experience layer. Focused on reducing cold start times and improving build pipeline reliability at scale.",
    tags: ["Go", "TypeScript", "Edge Computing", "CDN"],
  },
  {
    role: "Founding Engineer",
    company: "Stealth Startup",
    period: "2022 – 2023",
    description:
      "First engineering hire. Built the core product from scratch, set up infrastructure, and helped grow the team from 2 to 12 engineers.",
    tags: ["Node.js", "PostgreSQL", "AWS", "Product"],
  },
  {
    role: "Backend Engineer",
    company: "Shopify",
    period: "2020 – 2022",
    description:
      "Worked on the Checkout team, handling millions of transactions per day. Led a project to reduce checkout latency by 40% for high-traffic merchants.",
    tags: ["Ruby on Rails", "MySQL", "Redis", "Kafka"],
  },
];

const skills = {
  Languages: ["Go", "TypeScript", "Python", "Rust", "SQL"],
  Backend: ["Node.js", "PostgreSQL", "Redis", "Kafka", "gRPC"],
  Infrastructure: ["AWS", "Docker", "Kubernetes", "Terraform", "Cloudflare"],
  Practices: ["System Design", "DDD", "TDD", "API Design", "Code Review"],
};

const writing = [
  {
    title: "Building Scalable Microservices with Event-Driven Architecture",
    pub: "This blog",
    year: "2026",
  },
  {
    title: "The 5 Database Mistakes Startups Make",
    pub: "Hacker News #1",
    year: "2025",
  },
  {
    title: "Understanding PostgreSQL Query Plans",
    pub: "Dev.to",
    year: "2024",
  },
];

export default function PortfolioPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="border-b border-neutral-900 pb-12 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          <span className="hero-label">Work & Experience</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-neutral-100 leading-tight mb-4">
              Portfolio
            </h1>
            <p className="font-sans text-base text-neutral-500 leading-relaxed max-w-xl">
              5+ years building backend systems, distributed infrastructure, and
              developer tools. Currently focused on edge computing and
              high-performance APIs.
            </p>
          </div>
          {/* CTA card */}
          <div className="bg-neutral-950 border border-neutral-900 rounded-sm p-6">
            <div className="meta-text mb-4">Available for</div>
            <div className="space-y-2 mb-5">
              {[
                "Consulting",
                "Technical Writing",
                "Open Source Sponsorship",
              ].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full" />
                  <span className="font-sans text-sm text-neutral-300">
                    {s}
                  </span>
                </div>
              ))}
            </div>
            <button className="btn-green w-full justify-center">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="section-label">Experience</span>
          <div className="flex-1 h-px bg-neutral-900" />
        </div>
        <div className="space-y-1 border border-neutral-900 rounded-sm overflow-hidden">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-neutral-950 p-7 hover:bg-neutral-900/40 transition-colors border-b border-neutral-900 last:border-b-0"
            >
              <div className="flex items-start justify-between flex-wrap gap-3 mb-2">
                <div>
                  <h3 className="font-serif text-xl font-normal text-neutral-100">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-sans text-sm font-semibold text-green-500">
                      {exp.company}
                    </span>
                    <span className="w-px h-3 bg-neutral-800" />
                    <span className="meta-text">{exp.period}</span>
                  </div>
                </div>
              </div>
              <p className="font-sans text-sm text-neutral-500 leading-relaxed mb-4 max-w-2xl">
                {exp.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {exp.tags.map((t) => (
                  <span key={t} className="tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="section-label">Skills & Tools</span>
          <div className="flex-1 h-px bg-neutral-900" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-neutral-900 border border-neutral-900 rounded-sm overflow-hidden">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-neutral-950 p-6">
              <div className="category-badge mb-4">{category}</div>
              <div className="space-y-2">
                {items.map((skill) => (
                  <div
                    key={skill}
                    className="font-sans text-sm text-neutral-400"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notable Writing */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <span className="section-label">Notable Writing</span>
          <div className="flex-1 h-px bg-neutral-900" />
        </div>
        <div className="space-y-px border border-neutral-900 rounded-sm overflow-hidden">
          {writing.map((w, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4 bg-neutral-950 px-6 py-4 hover:bg-neutral-900/40 transition-colors cursor-pointer"
            >
              <div>
                <div className="font-sans text-sm font-medium text-neutral-200 mb-0.5">
                  {w.title}
                </div>
                <div className="meta-text">{w.pub}</div>
              </div>
              <span className="font-sans text-xs text-neutral-700 flex-shrink-0">
                {w.year}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
