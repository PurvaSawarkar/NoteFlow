import { useState } from "react";
import { Search, Bell, UserCircle, Menu } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";

export default function Topbar({ setSidebarOpen }) {
const [open, setOpen] = useState(false);

return ( <header className="flex items-center justify-between bg-slate-900 border-b border-slate-800 px-6 py-5"> <div className="flex items-center gap-4">
<button
onClick={() => setSidebarOpen(true)}
className="lg:hidden"
> <Menu /> </button>


    <div className="relative">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        placeholder="Search notes..."
        className="bg-slate-800 rounded-xl py-3 pl-11 pr-4 text-white outline-none w-48 md:w-80"
      />
    </div>
  </div>

  <div className="flex items-center gap-6 relative">
    <Bell className="cursor-pointer" />

    <button onClick={() => setOpen(!open)}>
      <UserCircle
        size={34}
        className="text-purple-400"
      />
    </button>

    {open && <ProfileDropdown />}
  </div>
</header>

);
}
