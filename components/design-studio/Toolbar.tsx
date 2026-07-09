import {
  Image,
  Type,
  Undo2,
  Redo2,
  ZoomIn,
  Save,
} from "lucide-react";

const tools = [
  { icon: Image, label: "Image" },
  { icon: Type, label: "Text" },
  { icon: Undo2, label: "Undo" },
  { icon: Redo2, label: "Redo" },
  { icon: ZoomIn, label: "Zoom" },
  { icon: Save, label: "Save" },
];

export default function Toolbar() {
  return (
    <div className="mb-6 flex flex-wrap gap-3 rounded-2xl bg-white p-4 shadow">
      {tools.map((tool) => {
        const Icon = tool.icon;

        return (
          <button
            key={tool.label}
            className="flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-blue-50 hover:border-blue-500"
          >
            <Icon size={18} />
            {tool.label}
          </button>
        );
      })}
    </div>
  );
}