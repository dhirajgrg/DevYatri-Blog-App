import { stats } from '../data'

export default function StatsRow() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-neutral-900 border border-neutral-900 rounded-sm overflow-hidden my-10">
      {stats.map(({ num, label }) => (
        <div key={label} className="bg-neutral-950 p-7 text-center">
          <div className="font-serif text-4xl text-neutral-50 leading-none mb-1">{num}</div>
          <div className="meta-text">{label}</div>
        </div>
      ))}
    </section>
  )
}
