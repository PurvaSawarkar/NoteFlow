import {
LayoutDashboard,
FileText,
Star,
Archive,
Settings,
X,
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
const menuItems = [
{ icon: <LayoutDashboard size={20} />, text: "Dashboard" },
{ icon: <FileText size={20} />, text: "My Notes" },
{ icon: <Star size={20} />, text: "Favorites" },
{ icon: <Archive size={20} />, text: "Archive" },
{ icon: <Settings size={20} />, text: "Settings" },
];

return (
<>
{open && (
<div
onClick={() => setOpen(false)}
className="fixed inset-0 bg-black/50 z-40 lg:hidden"
/>
)}

  <aside
    className={`
      fixed lg:static z-50
      h-screen w-72
      bg-slate-900
      border-r border-slate-800
      transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    `}
  >
    <div className="flex items-center justify-between p-6 border-b border-slate-800">
      <h1 className="text-3xl font-bold text-purple-400">
        NoteFlow
      </h1>

      <button
        onClick={() => setOpen(false)}
        className="lg:hidden"
      >
        <X />
      </button>
    </div>

    <nav className="mt-8 px-4 space-y-2">
      {menuItems.map((item) => (
        <button
          key={item.text}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800 transition"
        >
          {item.icon}
          {item.text}
        </button>
      ))}
    </nav>
  </aside>
</>

);
}
