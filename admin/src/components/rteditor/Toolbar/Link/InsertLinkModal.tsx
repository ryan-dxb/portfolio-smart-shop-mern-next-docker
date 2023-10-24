"use client";
import React, { FC, useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiOutlineLink } from "react-icons/ai";
import InputWithLabel from "@/components/forms/InputWithLabel";
import { Checkbox } from "@/components/ui/checkbox";

export type LinkData = {
  href: string;
  openInNewTab: boolean;
  rel?: string;
};

interface InsertLinkModalProps {
  selectedText: string;
  handleSubmit: ({ href, openInNewTab, rel }: LinkData) => void;
  children: React.ReactNode;
  initialState: LinkData;
}

const defaultState = {
  href: "",
  openInNewTab: false,
  rel: "",
};

const InsertLinkModal: FC<InsertLinkModalProps> = ({
  selectedText,
  handleSubmit,
  initialState,
  children,
}) => {
  const [link, setLink] = useState<LinkData>(defaultState);

  const handleSubmitLink = () => {
    handleSubmit(link);
    setLink(defaultState);
  };

  useEffect(() => {
    if (initialState.href) {
      setLink(initialState);
    }

    return () => {
      setLink(defaultState);
    };
  }, [initialState]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-8 h-8 px-0 bg-transparent rounded hover:text-accent-foreground hover:bg-primary"
        >
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Insert/Edit Link</DialogTitle>
          <DialogDescription>
            To insert a link, select the text you want to link, then click the
            link button.
          </DialogDescription>
        </DialogHeader>
        <>
          <InputWithLabel
            value={link.href}
            setValue={(e) =>
              setLink((prev) => ({ ...prev, href: e.target.value }))
            }
            label="URL"
            name="href"
          />
          <InputWithLabel
            type="url"
            label="Selected Text"
            name="selectedtext"
            value={selectedText}
            disabled
          />
          <div className="flex items-center space-x-2">
            <Checkbox id="openInNewTab" className="rounded" />
            <Label htmlFor="openInNewTab" className="text-muted-foreground">
              Open in new tab
            </Label>
          </div>
        </>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSubmitLink}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InsertLinkModal;
