import Link from 'next/link';

async function getNotes() {
  try {
    const res = await fetch("/api/notes", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch notes");
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
export default async function Home() {
    const notes = await getNotes();
  return (
     <main className="p-6 flex flex-col justify-center items-center max-h-screen">
      <div className="w-full max-w-2xl flex justify-end">
        <Link className="bg-blue-500 text-white px-4 py-2 rounded" href="/notes/new">
          + New Note
        </Link>
      </div>
      <div className="mt-4 grid gap-3 bg-gray-400 p-4 rounded w-full max-w-2xl text-center">
        {notes.length > 0 ? notes.map((n: any) => (
          <Link key={n.id} href={`/notes/${n.id}/edit`} className="border p-3 rounded">
            <h2 className="font-bold">{n.title}</h2>
            <p>{n.tags}</p>
          </Link>
        )) : <p className="text-gray-500">No notes found</p>}
      </div>
    </main>
  );
}
