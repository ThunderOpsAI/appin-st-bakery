"use client";

import { Check, Palette, X } from "lucide-react";
import { useState } from "react";
import { themes } from "./ThemeProvider";
import { useTheme } from "./ThemeProvider";

export default function ThemeLab() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[60]">
      {open && (
        <div className="theme-surface paper-card mb-3 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border p-4 text-[var(--foreground)]">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] theme-accent">Prototype preview</p>
              <h2 className="display-type text-xl font-bold">Find the bakery mood</h2>
            </div>
            <button aria-label="Close theme preview" onClick={() => setOpen(false)} className="rounded-full p-1 theme-muted hover:bg-[var(--surface-muted)]"><X size={16} /></button>
          </div>
          <div className="space-y-2">
            {themes.map((item) => (
              <button key={item.id} onClick={() => setTheme(item.id)} className={`flex w-full items-center gap-3 rounded-xl border p-2.5 text-left ${theme === item.id ? "theme-accent-soft" : "theme-border hover:bg-[var(--surface-muted)]"}`}>
                <span className="h-8 w-8 shrink-0 rounded-lg shadow-inner" style={{ background: item.swatch }} />
                <span className="min-w-0 flex-1"><span className="block text-sm font-bold">{item.name}</span><span className="theme-muted block text-[11px]">{item.detail}</span></span>
                {theme === item.id && <Check size={16} className="theme-accent" />}
              </button>
            ))}
          </div>
        </div>
      )}
      <button onClick={() => setOpen((value) => !value)} className="theme-button flex items-center gap-2 rounded-full px-4 py-3 text-xs font-black uppercase tracking-wider shadow-xl" aria-expanded={open}>
        <Palette size={16} /> Theme Lab
      </button>
    </div>
  );
}
