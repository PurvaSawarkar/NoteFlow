import { Settings, LogOut, User } from "lucide-react";

export default function ProfileDropdown() {
return ( <div className="absolute right-0 top-14 w-56 rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden"> <button className="w-full flex items-center gap-3 px-5 py-4 hover:bg-slate-800 text-left"> <User size={18} />
My Profile </button>


  <button className="w-full flex items-center gap-3 px-5 py-4 hover:bg-slate-800 text-left">
    <Settings size={18} />
    Settings
  </button>

  <hr className="border-slate-700" />

  <button className="w-full flex items-center gap-3 px-5 py-4 hover:bg-red-500/20 text-red-400 text-left">
    <LogOut size={18} />
    Logout
  </button>
</div>


);
}
