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
}));
