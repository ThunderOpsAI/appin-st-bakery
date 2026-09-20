"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const themes = [
  { id: "toasted", name: "Toasted Amber", swatch: "#c65f32", detail: "Warm bakery classic" },
  { id: "plum", name: "Plum & Butter", swatch: "#8f3d69", detail: "Premium editorial" },
  { id: "cobalt", name: "Cobalt & Citrus", swatch: "#2455d6", detail: "Playful modern" },
  { id: "sage", name: "Sage & Cherry", swatch: "#b53d42", detail: "Local market" },
  { id: "ink", name: "Ink & Apricot", swatch: "#ef8f45", detail: "Dark premium" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

const ThemeContext = createContext<{ theme: ThemeId; setTheme: (theme: ThemeId) => void } | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeId>("toasted");

  useEffect(() => {
    const saved = window.localStorage.getItem("appin-theme") as ThemeId | null;
    if (saved && themes.some((item) => item.id === saved)) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("appin-theme", theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
