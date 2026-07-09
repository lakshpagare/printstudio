"use client";

interface UploadImageProps {
  onUpload: (file: File) => void;
}

export default function UploadImage({
  onUpload,
}: UploadImageProps) {
  return (
    <label className="cursor-pointer rounded-xl border px-4 py-2 hover:bg-slate-100">
      Upload Image

      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (file) {
            onUpload(file);
          }
        }}
      />
    </label>
  );
}