"use client";

import { useState } from "react";

interface AddTextProps {
  onAddText: (text: string) => void;
}

export default function AddText({
  onAddText,
}: AddTextProps) {
  const [text, setText] = useState("");

  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Enter your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-72 rounded-lg border px-4 py-2"
      />

      <button
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        onClick={() => {
          if (!text.trim()) return;

          onAddText(text);

          setText("");
        }}
      >
        Add Text
      </button>
    </div>
  );
}