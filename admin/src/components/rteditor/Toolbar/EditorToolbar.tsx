"use client";

import React, { FC, useCallback } from "react";
import { Editor } from "@tiptap/react";
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
  AiOutlineStrikethrough,
  AiFillCaretDown,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
  AiOutlineLink,
} from "react-icons/ai";
import { RiDoubleQuotesL } from "react-icons/ri";
import { BsCode, BsBraces } from "react-icons/bs";
import ToggleButton from "./ToggleButton";
import { getFocusedEditor } from "@/lib/utils";
import HeadingDropdown from "./HeadingDropdown";
import { Level } from "@tiptap/extension-heading";
import EmbedYoutubeVideo from "./EmbedYoutubeVideo";
import InsertLinkModal, { LinkData } from "./Link/InsertLinkModal";

interface EditorToolbarProps {
  editor: Editor;
}

const EditorToolbar: FC<EditorToolbarProps> = ({ editor }) => {
  const getSelectionRange = useCallback(() => {
    const { from, to } = editor.state.selection;

    return { from, to };
  }, [editor]);

  const getSelectionText = useCallback(() => {
    const { from, to } = editor.state.selection;

    return editor.state.doc.textBetween(from, to);
  }, [editor]);

  const getExistingLink = useCallback(() => {
    const exisitingLink = editor.isActive("link")
      ? editor.getAttributes("link")
      : "";

    return exisitingLink;
  }, [editor.getAttributes("link")]);

  const headerOptions = [
    {
      label: "Paragraph",
      value: 0,
    },
    {
      label: "Heading 1",
      value: 1,
    },
    {
      label: "Heading 2",
      value: 2,
    },
    {
      label: "Heading 3",
      value: 3,
    },
  ];

  const setHeading = (headingLevel?: Level) => {
    if (headingLevel) {
      getFocusedEditor(editor).toggleHeading({ level: headingLevel }).run();
    } else {
      getFocusedEditor(editor).setParagraph().run();
    }
  };

  const getLabel = (): string => {
    if (editor.isActive("heading", { level: 1 })) return "Heading 1";
    if (editor.isActive("heading", { level: 2 })) return "Heading 2";
    if (editor.isActive("heading", { level: 3 })) return "Heading 3";

    return "Paragraph";
  };

  const getActive = useCallback((): boolean => {
    if (
      editor.isActive("heading", { level: 1 }) ||
      editor.isActive("heading", { level: 2 }) ||
      editor.isActive("heading", { level: 3 })
    )
      return true;
    else return false;
  }, [editor]);

  const handleYoutubeVideo = (url: string) => {
    editor.chain().focus().setYoutubeVideo({ src: url }).run();
  };

  const handleLinkSubmit = ({ href, openInNewTab, rel }: LinkData) => {
    console.log(href);

    if (openInNewTab) {
      editor.commands.setLink({
        href: href,
        target: "_blank",
        rel: rel ?? "noopener noreferrer nofollow",
      });
    } else {
      editor.commands.setLink({
        href: href,
        target: "_self",
        rel: rel ?? "noopener noreferrer nofollow",
      });
    }
  };

  const getInitialState = useCallback(() => {
    const { href, target, rel } = editor.getAttributes("link");

    return {
      href: href,
      openInNewTab: target === "_blank" ? true : false,
      rel: rel,
    };
  }, [editor]);

  return (
    <div className="flex flex-row items-center h-full mx-4">
      <div className="flex flex-row space-x-1">
        <ToggleButton
          icon={AiOutlineBold}
          active={editor.isActive("bold")}
          onClick={() => getFocusedEditor(editor).toggleBold().run()}
        />
        <ToggleButton
          icon={AiOutlineItalic}
          active={editor.isActive("italic")}
          onClick={() => getFocusedEditor(editor).toggleItalic().run()}
        />
        <ToggleButton
          icon={AiOutlineUnderline}
          active={editor.isActive("underline")}
          onClick={() => getFocusedEditor(editor).toggleUnderline().run()}
        />
        <ToggleButton
          icon={AiOutlineStrikethrough}
          active={editor.isActive("strike")}
          onClick={() => getFocusedEditor(editor).toggleStrike().run()}
        />
      </div>

      <div className="ml-4">
        <HeadingDropdown
          options={headerOptions}
          getLabel={getLabel}
          setHeading={setHeading}
        />
      </div>

      <div className="flex ml-4 space-x-1">
        <ToggleButton
          icon={AiOutlineOrderedList}
          active={editor.isActive("orderedList")}
          onClick={() => getFocusedEditor(editor).toggleOrderedList().run()}
        />
        <ToggleButton
          icon={AiOutlineUnorderedList}
          active={editor.isActive("bulletList")}
          onClick={() => getFocusedEditor(editor).toggleBulletList().run()}
        />
      </div>

      <div className="flex ml-4 space-x-1">
        <ToggleButton
          icon={RiDoubleQuotesL}
          active={editor.isActive("blockquote")}
          onClick={() => getFocusedEditor(editor).toggleBlockquote().run()}
        />

        <ToggleButton
          icon={BsBraces}
          active={editor.isActive("codeBlock")}
          onClick={() => getFocusedEditor(editor).toggleCodeBlock().run()}
        />
      </div>

      <div className="ml-4 space-x-1">
        <InsertLinkModal
          selectedText={getSelectionText()}
          handleSubmit={handleLinkSubmit}
          initialState={getInitialState()}
        >
          <AiOutlineLink className="w-5 h-5" />
        </InsertLinkModal>
        <EmbedYoutubeVideo handleSubmit={handleYoutubeVideo} />
      </div>
    </div>
  );
};

export default EditorToolbar;
