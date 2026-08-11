"use client";

// Depends on cn() from @/lib/utils and the design tokens in globals.css. Everything else is props.

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  badge?: number;
  placeholder?: boolean;
}

export function NavRail({
  items,
  secondaryItems = [],
  activeId,
  onNavigate,
  className,
}: {
  items: NavItem[];
  secondaryItems?: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
  className?: string;
}) {
  return (
    <nav
      aria-label="Sections"
      className={cn(
        "flex w-[224px] shrink-0 flex-col gap-1 overflow-y-auto p-3",
        className,
      )}
    >
      {items.map((item) => (
        <RailButton
          key={item.id}
          item={item}
          active={activeId === item.id}
          onClick={() => onNavigate(item.id)}
        />
      ))}

      {secondaryItems.length > 0 && (
        <>
          <span
            aria-hidden
            className="my-2 h-px shrink-0 bg-(--ink)/[0.08]"
          />
          {secondaryItems.map((item) => (
            <RailButton
              key={item.id}
              item={item}
              active={activeId === item.id}
              onClick={() => onNavigate(item.id)}
            />
          ))}
        </>
      )}
    </nav>
  );
}

function RailButton({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick: () => void;
}) {
  const { label, icon: Icon, badge, placeholder } = item;

  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={cn(
        "flex h-9 shrink-0 items-center gap-2.5 rounded-(--r-inner) px-2.5 text-left text-[13px] font-medium transition-[background-color,color,box-shadow,scale] duration-150 active:scale-(--press)",
        active
          ? "bg-(--ink)/[0.10] text-foreground shadow-(--lift-sm) inset-ring-1 inset-ring-(--ink)/[0.09]"
          : "text-muted-foreground hover:bg-(--ink)/[0.05] hover:text-foreground",
      )}
    >
      <Icon
        className={cn(
          "size-4 shrink-0",
          active ? "text-violet-300" : "opacity-80",
        )}
      />
      <span className="min-w-0 flex-1 truncate">{label}</span>

      {typeof badge === "number" && badge > 0 && (
        <span className="flex h-4 min-w-4 items-center justify-center rounded-(--r-pill) bg-amber-500/20 px-1 text-[9.5px] font-semibold tabular-nums text-amber-300">
          {badge}
        </span>
      )}

      {placeholder === true && badge === undefined && (
        <span className="font-(family-name:--font-label) text-[9px] font-semibold uppercase tracking-[0.08em] text-muted-foreground/55">
          Soon
        </span>
      )}
    </button>
  );
}
