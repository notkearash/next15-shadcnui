import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

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
    <div className="container mx-auto max-w-4xl p-8 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Next.js 15 + shadcn/ui</h1>
        <p className="text-muted-foreground">A modern starter template</p>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center gap-3 p-4 border rounded-lg">
          <span className="text-lg font-medium">Theme:</span>
          <ModeToggle />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Typography</h2>
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <p className="font-sans text-lg">Sans Serif</p>
            <p className="text-sm text-muted-foreground">font-sans</p>
          </div>
          <div className="text-center">
            <p className="font-mono text-lg">Monospace</p>
            <p className="text-sm text-muted-foreground">font-mono</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {colors.map((color) => (
            <div
              key={color.name}
              className={`p-6 flex justify-center items-center ${color.bg} ${color.text} rounded-lg border`}
            >
              <span className="font-medium">{color.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Button Variants</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
        <span>Made by</span>
        <a href="https://github.com/notkearash" className="hover:text-foreground transition-colors">
          @notkearash
        </a>
        <span>•</span>
        <a href="https://github.com/notkearash/next15-shadcnui" className="hover:text-foreground transition-colors">
          View on GitHub
        </a>
      </div>
    </div>
  );
}
