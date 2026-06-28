import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardStats from "../components/DashboardStats";
import NotesGrid from "../components/NotesGrid";
import CreateNoteModal from "../components/CreateNoteModal";

export default function Dashboard() {
const [openModal, setOpenModal] = useState(false);
const [sidebarOpen, setSidebarOpen] = useState(false);

return ( <div className="flex bg-slate-950 text-white min-h-screen"> <Sidebar
     open={sidebarOpen}
     setOpen={setSidebarOpen}
   />


  <div className="flex-1 lg:ml-0">
    <Topbar setSidebarOpen={setSidebarOpen} />

    <main className="p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-bold">
            Welcome back, Purva 👋
          </h1>

          <p className="text-slate-400 mt-2">
            Here's what's happening with your workspace today.
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold"
        >
          + New Note
        </button>
      </div>

      <DashboardStats />

      <NotesGrid />

      <CreateNoteModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </main>
  </div>
</div>

);
}
