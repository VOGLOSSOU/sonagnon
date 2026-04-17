import { stats } from "@/data/stats";

export default function Stats() {
  return (
    <section className="bg-green-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="text-white">
              <div className="text-2xl md:text-3xl font-extrabold">{stat.valeur}</div>
              <div className="text-xs md:text-sm text-green-200 mt-1 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
