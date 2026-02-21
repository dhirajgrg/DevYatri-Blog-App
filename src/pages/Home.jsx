import React from "react";
import { useState } from "react";
import { posts } from "../data";

import Hero from "../components/Hero";
import FilterBar from "../components/FilterBar";
import FeaturedPost from "../components/FeaturedPost";
import TrendingSidebar from "../components/TrendingSidebar";
import PostCard from "../components/PostCard";
import Newsletter from "../components/Newsletter";
import StatsRow from "../components/StatsRow";

function Home() {
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
    <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
      <Hero />
      <FilterBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Featured + Trending */}
      {filtered.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] border-b border-neutral-900 mb-0.5">
          <FeaturedPost post={featured || filtered[0]} />
          <TrendingSidebar />
        </div>
      )}

      {/* Article grid */}
      <section className="py-10">
        <div className="flex items-center gap-3 mb-7">
          <span className="section-label">Latest Articles</span>
          <div className="flex-1 h-px bg-neutral-900" />
          <span className="meta-text">{filtered.length} articles</span>
        </div>

        {rest.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900 rounded-sm overflow-hidden">
            {rest.map((post, idx) => (
              <PostCard key={post.id} post={post} delay={idx * 0.06 + 0.15} />
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

      {/* Load more */}
      <div className="text-center pb-10">
        <button className="btn-green-outline">Load More Articles</button>
      </div>

      <Newsletter />
      <StatsRow />
    </div>
  );
}

export default Home;
