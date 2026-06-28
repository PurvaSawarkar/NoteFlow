export default function Settings() {
return ( <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center"> <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 w-full max-w-xl"> <h1 className="text-4xl font-bold mb-8">
Settings </h1>


    <div className="space-y-6">
      <div>
        <label className="block mb-2 text-slate-400">
          Display Name
        </label>

        <input
          className="w-full bg-slate-800 rounded-xl p-4"
          defaultValue="Purva Sawarkar"
        />
      </div>

      <div>
        <label className="block mb-2 text-slate-400">
          Email
        </label>

        <input
          className="w-full bg-slate-800 rounded-xl p-4"
          defaultValue="purvasawarkar2006@gmail.com"
        />
      </div>

      <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl">
        Save Changes
      </button>
    </div>
  </div>
</div>

);
}
