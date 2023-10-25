"use client";

import { Combobox, Transition } from "@headlessui/react";

import { Label } from "@/components/ui/label";
import React, { FC } from "react";
import Select from "react-select";
import Creatable from "react-select/creatable";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface TagDropDownProps {}

const people: { id: Number; name: string }[] = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
  { id: 6, name: "Rickie Wolf" },
  { id: 7, name: "Richmond Kirlin" },
  { id: 8, name: "Annabel Emard" },
  { id: 9, name: "Gwendolyn Streich" },
  { id: 10, name: "Wilbur Ferry" },
  { id: 11, name: "Joey Dare" },
  { id: 12, name: "Everett Schuppe" },
  { id: 13, name: "Carroll Morissette" },
  { id: 14, name: "Rosalyn Schmitt Jr." },
  { id: 15, name: "Gavin Bashirian" },
  { id: 16, name: "Doris Wilderman" },
];

const TagDropDown: FC<TagDropDownProps> = () => {
  const [selectedPeople, setSelectedPeople] = useState<
    { id?: number; name?: string }[]
  >([]);
  const [query, setQuery] = useState("");

  const handleSearch = (e: any) => {
    setQuery(e.target.value);
  };

  const filteredOptions = query
    ? people.filter((option) =>
        option.name?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    if (query === "") {
    }
  }, [query]);

  return (
    <div>
      <Label className="text-xs font-medium text-gray-600 uppercase">
        Tags
      </Label>

      <Combobox
        as="div"
        value={selectedPeople}
        onChange={setSelectedPeople}
        // @ts-ignore
        multiple="true"
        className="relative  border rounded border-input "
        aft
      >
        <div className="flex items-center px-4">
          <BiSearch className="w-6 h-6 text-gray-600 " aria-hidden="true" />
          <Combobox.Input
            onChange={handleSearch}
            className="w-full h-10 text-sm text-gray-700 placeholder-gray-400 bg-transparent border-0 focus:ring-0"
            placeholder="Search..."
          />
        </div>
        {filteredOptions.length > 0 && (
          <Combobox.Options className=" overflow-y-auto text-sm rounded-b-md max-h-[200px] py-2 border-t scrollbar-thin scrollbar-thumb-accent">
            {filteredOptions.map((option, index) => (
              <Combobox.Option key={option.name} value={option}>
                {({ active }) => (
                  <div
                    className={`${
                      active ? "bg-accent text-accent-foreground" : "bg-white"
                    } mx-2 px-4 py-2 rounded`}
                  >
                    {option.name}
                  </div>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
        {query && query !== "" && filteredOptions.length === 0 && (
          <p className="px-4 py-2 text-sm">
            No results for "{query}". Try something else?
          </p>
        )}
      </Combobox>

      <div className="flex flex-wrap gap-1 w-full my-2">
        {selectedPeople.map((person) => (
          <div
            key={person.id}
            className="bg-accent flex items-end p-2 rounded "
          >
            <span key={person.id} className="text-xs inline-flex">
              {person.name}
              <div className="hover:text-red-500 inline-flex items-center ml-1 cursor-pointer">
                <span className="sr-only">Remove person</span>
                <RxCross2 className="w-3 h-3" aria-hidden="true" />
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagDropDown;
