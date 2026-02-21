import React from "react"


export default function FeaturedPost({ post }) {
  if (!post) return null

  return (
    <div className="border-r border-neutral-900 cursor-pointer group" style={{ borderRadius: 0 }}>
      <div className="p-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="category-badge">{post.category}</span>
          <div className="w-px h-3 bg-neutral-800" />
          <span className="hero-label text-neutral-600">Featured</span>
        </div>

        <h2 className="font-serif text-3xl md:text-5xl leading-tight font-normal tracking-tight text-neutral-100 mb-4 group-hover:text-white transition-colors">
          {post.title}
        </h2>

        <p className="font-sans text-sm text-neutral-500 leading-relaxed mb-8 max-w-2xl">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="avatar-circle">{post.avatar}</div>
            <div>
              <div className="font-sans text-sm font-medium text-neutral-300">{post.author}</div>
              <div className="meta-text">{post.date} · {post.readTime}</div>
            </div>
          </div>
          <button className="btn-green">Read Article &rarr;</button>
        </div>
      </div>

      {/* Green accent bar */}
      <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 60%, transparent 100%)' }} />
    </div>
  )
}
