'use client'
import ReactMarkdown from 'react-markdown';
import Textarea from 'react-textarea-autosize';
import {useState} from 'react';

export default function MarkdownEditor  ({value, onChange}:any) {
    const [preview, setPreview] = useState(false);
    return(
 <div className="border rounded p-2">
      <button className="text-xs underline" onClick={() => setPreview(!preview)}>
        {preview ? "Edit" : "Preview"}
      </button>
      {preview ? (
        <div className="prose">
          <ReactMarkdown>{value}</ReactMarkdown>
        </div>
      ) : (
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-2 border rounded"
        />
      )}
    </div>
    );
}