"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main>
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </Button>
    </main>
  );
}
