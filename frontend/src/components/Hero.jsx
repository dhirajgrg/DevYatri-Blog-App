export default function Hero() {
  return (
    <header className="py-16 border-b border-neutral-900 animate-fade-up">
      <div className="flex items-end justify-between flex-wrap gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="hero-label">Enterprise Knowledge From Nepal.</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight font-normal tracking-tight text-neutral-100 m-0">
            Journey To Software Engineer
            <br />
            <em className="text-neutral-600 not-italic font-serif">Share What Works.</em>
          </h1>
        </div>

        <div className="hidden lg:block text-right">
          <div className="font-sans text-xs text-neutral-700 tracking-wider mb-2 uppercase">
            231 Articles · 48 Authors
          </div>
          <div className="flex gap-2 justify-end">
            {['Weekly Digest', 'API Changes', 'Case Studies'].map((t) => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
