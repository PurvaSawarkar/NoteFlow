export default function StatsCard({ title, value, color }) {
return ( <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1">


  <p className="text-slate-400 text-sm">
    {title}
  </p>

  <h2
    className={`text-4xl font-bold mt-3 ${color}`}
  >
    {value}
  </h2>

</div>


);
}
