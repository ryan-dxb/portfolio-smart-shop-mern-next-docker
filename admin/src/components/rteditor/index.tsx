"use client";

import React, { FC } from "react";
import { Label } from "../ui/label";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ScrollArea } from "../ui/scroll-area";
import EditorToolbar from "./Toolbar/EditorToolbar";

// extensions
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Youtube from "@tiptap/extension-youtube";
import TipTapImage from "@tiptap/extension-image";

interface RichTextEditorProps {}

const RichTextEditor: FC<RichTextEditorProps> = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "You can write your full product description here...",
      }),
      Link,
      Youtube,
      TipTapImage,
    ],

    onUpdate() {
      const content = editor?.getHTML();
      console.log(content);
    },

    editorProps: {
      attributes: {
        class:
          "font-normal prose dark:prose-invert prose-sm xl:prose-lg py-4 focus:outline-none mx-auto",
      },
    },
  });
  return (
    <div>
      <Label
        htmlFor="rich-text-editor"
        className="text-xs font-medium text-gray-600 uppercase"
      >
        Product Description
      </Label>
      <div className="flex flex-col h-[240px] border overflow-hidden">
        <div className="w-full overflow-x-auto overflow-y-hidden border-b h-14 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted">
          {editor && <EditorToolbar editor={editor} />}
        </div>
        <div className="w-full h-[200px]  mx-auto overflow-auto ">
          {editor && <EditorContent editor={editor} />}
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
