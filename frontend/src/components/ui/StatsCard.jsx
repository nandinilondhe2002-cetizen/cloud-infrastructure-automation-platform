function StatsCard({ title, value, color, icon }) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300">

      <div className="text-3xl mb-4">
        {icon}
      </div>

      <h1 className={`text-4xl font-bold ${color}`}>
        {value}
      </h1>

      <p className="text-gray-400 mt-2">
        {title}
      </p>

    </div>
  );
}

export default StatsCard;