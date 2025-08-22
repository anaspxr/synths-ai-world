"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

export default function Disclaimer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        variant="link"
        onClick={() => setOpen(!open)}
        rounded="md"
        className="w-full justify-between px-0">
        Disclaimer!!
        <ChevronDown
          className={`${
            open && "rotate-180"
          } transition-transform duration-300`}
        />
      </Button>
      <div className="text-xs text-gray-500 pr-1 mb-2">
        <p className="mb-1">This app was originally a reddit-clone!</p>
        {open && (
          <>
            <a
              className="underline hover:text-black"
              target="_blank"
              rel="noopener noreferrer"
              href="https://reddit-clone.anasp.me">
              reddit-clone.anasp.me
            </a>
            <p className="my-1">
              This application was originally created as a learning project
              inspired by Reddit’s community-based discussion format. The whole
              UI and the feel may resemble Reddit. But, It is not affiliated
              with, endorsed by, or connected to Reddit or its parent company in
              any way. All trademarks, logos, and brand names are the property
              of their respective owners.
            </p>
            <p>
              While the design and functionality may resemble Reddit due to its
              origin as a clone project, this platform is an independent
              application and has since been developed with its own features,
              vision, and direction.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
