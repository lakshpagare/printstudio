import { create } from "zustand";
import { Canvas, FabricObject } from "fabric";

interface DesignStudioStore {
  canvas: Canvas | null;
  selectedObject: FabricObject | null;

  setCanvas: (canvas: Canvas | null) => void;
  setSelectedObject: (object: FabricObject | null) => void;
}

export const useDesignStudioStore = create<DesignStudioStore>((set) => ({
  canvas: null,
  selectedObject: null,

  setCanvas: (canvas) => set({ canvas }),

  setSelectedObject: (object) =>
    set({
      selectedObject: object,
    }),
}));