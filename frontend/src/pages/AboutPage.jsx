const values = [
  {
    icon: "🔍",
    title: "Clarity over cleverness",
    description:
      "I prefer simple, readable code that anyone can understand. Clean structure first, optimization later.",
  },
  {
    icon: "🌱",
    title: "Always learning",
    description:
      "I study JavaScript, backend systems, and software architecture daily through projects, documentation, and real-world practice.",
  },
  {
    icon: "🤝",
    title: "Build in public",
    description:
      "I share my learning journey openly. Writing and building in public helps me grow faster and help other learners.",
  },
  {
    icon: "⚡",
    title: "Learn by building",
    description:
      "I believe the fastest way to learn is to build real projects, break things, fix them, and repeat.",
  },
];

const links = [
  { label: "GitHub", href: "#", desc: "github.com/dhiraj" },
  { label: "Twitter / X", href: "#", desc: "@dhiraj_dev" },
  { label: "LinkedIn", href: "#", desc: "linkedin.com/in/dhiraj" },
  {
    label: "Email",
    href: "mailto:dhiraj@example.com",
    desc: "dhiraj@example.com",
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
            <span className="hero-label">The Human Behind the Code</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-neutral-100 leading-tight mb-6">
            About Me
          </h1>

          <div className="space-y-4 font-sans text-base text-neutral-500 leading-relaxed max-w-xl">
            <p>
              I'm a student software engineer from Nepal, learning fullstack
              development and building real-world projects with JavaScript,
              Node.js, and React.
            </p>

            <p>
              I started programming out of curiosity and slowly turned it into a
              serious goal: becoming a professional software engineer and
              working on impactful products used by real people.
            </p>

            <p>
              DevYatri is my personal blog and portfolio where I document my
              journey, share what I learn, and build in public without hype.
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="btn-green">Read the Blog →</button>
            <button className="btn-green-outline">View Portfolio</button>
          </div>
        </div>

        {/* Avatar & quick info */}
        <div>
          <div className="w-full aspect-square bg-neutral-950 border border-neutral-900 rounded-sm flex items-center justify-center mb-6 relative overflow-hidden">
            <div className="text-[80px] opacity-20">👨‍💻</div>
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm border border-neutral-800 rounded-sm p-3">
              <div className="font-serif text-lg text-neutral-100">Dhiraj</div>
              <div className="meta-text mt-0.5">Student Software Engineer</div>
            </div>
          </div>

          {/* Quick facts */}
          <div className="space-y-px border border-neutral-900 rounded-sm overflow-hidden">
            {[
              ["📍", "Location", "Nepal 🇳🇵"],
              ["🎓", "Currently", "Computer Engineering Student"],
              ["✍️", "Writing since", "2024"],
              ["⚙️", "Favourite stack", "React + Node.js + MongoDB"],
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
              Weekly updates on my learning journey, projects, and articles.
            </div>
          </div>
          <button className="btn-green">Subscribe Free →</button>
        </div>
      </section>
    </main>
  );
}
