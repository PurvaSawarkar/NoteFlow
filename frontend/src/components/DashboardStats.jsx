import StatsCard from "./StatsCard";

export default function DashboardStats() {
return ( <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">


  <StatsCard
    title="Total Notes"
    value="24"
    color="text-purple-400"
  />

  <StatsCard
    title="Favorites"
    value="8"
    color="text-pink-400"
  />

  <StatsCard
    title="Archived"
    value="5"
    color="text-green-400"
  />

  <StatsCard
    title="Categories"
    value="12"
    color="text-yellow-400"
  />

</div>

);
}
