import { notes } from "../data/notes";
import NoteCard from "./NoteCard";
import EmptyState from "./EmptyState";

export default function NotesGrid() {
const pinned = notes.filter((note) => note.pinned);
const recent = notes.filter((note) => !note.pinned);

return ( <div className="mt-12 space-y-12"> <section> <h2 className="text-2xl font-bold mb-6">
📌 Pinned Notes </h2>


    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {pinned.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
        />
      ))}
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-bold mb-6">
      📝 Recent Notes
    </h2>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {recent.length > 0 ? (
        recent.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
          />
        ))
      ) : (
        <EmptyState />
      )}
    </div>
  </section>
</div>

);
}
