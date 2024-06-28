import { create } from "zustand";

type ConceptState = {
  concept: string;
  setConcept: (newConcept: string) => void;
};

export const conceptStore = create<ConceptState>((set) => ({
  concept: "north",
  setConcept: (mapName: string) => set({ concept: mapName }),
}));
