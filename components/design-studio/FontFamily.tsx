"use client";

interface Props {
  value: string;
  onChange: (font: string) => void;
}

const fonts = [
  "Arial",
  "Verdana",
  "Georgia",
  "Courier New",
  "Times New Roman",
];

export default function FontFamily({
  value,
  onChange,
}: Props) {
  return (
    <div>
      <label className="text-sm font-medium">
        Font Family
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border p-2"
      >
        {fonts.map((font) => (
          <option key={font}>
            {font}
          </option>
        ))}
      </select>
    </div>
  );
}