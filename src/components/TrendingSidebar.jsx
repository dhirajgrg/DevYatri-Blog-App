import { posts } from '../data'

export default function TrendingSidebar() {
  return (
    <div className="border-l border-neutral-900 px-7 py-8">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
        <span className="section-label">Trending This Week</span>
      </div>

      {posts.slice(0, 5).map((post, i) => (
        <div
          key={post.id}
          className="flex items-start gap-4 py-4 border-b border-neutral-900 last:border-b-0 cursor-pointer hover:opacity-70 transition-opacity"
        >
          <span className="font-serif text-2xl text-neutral-850 leading-none min-w-[28px]">
            0{i + 1}
          </span>
          <div>
            <div className="category-badge mb-1">{post.category}</div>
            <div className="font-sans text-sm font-medium text-neutral-300 leading-snug">{post.title}</div>
            <div className="meta-text mt-1">{post.readTime}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
