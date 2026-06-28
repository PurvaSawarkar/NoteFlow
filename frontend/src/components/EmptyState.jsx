import { FileText } from "lucide-react";

export default function EmptyState() {
return ( <div className="bg-slate-900 border border-dashed border-slate-700 rounded-3xl py-20 flex flex-col items-center justify-center text-center"> <FileText size={70} className="text-slate-500 mb-6" />


  <h2 className="text-2xl font-bold text-white mb-3">
    No Notes Found
  </h2>

  <p className="text-slate-400 max-w-md">
    Create your first note and start organizing your ideas with NoteFlow.
  </p>
</div>

);
}
