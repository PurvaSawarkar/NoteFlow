import { X } from "lucide-react";

export default function EditNoteModal({
open,
onClose,
note,
}) {
if (!open) return null;

return ( <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">


  <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl p-8">

    <div className="flex justify-between items-center mb-8">

      <h2 className="text-3xl font-bold">
        Edit Note
      </h2>

      <button onClick={onClose}>
        <X className="text-slate-400 hover:text-white" />
      </button>

    </div>

    <input
      defaultValue={note?.title}
      placeholder="Title"
      className="w-full bg-slate-800 rounded-xl p-4 mb-4 outline-none border border-slate-700 focus:border-purple-500"
    />

    <input
      defaultValue={note?.category}
      placeholder="Category"
      className="w-full bg-slate-800 rounded-xl p-4 mb-4 outline-none border border-slate-700 focus:border-purple-500"
    />

    <textarea
      rows="10"
      defaultValue={note?.content}
      placeholder="Write your note..."
      className="w-full bg-slate-800 rounded-xl p-4 resize-none outline-none border border-slate-700 focus:border-purple-500"
    />

    <div className="flex justify-end gap-4 mt-8">

      <button
        onClick={onClose}
        className="px-6 py-3 rounded-xl border border-slate-700"
      >
        Cancel
      </button>

      <button
        className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700"
      >
        Save Changes
      </button>

    </div>

  </div>

</div>

);
}
