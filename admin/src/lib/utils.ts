import { Editor } from "@tiptap/react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFocusedEditor = (editor: Editor) => {
  return editor.chain().focus();
};
