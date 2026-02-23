const values = [
  {
    icon: "🔍",
    title: "Clarity over cleverness",
    description:
      "The best code is code that the next engineer can understand in 30 seconds. I optimise for readability, then performance.",
  },
  {
    icon: "🌱",
    title: "Always a student",
    description:
      "Technology moves fast. I spend at least an hour every day reading papers, docs, or other engineers' work.",
  },
  {
    icon: "🤝",
    title: "Build in public",
    description:
      "I share what I learn, including the mistakes. Writing forces clarity of thought, and the internet deserves more honest technical writing.",
  },
  {
    icon: "⚡",
    title: "Bias toward action",
    description:
      "Prototyping beats speculating. Ship something small, learn fast, iterate. The best systems emerge from tight feedback loops.",
  },
];

const links = [
  { label: "GitHub", href: "#", desc: "@devyatri" },
  { label: "Twitter / X", href: "#", desc: "@devyatri" },
  { label: "LinkedIn", href: "#", desc: "/in/devyatri" },
  {
    label: "Email",
    href: "mailto:hello@devyatri.dev",
    desc: "hello@devyatri.dev",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 border-b border-neutral-900 pb-16 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="hero-label">The Human Behind the Blog</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-neutral-100 leading-tight mb-6">
            About Me
          </h1>
          <div className="space-y-4 font-sans text-base text-neutral-500 leading-relaxed max-w-xl">
            <p>
              I'm a software engineer who writes about the craft of building
              software — the architecture decisions, the trade-offs, the things
              that work, and the things that don't.
            </p>
            <p>
              I grew up in Nepal, studied computer engineering, and have spent
              the last five years working across startups and large tech
              companies on backend systems, infrastructure, and developer
              tooling.
            </p>
            <p>
              DevYatri (yatri means traveller in Nepali) is my corner of the
              internet to document that journey — honestly, without the hype.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <button className="btn-green">Read the Blog →</button>
            <button className="btn-green-outline">View Portfolio</button>
          </div>
        </div>

        {/* Avatar & quick info */}
        <div>
          {/* Avatar placeholder */}
          <div className="w-full aspect-square bg-neutral-950 border border-neutral-900 rounded-sm flex items-center justify-center mb-6 relative overflow-hidden">
            <div className="text-[80px] opacity-20">👨‍💻</div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm border border-neutral-800 rounded-sm p-3">
              <div className="font-serif text-lg text-neutral-100">
                Dev Yatri
              </div>
              <div className="meta-text mt-0.5">Software Engineer & Writer</div>
            </div>
          </div>

          {/* Quick facts */}
          <div className="space-y-px border border-neutral-900 rounded-sm overflow-hidden">
            {[
              ["📍", "Location", "Remote — Kathmandu / Berlin"],
              ["💼", "Currently", "Senior SWE @ Vercel"],
              ["✍️", "Writing since", "2024"],
              ["☕", "Favourite stack", "Go + PostgreSQL + Fly.io"],
            ].map(([icon, label, value]) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-neutral-950 px-4 py-3 hover:bg-neutral-900/40 transition-colors"
              >
                <span className="text-base">{icon}</span>
                <span className="meta-text w-28 flex-shrink-0">{label}</span>
                <span className="font-sans text-sm text-neutral-300">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="section-label">What I Believe</span>
          <div className="flex-1 h-px bg-neutral-900" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900 rounded-sm overflow-hidden">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-neutral-950 p-7 hover:bg-neutral-900/40 transition-colors"
            >
              <div className="text-2xl mb-3">{v.icon}</div>
              <h3 className="font-serif text-lg font-normal text-neutral-100 mb-2">
                {v.title}
              </h3>
              <p className="font-sans text-sm text-neutral-500 leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <span className="section-label">Get in Touch</span>
          <div className="flex-1 h-px bg-neutral-900" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-neutral-900 border border-neutral-900 rounded-sm overflow-hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="bg-neutral-950 p-6 flex flex-col gap-1 hover:bg-neutral-900/50 transition-colors group no-underline"
            >
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-neutral-600 group-hover:text-green-500 transition-colors">
                {l.label}
              </span>
              <span className="font-sans text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">
                {l.desc}
              </span>
            </a>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-8 bg-neutral-950 border border-neutral-900 rounded-sm p-8 flex items-center justify-between flex-wrap gap-6">
          <div>
            <div className="font-serif text-2xl text-neutral-100 mb-1">
              Stay in the loop
            </div>
            <div className="font-sans text-sm text-neutral-500">
              Weekly dispatch — articles, projects, and links worth reading.
            </div>
          </div>
          <button className="btn-green">Subscribe Free →</button>
        </div>
      </section>
    </main>
  );
}
