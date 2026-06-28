import { TriangleAlert } from "lucide-react";

export default function DeleteModal({
open,
onClose,
onDelete,
}) {
if (!open) return null;

return ( <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">


  <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 w-full max-w-md">

    <div className="flex flex-col items-center text-center">

      <TriangleAlert
        size={60}
        className="text-red-500 mb-4"
      />

      <h2 className="text-2xl font-bold mb-3">
        Delete Note?
      </h2>

      <p className="text-slate-400 mb-8">
        This action cannot be undone.
      </p>

    </div>

    <div className="flex justify-end gap-4">

      <button
        onClick={onClose}
        className="px-5 py-3 rounded-xl border border-slate-700"
      >
        Cancel
      </button>

      <button
        onClick={onDelete}
        className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700"
      >
        Delete
      </button>

    </div>

  </div>

</div>

);
}
