"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const BRAND_STORAGE_KEY = "cp_brand";

const BRAND_CLASS = "wozku";
const BRAND_LIGHT_CLASS = "wozku-light";

const BRAND_EVENT = "cp:brand";

// The Wozku brand layer is always on. Light is a variant of it, not an alternative to it.
export type BrandMode = "dark" | "light";

function read(): BrandMode {
  try {
    return window.localStorage.getItem(BRAND_STORAGE_KEY) === "light"
      ? "light"
      : "dark";
  } catch {
    return "dark";
  }
}

function apply(mode: BrandMode) {
  const root = document.documentElement;
  root.classList.add(BRAND_CLASS);
  root.classList.toggle(BRAND_LIGHT_CLASS, mode === "light");
}

function subscribe(onChange: () => void) {
  window.addEventListener(BRAND_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(BRAND_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useBrandLayer() {
  const mode = useSyncExternalStore(subscribe, read, (): BrandMode => "dark");

  const setMode = useCallback((next: BrandMode) => {
    try {
      window.localStorage.setItem(BRAND_STORAGE_KEY, next);
    } catch {
    }
    apply(next);
    window.dispatchEvent(new Event(BRAND_EVENT));
  }, []);

  if (typeof document !== "undefined") apply(mode);

  return { mode, setMode };
}

const MODES: { id: BrandMode; label: string; Icon: typeof Sun }[] = [
  { id: "dark", label: "Dark", Icon: Moon },
  { id: "light", label: "Light", Icon: Sun },
];

export function BrandVariantToggle({
  mode,
  onChange,
}: {
  mode: BrandMode;
  onChange: (next: BrandMode) => void;
}) {
  return (
    <div
      title="Wozku brand guideline"
      className="flex items-center gap-0.5 rounded-(--r-pill) bg-(--ink)/[0.03] p-0.5 text-[11px] font-medium inset-ring-1 inset-ring-(--ink)/[0.08]"
    >
      {MODES.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          aria-pressed={mode === id}
          onClick={() => onChange(id)}
          className={cn(
            "flex flex-1 h-6 items-center justify-center gap-1.5 rounded-(--r-pill) px-2 transition-[background-color,color,box-shadow,scale] duration-150 active:scale-(--press)",
            mode === id
              ? "bg-(--ink)/[0.11] text-foreground shadow-(--lift-sm)"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Icon className="size-3.5 shrink-0" />
          {label}
        </button>
      ))}
    </div>
  );
}
