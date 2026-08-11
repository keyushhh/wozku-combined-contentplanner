"use client";

// Depends on ui/dropdown-menu (@base-ui/react), cn() and avatarTint() from @/lib/utils, and globals.css tokens.

import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn, avatarTint } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface ShellUser {
  name: string;
  email?: string;
  avatarUrl?: string;
}

export interface AccountMenuItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  onSelect?: () => void;
  disabled?: boolean;
}

export function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function AccountMenu({
  user,
  items = [],
  footer,
}: {
  user: ShellUser;
  items?: AccountMenuItem[];
  footer?: ReactNode;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            title={user.name}
            aria-label={`Account: ${user.name}`}
            className="relative flex size-7 shrink-0 items-center justify-center rounded-(--r-pill) transition-[box-shadow,scale] duration-150 active:scale-(--press) after:absolute after:inset-x-0 after:top-1/2 after:h-10 after:-translate-y-1/2 after:content-['']"
          />
        }
      >
        <Avatar user={user} />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="min-w-[220px]">
        <div className="flex items-center gap-2.5 px-2 py-2">
          <Avatar user={user} size="lg" />
          <span className="flex min-w-0 flex-col">
            <span className="truncate text-[12.5px] font-medium text-foreground">
              {user.name}
            </span>
            {user.email && (
              <span className="truncate text-[11px] text-muted-foreground">
                {user.email}
              </span>
            )}
          </span>
        </div>

        <span aria-hidden className="my-1 block h-px bg-(--ink)/[0.08]" />

        {items.map(({ id, label, icon: Icon, onSelect, disabled }) => (
          <DropdownMenuItem
            key={id}
            disabled={disabled}
            onClick={onSelect}
            className="gap-2"
          >
            {Icon && <Icon className="size-3.5 shrink-0" />}
            <span className="flex-1">{label}</span>
          </DropdownMenuItem>
        ))}

        {footer && (
          <>
            <span aria-hidden className="my-1 block h-px bg-(--ink)/[0.08]" />
            <div className="px-2 py-1.5">{footer}</div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Avatar({ user, size = "sm" }: { user: ShellUser; size?: "sm" | "lg" }) {
  const dimension = size === "lg" ? "size-8 text-[11.5px]" : "size-7 text-[10.5px]";

  if (user.avatarUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={user.avatarUrl}
        alt=""
        className={cn(
          "shrink-0 rounded-(--r-pill) object-cover inset-ring-1 inset-ring-(--ink)/[0.12]",
          dimension,
        )}
      />
    );
  }

  return (
    <span
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center rounded-(--r-pill) font-semibold inset-ring-1 inset-ring-(--ink)/[0.12]",
        avatarTint(user.name),
        dimension,
      )}
    >
      {initialsOf(user.name)}
    </span>
  );
}
