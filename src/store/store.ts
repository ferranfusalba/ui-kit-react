import { create } from "zustand";

interface CounterStore {
  count: number;
  value: string;
  increment: () => void;
  decrement: () => void;
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
