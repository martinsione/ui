"use client";
import { useEffect, useState } from "react";
import { twMerge as cn } from "tailwind-merge";
import { getTheme } from "@/lib/get-theme";

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(
    undefined
  );

  // Load initial theme
  useEffect(() => {
    setCurrentTheme(() => getTheme());
  }, [currentTheme]);

  function updateTheme(theme: "light" | "dark" | "system") {
    if (theme !== currentTheme) {
      setCurrentTheme(() => theme);
      localStorage.setItem("theme", theme);
    }
  }

  return [currentTheme, updateTheme] as const;
};

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="flex h-9 w-min items-center rounded-full border border-geist-accents-2 bg-geist-accents-1 p-1">
      <button
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full p-1.5",
          theme === "system"
            ? "bg-geist-accents-2 text-geist-foreground"
            : "text-geist-accents-5 hover:text-geist-foreground"
        )}
        onClick={() => setTheme("system")}
      >
        <SystemIcon />
      </button>
      <button
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full p-1.5",
          theme === "dark"
            ? "bg-geist-accents-2 text-geist-foreground"
            : "text-geist-accents-5 hover:text-geist-foreground"
        )}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon />
      </button>
      <button
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full p-1.5",
          theme === "light"
            ? "bg-geist-accents-2 text-geist-foreground"
            : "text-geist-accents-5 hover:text-geist-foreground"
        )}
        onClick={() => setTheme("light")}
      >
        <SunIcon />
      </button>
    </div>
  );
}

function SystemIcon(props: any) {
  return (
    <svg
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="24"
      {...props}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}

function MoonIcon(props: any) {
  return (
    <svg
      height="24"
      strokeWidth="1.5"
      viewBox="0 0 56 56"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M41.2 36.1c-12.9 0-21-7.8-21-20.3 0-3.5.7-6.7 1.6-8.3.3-.7.4-1 .4-1.5 0-.8-.7-1.7-1.7-1.7-.2 0-.7 0-1.3.3A24.5 24.5 0 004.4 27.1 23.8 23.8 0 0029 51.7c10.2 0 18.4-5.3 22.3-14.1l.3-1.4c0-1-.9-1.6-1.6-1.6a3 3 0 00-1.2.2c-2 .8-4.8 1.3-7.6 1.3zM8.1 27c0-7.3 3.8-14.3 9.9-18-.8 2-1.2 4.5-1.2 7.2 0 14.6 9 23.3 23.9 23.3 2.4 0 4.5-.2 6.4-1a20.8 20.8 0 01-18 9.6C17 48 8.1 39 8.1 27z"
        stroke="none"
        fill="currentColor"
      />
    </svg>
  );
}

function SunIcon(props: any) {
  return (
    <svg
      height="24"
      strokeWidth="1.5"
      viewBox="0 0 56 56"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30 4.6c0-1-.9-2-2-2a2 2 0 00-2 2v5c0 1 .9 2 2 2s2-1 2-2zm9.6 9a2 2 0 000 2.8c.8.8 2 .8 2.9 0L46 13a2 2 0 000-2.9 2 2 0 00-3 0zm-26 2.8c.7.8 2 .8 2.8 0 .8-.7.8-2 0-2.9L13 10c-.7-.7-2-.8-2.9 0-.7.8-.7 2.1 0 3zM28 16a12 12 0 00-12 12 12 12 0 0012 12 12 12 0 0012-12 12 12 0 00-12-12zm0 3.6c4.6 0 8.4 3.8 8.4 8.4 0 4.6-3.8 8.4-8.4 8.4a8.5 8.5 0 01-8.4-8.4c0-4.6 3.8-8.4 8.4-8.4zM51.3 30c1.1 0 2-.9 2-2s-.9-2-2-2h-4.9a2 2 0 00-2 2c0 1.1 1 2 2 2zM4.7 26a2 2 0 00-2 2c0 1.1.9 2 2 2h4.9c1 0 2-.9 2-2s-1-2-2-2zm37.8 13.6a2 2 0 00-3 0 2 2 0 000 2.9l3.6 3.5a2 2 0 002.9 0c.8-.8.8-2.1 0-3zM10 43.1a2 2 0 000 2.9c.8.7 2.1.8 3 0l3.4-3.5c.8-.8.8-2.1 0-2.9-.8-.8-2-.8-2.9 0zm20 3.4c0-1.1-.9-2-2-2a2 2 0 00-2 2v4.9c0 1 .9 2 2 2s2-1 2-2z"
        stroke="none"
        fill="currentColor"
      />
    </svg>
  );
}
