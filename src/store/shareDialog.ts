import { create } from "zustand";

type DialogState = {
  dialogSubtitle: string;
  setDialogSubtitle: (text: string) => void;
};

export const dialogStore = create<DialogState>((set) => ({
  dialogSubtitle: "",
  setDialogSubtitle: (text: string) => set({ dialogSubtitle: text }),
}));
