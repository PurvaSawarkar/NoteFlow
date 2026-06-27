import { motion } from "framer-motion";
import {
  Search,
  Bell,
  StickyNote,
  CheckCircle,
  Clock3,
} from "lucide-react";

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -8 }}
      className="relative w-full max-w-lg"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-3xl bg-indigo-500/20 blur-3xl"></div>

      {/* Card */}
      <div className="relative rounded-3xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl p-6 shadow-2xl">

        {/* Top Bar */}
        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            Dashboard
          </h2>

          <Bell className="text-slate-400" />
        </div>

        {/* Search */}
        <div className="mt-6 flex items-center rounded-xl bg-slate-800 px-4 py-3">

          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search notes..."
            className="ml-3 w-full bg-transparent text-white outline-none placeholder:text-slate-500"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">

          <div className="rounded-xl bg-slate-800 p-4">

            <StickyNote
              className="text-indigo-400 mb-2"
              size={22}
            />

            <h3 className="text-white text-xl font-bold">
              12
            </h3>

            <p className="text-slate-400 text-sm">
              Notes
            </p>

          </div>

          <div className="rounded-xl bg-slate-800 p-4">

            <CheckCircle
              className="text-green-400 mb-2"
              size={22}
            />

            <h3 className="text-white text-xl font-bold">
              8
            </h3>

            <p className="text-slate-400 text-sm">
              Completed
            </p>

          </div>

          <div className="rounded-xl bg-slate-800 p-4">

            <Clock3
              className="text-yellow-400 mb-2"
              size={22}
            />

            <h3 className="text-white text-xl font-bold">
              4
            </h3>

            <p className="text-slate-400 text-sm">
              Pending
            </p>

          </div>

        </div>

        {/* Notes */}
        <div className="mt-7 space-y-4">

          <div className="rounded-xl bg-slate-800 p-4 hover:bg-slate-700 transition">

            <h3 className="text-white font-semibold">
              🚀 React Portfolio
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Finish NoteFlow landing page.
            </p>

          </div>

          <div className="rounded-xl bg-slate-800 p-4 hover:bg-slate-700 transition">

            <h3 className="text-white font-semibold">
              ☁ AWS Deployment
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Deploy using Docker + EC2 + Nginx.
            </p>

          </div>

          <div className="rounded-xl bg-slate-800 p-4 hover:bg-slate-700 transition">

            <h3 className="text-white font-semibold">
              📚 DSA Revision
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Arrays, Trees and Graphs.
            </p>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default DashboardPreview;