"use client";

import React, { FC, useCallback, useEffect, useState } from "react";
import { Label } from "../ui/label";
import { useEditor, EditorContent, getMarkRange, Range } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ScrollArea } from "../ui/scroll-area";
import EditorToolbar from "./Toolbar/EditorToolbar";

// extensions
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Youtube from "@tiptap/extension-youtube";
import TipTapImage from "@tiptap/extension-image";
import EditLink from "./Toolbar/Link/EditLink";

interface RichTextEditorProps {}

const RichTextEditor: FC<RichTextEditorProps> = () => {
  const [selectionRange, setSelectionRange] = useState<Range>();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "You can write your full product description here...",
      }),
      Link.extend({
        inclusive: false,
      }).configure({
        autolink: false,
        openOnClick: false,
        HTMLAttributes: {
          target: "_blank",
          rel: "noopener noreferrer",

          class: "rich-text-link",
        },
        linkOnPaste: true,
      }),
      Youtube,
      TipTapImage,
    ],

    onUpdate() {
      const content = editor?.getHTML();
    },

    editorProps: {
      handleClick(view, pos, event) {
        const state = view.state;
        const selectionRange = getMarkRange(
          state.doc.resolve(pos),
          state.schema.marks.link
        );

        if (selectionRange) {
          setSelectionRange(selectionRange);
        }
      },

      attributes: {
        class:
          "font-normal prose dark:prose-invert prose-sm mt-6 py-4 focus:outline-none mx-auto",
      },
    },
  });

  useEffect(() => {
    if (editor && selectionRange) {
      editor.commands.setTextSelection(selectionRange);
    }

    return () => {
      setSelectionRange(undefined);
    };
  }, [editor, selectionRange]);

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
        {editor ? <EditLink editor={editor} /> : null}
        <div className="w-full h-[200px]  mx-auto overflow-auto ">
          {editor && <EditorContent editor={editor} />}
        </div>
      </div>
    </div>
  );
};

export default RichTextEditor;
