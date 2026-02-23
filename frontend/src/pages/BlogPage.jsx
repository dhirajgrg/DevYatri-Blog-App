import { useState } from "react";
import { posts, categories } from "../data";
import PostCard from "../components/PostCard";
import FilterBar from "../components/FilterBar";
import FeaturedPost from "../components/FeaturedPost";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <main className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="border-b border-neutral-900 pb-10 mb-8">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          <span className="hero-label">All Articles</span>
        </div>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h1 className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-neutral-100 leading-tight">
            The Blog
          </h1>
          <p className="font-sans text-sm text-neutral-500 max-w-md leading-relaxed">
            Deep dives into engineering, architecture, product thinking, and the
            craft of building software that scales.
          </p>
        </div>
      </div>

      {/* Filters */}
      <FilterBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Featured */}
      {featured && (
        <div className="my-8 border border-neutral-900 rounded-sm overflow-hidden hover:border-neutral-700 transition-colors">
          <FeaturedPost post={featured} />
        </div>
      )}

      {/* Grid */}
      <section className="py-6">
        <div className="flex items-center gap-3 mb-7">
          <span className="section-label">All Posts</span>
          <div className="flex-1 h-px bg-neutral-900" />
          <span className="meta-text">{filtered.length} articles</span>
        </div>

        {rest.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900 rounded-sm overflow-hidden">
            {rest.map((post, idx) => (
              <PostCard key={post.id} post={post} delay={idx * 0.05} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-neutral-700">
            <div className="font-serif text-5xl mb-3">∅</div>
            <div className="font-sans text-sm">
              No articles match your search.
            </div>
          </div>
        )}
      </section>

      {filtered.length > 0 && (
        <div className="text-center py-8">
          <button className="btn-green-outline">Load More Articles</button>
        </div>
      )}
    </main>
  );
}
