"use client";
import { useRouter } from "next/navigation";
import MarkdownEditor from "@/components/MarkdownEditor";
import { useState } from "react";

export default function NewNote() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  async function submit() {
    await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/notes`, {
      method: "POST",
      body: JSON.stringify({ title, content, tags }),
    });
    router.push("/");
  }

  return (
    <div className="p-6">
      <input className="border w-full p-2" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <input className="border w-full p-2 my-2" placeholder="Tags (comma separated)" onChange={(e) => setTags(e.target.value)} />
      <MarkdownEditor value={content} onChange={setContent} />
      <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded" onClick={submit}>
        Save
      </button>
    </div>
  );
}
