import { categories } from '../data'

export default function FilterBar({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) {
  return (
    <div className="flex items-center justify-between py-5 gap-4 flex-wrap border-b border-neutral-900">
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? 'btn-ghost-active' : 'btn-ghost'}
          >
            {cat}
          </button>
        ))}
      </div>
      <input
        className="search-input w-full md:w-64"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}
