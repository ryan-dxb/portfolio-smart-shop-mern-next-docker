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
          "font-normal prose dark:prose-invert prose-sm m-5 focus:outline-none ",
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
      <ScrollArea className="w-full h-[240px] border">
        <div className="w-full h-12 border-b">
          {editor && <EditorToolbar editor={editor} />}
        </div>

        {editor && <EditorContent editor={editor} />}
      </ScrollArea>
    </div>
  );
};

export default RichTextEditor;
