import Link from 'next/link';

async function getNotes() {
  const res = await fetch("http://localhost:3000/api/notes", { cache: "no-store" });
  return res.json();
}
export default async function Home() {
    const notes = await getNotes();
  return (
     <main className="p-6">
      <Link className="bg-blue-500 text-white px-4 py-2 rounded" href="/notes/new">
        + New Note
      </Link>
      <div className="mt-4 grid gap-3">
        {notes.map((n: any) => (
          <Link key={n.id} href={`/notes/${n.id}/edit`} className="border p-3 rounded">
            <h2 className="font-bold">{n.title}</h2>
            <p>{n.tags}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
