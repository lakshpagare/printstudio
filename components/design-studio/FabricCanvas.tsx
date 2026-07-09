"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, FabricImage, FabricText } from "fabric";
import UploadImage from "./UploadImage";
import AddText from "./AddText";
import { useDesignStudioStore } from "@/store/designStudioStore";

export default function FabricCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // const [canvas, setCanvas] = useState<Canvas | null>(null);
  const {
  canvas,
  setCanvas,
  setSelectedObject,
} = useDesignStudioStore();

  useEffect(() => {
    if (!canvasRef.current) return;

    const fabricCanvas = new Canvas(canvasRef.current, {
      width: 450,
      height: 550,
      backgroundColor: "#ffffff",
    });

    setCanvas(fabricCanvas);

    fabricCanvas.on("selection:created", (event) => {
  console.log("Object Selected");

  setSelectedObject(event.selected?.[0] ?? null);
});

fabricCanvas.on("selection:updated", (event) => {
  console.log("Selection Changed");

  setSelectedObject(event.selected?.[0] ?? null);
});

fabricCanvas.on("selection:cleared", () => {
  console.log("Nothing Selected");

  setSelectedObject(null);
});

    return () => {
  fabricCanvas.dispose();
  setCanvas(null);
  setSelectedObject(null);
};
    
  }, [setCanvas, setSelectedObject]);

  const handleUpload = (file: File) => {
    if (!canvas) return;

    const reader = new FileReader();

    reader.onload = async () => {
      const img = await FabricImage.fromURL(
        reader.result as string
      );

      img.scaleToWidth(200);

      canvas.add(img);

      canvas.setActiveObject(img);

      canvas.renderAll();
    };

    reader.readAsDataURL(file);
  };

  const handleAddText = (text: string) => {
  if (!canvas) return;

  const fabricText = new FabricText(text, {
    left: 120,
    top: 120,

    fontSize: 32,

    fill: "#2563EB",

    fontWeight: "bold",
  });

  canvas.add(fabricText);

  canvas.setActiveObject(fabricText);

  canvas.renderAll();
};



  return (
    <div className="space-y-4">

  <div className="flex gap-4">

    <UploadImage onUpload={handleUpload} />

    <AddText
      onAddText={handleAddText}
    />

  </div>

  <canvas
    ref={canvasRef}
    className="rounded-xl border shadow"
  />

</div>
  );
}