import { X } from "lucide-react";

export default function CreateNoteModal({ isOpen, onClose }) {
if (!isOpen) return null;

return ( <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"> <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl p-8 shadow-2xl">


    <div className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-bold text-white">
        Create New Note
      </h2>

      <button
        onClick={onClose}
        className="text-slate-400 hover:text-white"
      >
        <X />
      </button>
    </div>

    <input
      type="text"
      placeholder="Note Title"
      className="w-full bg-slate-800 rounded-xl p-4 mb-4 text-white outline-none border border-slate-700 focus:border-purple-500"
    />

    <input
      type="text"
      placeholder="Category"
      className="w-full bg-slate-800 rounded-xl p-4 mb-4 text-white outline-none border border-slate-700 focus:border-purple-500"
    />

    <textarea
      rows="10"
      placeholder="Write your note..."
      className="w-full bg-slate-800 rounded-xl p-4 text-white outline-none resize-none border border-slate-700 focus:border-purple-500"
    />

    <div className="flex justify-end gap-4 mt-8">
      <button
        onClick={onClose}
        className="px-6 py-3 rounded-xl border border-slate-700 text-white hover:bg-slate-800"
      >
        Cancel
      </button>

      <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white">
        Save Note
      </button>
    </div>

  </div>
</div>

);
}
