import { create } from "zustand";

type CurrencyState = {
  currentCurrency: string;
  currentAmount: string;
  currencySign: string;
  setCurrency: (newCurrency: string) => void;
  setAmount: (newAmount: string) => void;
  updateCurrencySign: () => void;
};

export const currencyStore = create<CurrencyState>((set) => ({
  currentCurrency: "USD",
  currentAmount: "",
  currencySign: "$",
  setCurrency: (newCurrency: string) => {
    set((state) => {
      const newSign =
        newCurrency === "USD" ? "$" : newCurrency === "EUR" ? "€" : "£";
      return { currentCurrency: newCurrency, currencySign: newSign };
    });
  },
  setAmount: (newAmount: string) => set(() => ({ currentAmount: newAmount })),
  updateCurrencySign: () => {
    set((state) => {
      const newSign =
        state.currentCurrency === "USD"
          ? "$"
          : state.currentCurrency === "EUR"
          ? "€"
          : "£";
      return { currencySign: newSign };
    });
  },
}));
