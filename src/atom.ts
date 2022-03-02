import { atom } from "recoil";

interface ItodoState {
  [key: string]: string[];
}

export const todoState = atom<ItodoState>({
  key: "todo",
  default: {
    "To Do": ["a", "b"],
    Doing: ["c", "d", "e"],
    Done: ["f"],
  },
});
