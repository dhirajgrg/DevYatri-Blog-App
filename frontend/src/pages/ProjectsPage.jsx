const projects = [
  {
    id: 1,
    name: "StreamBridge",
    tagline: "Real-time event pipeline for distributed systems",
    description:
      "An open-source event streaming bridge that connects Kafka, RabbitMQ, and Redis Streams with a unified API. Handles backpressure, retries, and dead-letter queues automatically.",
    stack: ["Go", "Kafka", "Redis", "gRPC", "Docker"],
    status: "Active",
    stars: "1.2k",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    name: "Spectral",
    tagline: "Lightweight observability for Node.js microservices",
    description:
      "A zero-config observability SDK that automatically instruments Express, Fastify, and Koa apps. Ships with dashboards for latency, error rates, and request tracing.",
    stack: ["TypeScript", "Node.js", "OpenTelemetry", "Prometheus"],
    status: "Active",
    stars: "847",
    link: "#",
    featured: false,
  },
  {
    id: 3,
    name: "QuillDB",
    tagline: "Markdown-native document storage",
    description:
      "A document database that stores, indexes, and queries Markdown files. Built for developers who want to use their filesystem as a CMS without a heavy backend.",
    stack: ["Rust", "SQLite", "WASM", "REST"],
    status: "Beta",
    stars: "423",
    link: "#",
    featured: false,
  },
  {
    id: 4,
    name: "PolicyKit",
    tagline: "Declarative RBAC for REST APIs",
    description:
      "Define access control policies in YAML, generate middleware for Express/Fastify, and audit every permission decision. Works with any auth provider.",
    stack: ["TypeScript", "YAML", "JWT", "Express"],
    status: "Stable",
    stars: "312",
    link: "#",
    featured: false,
  },
  {
    id: 5,
    name: "PulseCheck",
    tagline: "Distributed health monitoring for microservices",
    description:
      "Service health aggregator that polls your endpoints, tracks SLA compliance, and sends alerts via Slack, PagerDuty, or webhooks. No infra required.",
    stack: ["Python", "FastAPI", "Celery", "PostgreSQL"],
    status: "Archived",
    stars: "188",
    link: "#",
    featured: false,
  },
  {
    id: 6,
    name: "Lexicon CLI",
    tagline: "Developer documentation from the command line",
    description:
      "Search, browse, and read docs for 200+ libraries without leaving your terminal. Supports offline caching and custom doc sources.",
    stack: ["Go", "Bubble Tea", "SQLite"],
    status: "Active",
    stars: "664",
    link: "#",
    featured: false,
  },
];

const statusColor = {
  Active: "text-green-500 bg-green-500/10 border-green-500/20",
  Beta: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  Stable: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Archived: "text-neutral-500 bg-neutral-800 border-neutral-700",
};

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="border-b border-neutral-900 pb-10 mb-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          <span className="hero-label">Open Source & Side Projects</span>
        </div>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-neutral-100 leading-tight">
            Projects
          </h1>
          <p className="font-sans text-sm text-neutral-500 max-w-md leading-relaxed">
            Things I build in my spare time — tools, libraries, and experiments.
            Most are open source. All are opinionated.
          </p>
        </div>
      </div>

      {/* Featured project */}
      {featured && (
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label">Featured</span>
            <div className="flex-1 h-px bg-neutral-900" />
          </div>
          <div className="bg-neutral-950 border border-neutral-800 rounded-sm p-8 hover:border-neutral-600 transition-colors cursor-pointer group">
            <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="font-serif text-3xl font-normal text-neutral-100 group-hover:text-white transition-colors">
                    {featured.name}
                  </h2>
                  <span
                    className={`font-sans text-xs font-semibold px-2 py-0.5 rounded-sm border ${statusColor[featured.status]}`}
                  >
                    {featured.status}
                  </span>
                </div>
                <p className="font-sans text-sm text-green-500 mb-3">
                  {featured.tagline}
                </p>
                <p className="font-sans text-sm text-neutral-500 leading-relaxed max-w-2xl">
                  {featured.description}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-serif text-3xl text-neutral-100">
                  ★ {featured.stars}
                </div>
                <div className="meta-text">GitHub stars</div>
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4 mt-6 pt-6 border-t border-neutral-900">
              <div className="flex gap-2 flex-wrap">
                {featured.stack.map((s) => (
                  <span key={s} className="tag-pill">
                    {s}
                  </span>
                ))}
              </div>
              <button className="btn-green">View on GitHub →</button>
            </div>
          </div>
        </div>
      )}

      {/* All projects grid */}
      <div className="flex items-center gap-3 mb-7">
        <span className="section-label">All Projects</span>
        <div className="flex-1 h-px bg-neutral-900" />
        <span className="meta-text">{projects.length} total</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900 rounded-sm overflow-hidden">
        {rest.map((project) => (
          <div
            key={project.id}
            className="bg-neutral-950 p-6 hover:bg-neutral-900/50 transition-colors cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-serif text-xl font-normal text-neutral-100 group-hover:text-white transition-colors">
                {project.name}
              </h3>
              <span
                className={`font-sans text-xs font-semibold px-2 py-0.5 rounded-sm border flex-shrink-0 ${statusColor[project.status]}`}
              >
                {project.status}
              </span>
            </div>
            <p className="font-sans text-xs text-green-500 mb-2 tracking-wide">
              {project.tagline}
            </p>
            <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-5">
              {project.description}
            </p>
            <div className="flex gap-1.5 flex-wrap mb-4">
              {project.stack.map((s) => (
                <span key={s} className="tag-pill">
                  {s}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-neutral-900">
              <span className="font-sans text-xs text-neutral-600">
                ★ {project.stars} stars
              </span>
              <button className="btn-ghost text-xs py-1 px-3">View →</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
