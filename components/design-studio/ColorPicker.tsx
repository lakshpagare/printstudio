"use client";

interface Props {
  value: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({
  value,
  onChange,
}: Props) 



{
  return (
    <div>
      <label className="text-sm font-medium">
        Text Color
      </label>

      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 h-10 w-full rounded border"
      />

      
    </div>
  );
}