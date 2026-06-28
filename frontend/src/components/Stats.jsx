import { stats } from "../data/data";

const Stats = () => {
  return (
    <section className="py-24 bg-[#111827] text-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:scale-105 transition"
          >
            <h2 className="text-4xl font-bold text-purple-400">
              {item.number}
            </h2>
            <p className="mt-2 text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;