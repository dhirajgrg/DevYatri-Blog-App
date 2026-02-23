// JourneyPage.jsx

const milestones = [
  {
    year: "2026",
    title: "Building My Personal Engineering Blog",
    description:
      "Started this blog to document my journey learning fullstack development. Writing helps me think clearly, track progress, and share what I learn with others.",
    tags: ["Writing", "Learning", "Personal Brand"],
    icon: "🚀",
  },
  {
    year: "2025",
    title: "Deep Dive into Fullstack JavaScript",
    description:
      "Focused on mastering JavaScript, React, Node.js, Express, and MongoDB. Built multiple real-world projects and learned how frontend and backend systems work together.",
    tags: ["JavaScript", "Fullstack", "Projects"],
    icon: "⚡",
  },
  {
    year: "2024",
    title: "Built My First Backend APIs",
    description:
      "Created REST APIs with Node.js and Express, connected MongoDB, and deployed small apps. This is when backend engineering really clicked for me.",
    tags: ["Backend", "Node.js", "APIs"],
    icon: "🏗️",
  },
  {
    year: "2023",
    title: "Started Learning Programming Seriously",
    description:
      "Followed structured courses, practiced coding daily, and learned Git & GitHub. Began thinking like a software engineer, not just a student.",
    tags: ["Git", "Discipline", "Learning"],
    icon: "🌱",
  },
  {
    year: "2022",
    title: "Discovered Web Development",
    description:
      "Built my first websites with HTML, CSS, and JavaScript. Seeing my code live in a browser was a turning point.",
    tags: ["HTML", "CSS", "JavaScript"],
    icon: "💡",
  },
  {
    year: "2021",
    title: "Wrote My First Line of Code",
    description:
      'Printed "Hello, World!" and realized coding could change my future. That moment started my journey into software engineering.',
    tags: ["Beginnings", "Programming"],
    icon: "👨‍💻",
  },
  {
    year: "2027",
    title: "Working as a Professional Software Engineer",
    description:
      "Started working as a software engineer, building scalable applications and contributing to real-world products.",
    tags: ["Career", "Engineering", "Growth"],
    icon: "🎯",
  },
];

const stats = [
  { value: "3+", label: "Years Learning Code" },
  { value: "15+", label: "Projects Built" },
  { value: "300+", label: "GitHub Commits" },
  { value: "Nepal 🇳🇵", label: "Based In" },
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
          Every developer starts somewhere. This is my journey from a student in
          Nepal to becoming a professional software engineer — the milestones,
          the struggles, and the lessons learned through building real projects.
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
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon Bubble */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-black border border-green-500 rounded-full flex items-center justify-center z-10 text-sm">
                {m.icon}
              </div>

              {/* Card */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  idx % 2 === 0 ? "md:pr-16" : "md:pl-16"
                }`}
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

              {/* Spacer */}
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
