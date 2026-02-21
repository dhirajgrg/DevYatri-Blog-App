export default function PostCard({ post, delay = 0 }) {
  return (
    <article
      className="card-blog animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-7">
        {/* Category + read time */}
        <div className="flex items-center justify-between mb-4">
          <span className="category-badge">{post.category}</span>
          <span className="meta-text">{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg leading-snug font-normal text-neutral-100 mb-3 tracking-tight">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-5">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex gap-1.5 flex-wrap mb-5">
          {post.tags.map((t) => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="avatar-circle">{post.avatar}</div>
            <div>
              <div className="font-sans text-xs font-medium text-neutral-400">{post.author}</div>
              <div className="meta-text">{post.date}</div>
            </div>
          </div>
          <button className="btn-ghost text-xs py-1.5 px-3">Read &rarr;</button>
        </div>
      </div>
    </article>
  )
}
