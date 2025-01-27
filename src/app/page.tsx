import React from "react";
import { Button } from "@/components/ui/button";

const colors = [
  { name: "Primary", bg: "bg-primary", text: "text-primary-foreground" },
  { name: "Secondary", bg: "bg-secondary", text: "text-secondary-foreground" },
  { name: "Accent", bg: "bg-accent", text: "text-accent-foreground" },
  {
    name: "Destructive",
    bg: "bg-destructive",
    text: "text-destructive-foreground",
  },
  { name: "Muted", bg: "bg-muted", text: "text-muted-foreground" },
  { name: "Background", bg: "bg-background", text: "text-foreground" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-lg my-2">next v15 + shadcn/ui</h1>
      <p className="font-sans">Your font in sans</p>
      <p className="font-mono">Your font in mono</p>

      <h1 className="text-lg mt-8">Color Theme</h1>
      <div className="grid grid-cols-3 my-4 gap-4">
        {colors.map((color) => (
          <div
            key={color.name}
            className={`p-4 h-10 flex justify-center items-center ${color.bg} ${color.text} rounded-lg border border-border shadow-md`}
          >
            {color.name}
          </div>
        ))}
      </div>

      <h1 className="text-lg mt-8">Button Variants</h1>
      <div className="grid grid-rows-2 grid-cols-3 my-2 gap-2">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  );
}
