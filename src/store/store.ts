import { create } from "zustand";

interface CounterStore {
  count: number;
  value: string;
  increment: () => void;
  decrement: () => void;
  setSelectedValue: (value: string) => void;
}

interface CoreStore {
  isNavbarExpanded: boolean;
  setNavbarExpanded: (value: boolean) => void;
  theme: string;
  setTheme: (value: string) => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  value: "",
  increment: () => {
    set({ count: 1 });
  },
  decrement: () => {
    set({ count: -1 });
  },
  setSelectedValue: (value: string) => {
    set({ value: value });
  },
}));

export const useCoreStore = create<CoreStore>((set) => ({
  isNavbarExpanded: true,
  setNavbarExpanded: (value: boolean) => {
    set({ isNavbarExpanded: value });
  },
  theme: localStorage.getItem("selectedTheme") || "light", // TODO: Review this
  setTheme: (value: string) => {
    set({ theme: value });
  },
}));
