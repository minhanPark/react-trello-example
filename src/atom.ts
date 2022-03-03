import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface ItodoState {
  [key: string]: ITodo[];
}

export const todoState = atom<ItodoState>({
  key: "todo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
