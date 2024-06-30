import { create } from "zustand";

type SocketState = {
  dialogSubtitle: string;
  setDialogSubtitle: (text: string) => void;
};

export const socketStore = create<SocketState>((set) => ({
  dialogSubtitle: "north",
  setDialogSubtitle: (text: string) => set({ dialogSubtitle: text }),
}));
