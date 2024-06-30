import { create } from "zustand";

type CurrencyState = {
  currentCurrency: string;
  currentAmount: number | null;
  currencySign: string;
  reference: string;
  paymentURL: string;
  identifier: string;
  setPaymentURL: (url: string) => void;
  setIdentifier: (id: string) => void;
  setReference: (newReference: string) => void;
  setCurrency: (newCurrency: string) => void;
  setAmount: (newAmount: number | null) => void;
  updateCurrencySign: () => void;
};

export const currencyStore = create<CurrencyState>((set) => ({
  currentCurrency: "USD",
  currentAmount: 0,
  currencySign: "$",
  reference: "",
  paymentURL: "",
  identifier: "",
  setIdentifier: (id: string) => set(() => ({ identifier: id })),
  setPaymentURL: (url: string) => set(() => ({ paymentURL: url })),
  setReference: (newReference: string) =>
    set(() => ({ reference: newReference })),
  setCurrency: (newCurrency: string) => {
    set(() => {
      const newSign =
        newCurrency === "USD" ? "$" : newCurrency === "EUR" ? "€" : "£";
      return { currentCurrency: newCurrency, currencySign: newSign };
    });
  },
  setAmount: (newAmount: number | null) =>
    set(() => ({ currentAmount: newAmount })),
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
