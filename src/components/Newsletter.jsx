import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email.trim()) setSubscribed(true)
  }

  return (
    <section className="border-t border-b border-neutral-900 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          <span className="hero-label">Weekly Digest</span>
        </div>
        <h2 className="font-serif text-4xl font-normal tracking-tight leading-tight mb-3">
          The best of Journey,
          <br />
          <em className="text-neutral-600 not-italic font-serif">delivered weekly.</em>
        </h2>
        <p className="font-sans text-sm text-neutral-600 leading-relaxed">
          Curated insights from 48+ senior engineers and tech leaders.
          No fluff — just what's worth reading.
        </p>
      </div>

      {/* Right */}
      <div>
        {subscribed ? (
          <div className="p-8 bg-neutral-950 border border-green-900 rounded-sm text-center">
            <div className="text-green-500 text-3xl mb-2">✓</div>
            <div className="font-sans text-sm font-semibold text-green-500">You're subscribed!</div>
            <div className="meta-text mt-1">Check your inbox for confirmation.</div>
          </div>
        ) : (
          <div>
            <div className="flex mb-3">
              <input
                className="newsletter-input"
                placeholder="your@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
              />
              <button
                onClick={handleSubscribe}
                className="bg-green-500 text-black font-sans text-xs font-bold tracking-widest uppercase px-5 border-none cursor-pointer transition-colors duration-200 hover:bg-green-600 rounded-r-sm whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <p className="font-sans text-xs text-neutral-700">
              Unsubscribe anytime.{' '}
              <span className="text-green-600 cursor-pointer hover:text-green-500 transition-colors">Privacy policy &rarr;</span>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
