import { Editor } from "@tiptap/react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFocusedEditor = (editor: Editor) => {
  return editor.chain().focus();
};

export const validateUrl = (url: string) => {
  if (!url.trim()) return "";

  let finalUrl;

  try {
    finalUrl = new URL(url);
  } catch (error) {
    finalUrl = new URL("http://" + url);
  }

  return finalUrl.origin;
};
