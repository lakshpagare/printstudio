"use client";

interface Props {
  value: number;
  onChange: (size: number) => void;
}

export default function FontSize({
    
  value,
  onChange,
}: Props) {

    
    
  return (
    <div>
      <label className="text-sm font-medium">
        Font Size ({value}px)
      </label>

      <input
        type="range"
        min={10}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full"
      />
    </div>
  );
}