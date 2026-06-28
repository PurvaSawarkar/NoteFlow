import { Pin, Pencil, Trash2 } from "lucide-react";

export default function NoteCard({ note }) {
return (
<div
className={`bg-slate-900 rounded-2xl border ${note.color} border-l-4 border-slate-800 p-5 hover:scale-[1.02] transition-all duration-300`}
> <div className="flex justify-between items-start"> <h3 className="font-bold text-lg">
{note.title} </h3>


    {note.pinned && (
      <Pin
        size={18}
        className="fill-yellow-400 text-yellow-400"
      />
    )}
  </div>

  <p className="text-purple-400 mt-3">
    {note.category}
  </p>

  <p className="text-slate-400 text-sm mt-6">
    Updated {note.updated}
  </p>

  <div className="flex gap-3 mt-6">
    <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg text-sm">
      <Pencil size={16} />
      Edit
    </button>

    <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm">
      <Trash2 size={16} />
      Delete
    </button>
  </div>
</div>

);
}
