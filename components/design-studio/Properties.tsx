"use client";

import { useState } from "react";

import ColorPicker from "./ColorPicker";
import FontSize from "./FontSize";
import FontFamily from "./FontFamily";

import { useDesignStudioStore } from "@/store/designStudioStore";

export default function Properties() {
  const { canvas, selectedObject } = useDesignStudioStore();

  const [color, setColor] = useState("#2563EB");
  const [fontSize, setFontSize] = useState(32);
  const [fontFamily, setFontFamily] = useState("Arial");

  // Change Text Color
  const updateColor = (color: string) => {
    if (!canvas || !selectedObject) return;

    selectedObject.set({
      fill: color,
    });

    canvas.renderAll();
  };

  // Change Font Size
  const updateFontSize = (size: number) => {
    if (!canvas || !selectedObject) return;

    selectedObject.set({
      fontSize: size,
    });

    canvas.renderAll();
  };

  // Change Font Family
  const updateFontFamily = (font: string) => {
    if (!canvas || !selectedObject) return;

    selectedObject.set({
      fontFamily: font,
    });

    canvas.renderAll();
  };

  return (
    <aside className="rounded-2xl bg-white p-5 shadow">
      <h2 className="mb-6 text-xl font-semibold">
        Properties
      </h2>

      {!selectedObject ? (
        <p className="text-sm text-gray-500">
          Select a text or image to edit.
        </p>
      ) : (
        <div className="space-y-6">
          <ColorPicker
            value={color}
            onChange={(value) => {
              setColor(value);
              updateColor(value);
            }}
          />

          <FontSize
            value={fontSize}
            onChange={(value) => {
              setFontSize(value);
              updateFontSize(value);
            }}
          />

          <FontFamily
            value={fontFamily}
            onChange={(value) => {
              setFontFamily(value);
              updateFontFamily(value);
            }}
          />
        </div>
      )}
    </aside>
  );
}